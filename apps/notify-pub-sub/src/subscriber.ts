import Redis from "ioredis";
import { appConfig } from "./config/app.config";

const subscriber = new Redis(appConfig.REDIS_URL || "redis://localhost:6379");

subscriber.subscribe("notifications", (error) => {
  if (error) {
    console.error("Failed to subscribe to notifications channel:", error);
    return;
  }
  console.log("Subscribed to notifications channel");
});

subscriber.on("message", (channel, message) => {
  console.log(
    "Received message from channel:",
    channel,
    " with message:",
    JSON.parse(message),
  );
});
