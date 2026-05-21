# web

> A Next.js frontend app in the monorepo that demonstrates shared UI components and modern workspace architecture.

---

## What This App Is

`web` is the primary frontend app for the repository:

- built with Next.js 16
- uses React 19
- consumes the shared `@repo/ui` package
- shows how frontend apps live side-by-side with backend services

---

## Why It Matters

This app is the UI entry point for the monorepo and demonstrates how workspace packages can be shared consistently across apps.

It is intentionally simple so it can be extended into a full user interface or dashboard later.

---

## Highlights

| What it shows | Why it matters |
|---|---|
| Shared UI package | Reuse components across multiple apps |
| Next.js app router | Modern React page composition |
| Frontend in a monorepo | Keeps UI and services aligned |
| Fast local dev | `pnpm dev --filter web` |

---

## App Structure

- `app/page.tsx` — homepage component and sample UI
- `app/layout.tsx` — root layout for the app
- `app/globals.css` — styling for the frontend
- `public/` — static assets and images

---

## Run Locally

```bash
pnpm install
pnpm dev --filter web
```

Open `http://localhost:3000` to view the app.

---

## Commands

| Command | What it does |
|---|---|
| `pnpm dev --filter web` | run the Next.js development server |
| `pnpm build --filter web` | build the frontend for production |
| `pnpm lint --filter web` | run ESLint for this app |

---

## Notes

- `web` is a good starter app for building a front-end dashboard or React-driven interface.
- Use the shared `Button` component from `packages/ui` to keep design and behavior consistent.
- The current homepage is minimal, so it is easy to replace with your own landing page.
