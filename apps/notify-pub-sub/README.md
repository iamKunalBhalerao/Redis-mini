# notify-pub-sub

> A Redis publish/subscribe demo service that sends notification payloads to a Redis channel.

---

## What This App Is

`notify-pub-sub` is a small Express service that publishes JSON notification messages to the `notifications` Redis channel. It includes a publisher endpoint and a standalone subscriber script for local testing and development.

## Why It Matters

This app shows how to use Redis Pub/Sub with Node.js and TypeScript:

- publish messages from an HTTP endpoint
- connect to Redis using `ioredis`
- run a subscriber process to receive notifications
- keep configuration centralized with shared repo config

---

## Key Features

| Feature | Description |
|---|---|
| Redis publisher | Publishes JSON notifications to `notifications` channel |
| Express endpoint | `POST /notify` sends notifications from HTTP payloads |
| Subscriber script | `pnpm run subscriber` listens for Redis messages |
| Shared config | Uses repo-wide config and environment variables |

---

## App Structure

- `src/app.ts` — Express app and `/notify` route
- `src/server.ts` — app bootstrap and startup
- `src/publisher.ts` — Redis publisher client
- `src/subscriber.ts` — Redis subscriber that logs incoming notifications
- `src/config/app.config.ts` — environment-driven configuration
- `src/types/http.types.ts` — request/response type definitions

---

## Environment

The app reads environment variables from `.env` or the system environment.

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `5007` | HTTP port |
| `REDIS_URL` | `redis://localhost:6379` | Redis connection string |

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/` | `GET` | Simple hello response |
| `/notify` | `POST` | Publish a notification message to Redis |

### POST `/notify`

Request body example:

```json
{
  "message": "Hello from notify-pub-sub"
}
```

Response example:

```json
{
  "status": "Notification sent",
  "recivers": 1
}
```

If no message is provided, a default payload is published instead.

---

## Run Locally

From the repository root:

```bash
pnpm install
pnpm --filter notify-pub-sub dev
```

Then send a request to `http://localhost:5007/notify`.

To run the subscriber in a separate process:

```bash
pnpm --filter notify-pub-sub run subscriber
```

This will subscribe to `notifications` and print incoming payloads.

---

## Notes

- `publish` returns the number of subscribers that received the message.
- The subscriber logs messages as soon as they arrive on the `notifications` channel.
- This app is a good base for adding notification workflows, event broadcasting, or real-time messaging features.
