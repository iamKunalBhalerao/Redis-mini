import express, { Request, Response, type Express } from "express";
import Redis from "ioredis";
import { appConfig } from "./config/app.config";
import { SetKeyRequest, SetKeyResponse } from "./types/http.types";

const app: Express = express();
const redis = new Redis(appConfig.REDIS_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: "Welcome to site banner API",
  });
});

// Add value to redis key
app.post("/set", async (req: SetKeyRequest, res: SetKeyResponse) => {
  const { value } = req.body as { value: string };
  const result = await redis.set(
    appConfig.BANNER_KEY,
    value || "Default value for banner",
  );
  res.status(200).json({
    ok: true,
    result,
    message: "Value set",
  });
});

// Get value from redis key
app.get("/get", async (_req: Request, res: Response) => {
  const value = await redis.get(appConfig.BANNER_KEY);
  res.status(200).json({
    ok: value ? true : false,
    message: value ?? "No value found",
  });
});

// delete value from redis key
app.delete("/delete", async (_req: Request, res: Response) => {
  await redis.del(appConfig.BANNER_KEY);
  res.status(200).json({
    ok: true,
    message: "Value deleted",
  });
});

// check if redis key exists
app.get("/exists", async (_req: Request, res: Response) => {
  const exists = await redis.exists(appConfig.BANNER_KEY);
  res.status(200).json({
    ok: Boolean(exists),
    message: exists ? "Key exists" : "Key does not exist",
  });
});

export default app;
