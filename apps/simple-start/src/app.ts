import express, { Request, Response, type Express } from "express";
import mongoose, { mongo } from "mongoose";
import Redis from "ioredis";
import { appConfig } from "./config/app.config";

const app: Express = express();
const redis = new Redis(appConfig.REDIS_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Redis and Mongo API");
});

app.get("/check/redis", (_req: Request, res: Response) => {
  redis.ping((err, pong) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Redis is not available",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Redis is available",
      });
    }
    redis.disconnect();
  });
});

app.get("/check/mongo", async (_req: Request, res: Response) => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connect(appConfig.MONGO_URL);
  }
  res.status(200).json({
    success: true,
    message: "MongoDB is available",
  });
});

export default app;
