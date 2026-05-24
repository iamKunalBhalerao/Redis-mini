import { Worker } from "bullmq";
import { connection } from "./config/app.config";

function startWorker() {
  const worker = new Worker(
    "emails",
    async (job) => {
      console.log(`Processing job ${job.id} with data:`, job.data);
      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Finished processing job ${job.id}`);
    },
    {
      connection,
    },
  );

  return worker;
}

export default startWorker;
