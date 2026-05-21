export const appConfig = {
  PORT: process.env.PORT || 3000,
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  BANNER_KEY: process.env.BANNER_KEY || "app:banner",
};
