import express, { Request, Response } from "express";
import Redis from "ioredis";
import { appConfig } from "./config/app.config";
import {
  HASHRequest,
  HASHResponse,
  JSONRequest,
  JSONResponse,
} from "./types/http.types";

const app = express();
const redis = new Redis(appConfig.REDIS_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the OTP Verification App");
});

// Save user profile as JSON
app.post("/user/:id/json", async (req: JSONRequest, res: JSONResponse) => {
  await redis.set(`user:${req.params.id}:json`, JSON.stringify(req.body));
  res.status(200).json({
    success: true,
    message: "User profile updated successfully",
    savedAs: "JSON",
  });
});

// Get user profile as JSON
app.get("/user/:id/json", async (req: Request, res: Response) => {
  const user = await redis.get(`user:${req.params.id}:json`);
  res.status(200).json({
    success: true,
    message: "User profile retrieved successfully",
    user: user ? JSON.parse(user) : null,
  });
});

// Save user profile as HASH
app.post("/user/:id/hash", async (req: HASHRequest, res: HASHResponse) => {
  await redis.hset(`user:${req.params.id}:hash`, req.body);
  res.status(200).json({
    success: true,
    message: "User hash updated successfully",
    savedAs: "HASH",
  });
});

// Get user profile as HASH
app.get("/user/:id/hash", async (req: Request, res: Response) => {
  const user = await redis.hgetall(`user:${req.params.id}:hash`);
  res.status(200).json({
    success: true,
    message: "User hash retrieved successfully",
    user: user ?? null,
  });
});

export default app;
