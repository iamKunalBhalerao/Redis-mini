import express, { Request, Response } from "express";
import Redis from "ioredis";
import { appConfig } from "./config/app.config";
import {
  SendOtpRequest,
  SendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  FindTTLRequest,
  FindTTLResponse,
} from "./types/http.types";
import { otpKey } from "./utils/generate-otp";

const app = express();
const redis = new Redis(appConfig.REDIS_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the OTP Verification App");
});

// Send OTP
app.post("/otp/send", async (req: SendOtpRequest, res: SendOtpResponse) => {
  const { phone } = req.body as { phone: string };
  if (!phone) {
    return res.status(400).json({
      success: false,
      message: "Phone number is required",
      otp: null,
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await redis.set(otpKey(phone), otp, "EX", 30); // Valid for 30 seconds

  return res.json({
    success: true,
    message: "OTP sent successfully",
    otp,
  });
});

// Verify OTP
app.post(
  "/otp/verify",
  async (req: VerifyOtpRequest, res: VerifyOtpResponse) => {
    const { phone, otp } = req.body as { phone: string; otp: string };
    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: "Phone number and OTP are required",
      });
    }

    const storedOtp = await redis.get(otpKey(phone));
    if (!storedOtp) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    if (storedOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await redis.del(otpKey(phone));

    return res.json({
      success: true,
      message: "OTP verified successfully",
    });
  },
);

// Get OTP TTL
app.get("/otp/:phone/ttl", async (req: Request, res: Response) => {
  const { phone } = req.params as { phone: string };
  if (!phone) {
    return res.status(400).json({
      success: false,
      message: "Phone number is required",
    });
  }

  const ttl = await redis.ttl(otpKey(phone));
  if (ttl === -1) {
    return res.status(400).json({
      success: false,
      message: "OTP expired",
    });
  }

  return res.status(200).json({
    success: true,
    message: "OTP retrieved successfully",
    ttl,
  });
});

export default app;
