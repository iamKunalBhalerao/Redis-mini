import { Queue } from "bullmq";
import { connection } from "./config/app.config";

const emailQueue = new Queue("emails", { connection });
export default emailQueue;