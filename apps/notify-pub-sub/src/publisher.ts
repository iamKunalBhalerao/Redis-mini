import Redis from "ioredis";
import { appConfig } from "./config/app.config";

const publisher = new Redis(appConfig.REDIS_URL || "redis://localhost:6379");

export default publisher;
