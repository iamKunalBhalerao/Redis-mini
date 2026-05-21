export const appConfig = {
  PORT: process.env.PORT || 3000,
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  MONGO_URL:
    process.env.DATABASE_URL || "mongodb://localhost:27017/redis-mini-db",
  BANNER_KEY: process.env.BANNER_KEY || "app:banner",
};
