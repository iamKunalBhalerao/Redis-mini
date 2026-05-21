# OTP Verify

A lightweight OTP verification microservice built with Express and Redis.

This project demonstrates a simple phone-based OTP workflow with a fast in-memory Redis store, short-lived tokens, and easy-to-use HTTP endpoints.

## ✨ Features

- Generate 6-digit OTP codes
- Store OTPs in Redis with a 30-second expiration
- Verify OTPs and invalidate them after use
- Check remaining TTL for a phone number’s OTP
- Built with TypeScript for safer server code

## 🧱 Tech Stack

- Node.js
- TypeScript
- Express
- Redis (via `ioredis`)
- dotenv

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- `pnpm`
- Redis running locally or remotely

### Install dependencies

From the repository root:

```bash
pnpm install
```

### Run locally

From the project root:

```bash
pnpm --filter otp-verify dev
```

Or from the app folder:

```bash
cd apps/otp-verify
pnpm dev
```

The server will start on the port defined in `.env` or default to `5003`.

## ⚙️ Environment Variables

Create a `.env` file in `apps/otp-verify` with values like:

```env
PORT=5003
REDIS_URL=redis://localhost:6379
```

If no `.env` file is provided, the app defaults to:

- `PORT=5003`
- `REDIS_URL=redis://localhost:6379`

## 🧪 API Endpoints

### GET `/`

Returns a simple welcome message.

### POST `/otp/send`

Sends an OTP for a phone number.

Request body:

```json
{
  "phone": "+1234567890"
}
```

Response:

- `success`: `true` when OTP is generated
- `message`: status text
- `otp`: generated OTP string

### POST `/otp/verify`

Verifies an OTP for a phone number.

Request body:

```json
{
  "phone": "+1234567890",
  "otp": "123456"
}
```

Response:

- `success`: `true` when OTP is valid
- `message`: verification status

### GET `/otp/:phone/ttl`

Retrieves the remaining TTL for the OTP stored for a phone number.

Response:

- `success`: `true` when OTP exists
- `message`: status text
- `ttl`: seconds remaining before expiration

## 💡 Notes

- OTPs are valid for only 30 seconds.
- After successful verification, the OTP is deleted from Redis.
- This app is designed as a proof-of-concept service, ideal for learning or extending into a full authentication flow.

## 📁 Folder Structure

- `src/app.ts` — main Express application and routes
- `src/server.ts` — app bootstrap
- `src/config/app.config.ts` — environment configuration
- `src/utils/generate-otp.ts` — Redis key generation helper

## 🛠️ Scripts

From `apps/otp-verify`:

- `pnpm dev` — start the app in development mode
- `pnpm build` — compile TypeScript
- `pnpm check` — type check the project
- `pnpm start` — run the compiled app

## 👨‍💻 Author

Created by `kunalBhalerao`
