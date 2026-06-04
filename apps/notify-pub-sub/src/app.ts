import express, { type Express } from "express";
import publisher from "./publisher";
import { NotificationRequest, NotificationResponse } from "./types/http.types";

const app: Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.post(
  "/notify",
  async (req: NotificationRequest, res: NotificationResponse) => {
    const payload = {
      message: req.body.message || "No message provided",
      timestamp: new Date().toISOString(),
    };

    const recivers = await publisher.publish(
      "notifications",
      JSON.stringify(payload),
    );

    res.status(200).json({
      status: "Notification sent",
      recivers,
    });
  },
);

export default app;
