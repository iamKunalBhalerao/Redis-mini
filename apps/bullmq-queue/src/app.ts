import express, { type Express } from "express";
import emailQueue from "./queue";
import startWorker from "./worker";
import { SendEmailRequest, SendEmailResponse } from "./types/http.types";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

startWorker();

app.get("/", (_req, res) => {
  res.send("Welcome to BullMQ Queue API");
});

app.post(
  "/send-email",
  async (req: SendEmailRequest, res: SendEmailResponse) => {
    const job = await emailQueue.add(
      "send-email",
      {
        to: req.body.to,
        subject: req.body.subject || "No Subject",
      },
      {
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 1000,
        },
      },
    );

    res.status(200).json({
      success: true,
      message: "Email job added to the queue",
      job: {
        id: job.id,
        to: job.data.to,
        subject: job.data.subject,
      },
    });
  },
);

export default app;
