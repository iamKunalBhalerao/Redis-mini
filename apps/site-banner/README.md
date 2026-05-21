# site-banner

> A Redis-first service that stores a banner value, then reads, deletes, and validates it.

---

## What This App Is

`site-banner` is an Express API that uses Redis as a single feature store for banner text.

It is perfect for learning the fundamentals of Redis key/value operations with a real API.

## Why It Matters

This app demonstrates how Redis can power a lightweight feature:

- text or banner storage
- quick reads and writes
- simple state validation
- content removal with Redis commands

---

## Key Features

| Feature | Description |
|---|---|
| `SET` | Store banner text at a Redis key |
| `GET` | Read banner text from Redis |
| `DEL` | Remove the banner key from Redis |
| `EXISTS` | Confirm whether the key still exists |
| Minimal API | Easy to extend with more Redis operations |

---

## App Structure

- `src/server.ts` — service startup
- `src/app.ts` — Express routes and Redis logic
- `src/config/app.config.ts` — environment settings
- `src/types/http.types.ts` — request/response typing

---

## Environment

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `5002` | HTTP port |
| `REDIS_URL` | `redis://localhost:6379` | Redis connection string |
| `BANNER_KEY` | `app:banner` | Key used to store banner content |

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/` | `GET` | Welcome status for the banner service |
| `/set` | `POST` | Set a new banner value |
| `/get` | `GET` | Read the current banner value |
| `/delete` | `DELETE` | Remove the banner key |
| `/exists` | `GET` | Check whether the banner key exists |

---

## Request Example

```bash
curl -X POST http://localhost:5002/set \
  -H "Content-Type: application/json" \
  -d '{"value":"Hello from Redis"}'
```

---

## Run Locally

```bash
pnpm install
pnpm dev --filter site-banner
```

Then visit `http://localhost:5002` and exercise the endpoints.

---

## Notes

- `site-banner` is built to be extended into a content feature service.
- You can add TTL support, read-through caching, or more keys to model multiple banners.
- This app keeps Redis usage focused on core key/value commands for fast learning.
