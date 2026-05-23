export const appConfig = {
  PORT: process.env.PORT || 5001,
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  QUEUE_KEY: process.env.QUEUE_KEY || "queue:email",
};
