import express, { Response, type Express } from "express";
import Redis from "ioredis";
import { appConfig } from "./config/app.config";
import { QueueJobRequest } from "./types/http.types";

const app: Express = express();
const redis = new Redis(appConfig.REDIS_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("Welcome to Queue List API");
});

app.post("/emails", async (req: QueueJobRequest, res: Response) => {
  const job = {
    to: req.body.to,
    subject: req.body.subject,
    createdAt: new Date().toISOString(),
  };

  await redis.lpush(appConfig.QUEUE_KEY, JSON.stringify(job));
  res.json({
    queued: true,
    message: "Email queued successfully",
    job: job,
  });
});

app.post("/emails/process-one", async (_req, res) => {
  const rawJob = await redis.lpop(appConfig.QUEUE_KEY);
  if (!rawJob) {
    return res.json({
      queued: false,
      message: "No jobs to process",
    });
  }

  const job = JSON.parse(rawJob);

  res.json({
    processed: true,
    message: "Email processed successfully",
    job,
  });
});

export default app;
