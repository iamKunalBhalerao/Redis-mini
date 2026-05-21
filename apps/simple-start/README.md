# simple-start

> A backend service that demonstrates Redis integration alongside MongoDB health checks.

---

## What This App Is

`simple-start` is a learning-focused Express service built with:

- `ioredis` for Redis connectivity
- `mongoose` for MongoDB health checks
- shared config from the monorepo

This app is ideal for understanding how Redis can sit next to another database in the same service.

## Why It Matters

`simple-start` shows a real-world pattern:

- keep Redis connections lightweight and reusable
- use health endpoints to monitor service dependencies
- separate config from app logic

---

## Key Features

| Feature | Description |
|---|---|
| Redis connection | Connects to Redis using `REDIS_URL` and `ioredis` |
| Redis health check | `GET /check/redis` returns Redis availability |
| Mongo health check | `GET /check/mongo` validates Mongo connectivity |
| Express API | Basic JSON API with easy extension points |

---

## App Structure

- `src/server.ts` — application bootstrap
- `src/app.ts` — Express routes and Redis/Mongo logic
- `src/config/app.config.ts` — environment-driven configuration

---

## Environment

The app reads environment variables from `.env` or system environment.

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `5001` | HTTP port |
| `REDIS_URL` | `redis://localhost:6379` | Redis connection string |
| `DATABASE_URL` | `mongodb://localhost:27017/redis-mini-db` | MongoDB connection string |
| `BANNER_KEY` | `app:banner` | Not used here, but available across shared config |

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/` | `GET` | Welcome message |
| `/check/redis` | `GET` | Ping Redis and return availability |
| `/check/mongo` | `GET` | Verify MongoDB connection state |

---

## Run Locally

```bash
pnpm install
pnpm dev --filter simple-start
```

Then open `http://localhost:5001` or hit the health endpoints.

---

## Notes

- This app is a great starting point for adding Redis caching, session storage, or rate limiting.
- Redis is intentionally kept simple here so you can extend the service without distraction.
- MongoDB is optional unless you want to test the Mongo health endpoint.
