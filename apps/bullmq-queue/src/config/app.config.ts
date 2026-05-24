export const appConfig = {
  PORT: process.env.PORT || 5006,
};

export const connection =  {
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
}
