# docs

> A companion documentation site in the monorepo, designed to host learning content, examples, and internal docs.

---

## What This App Is

`docs` is a documentation-first Next.js app that lives alongside the repo’s main frontend and backend services.

It is built for documentation, tutorials, or internal knowledge sharing with the same workspace packages.

---

## Why It Matters

This app shows how a monorepo can host multiple independent frontend experiences while sharing design and config assets.

Use it as a docs hub, product guide, or developer portal.

---

## Highlights

| What it shows | Why it matters |
|---|---|
| Separate docs site | Keep documentation isolated from the main UI |
| Shared package reuse | Use the same workspace components as `web` |
| Fast preview | `pnpm dev --filter docs` |
| Repo-friendly docs | Scale docs as the repo grows |

---

## App Structure

- `app/page.tsx` — docs homepage content
- `app/layout.tsx` — shared layout and metadata
- `app/globals.css` — app-specific styling
- `public/` — static assets and icons

---

## Run Locally

```bash
pnpm install
pnpm dev --filter docs
```

Open `http://localhost:3001` to preview the docs app.

---

## Commands

| Command | What it does |
|---|---|
| `pnpm dev --filter docs` | run the docs app locally |
| `pnpm build --filter docs` | build the docs app for production |
| `pnpm lint --filter docs` | lint the docs app |

---

## Notes

- `docs` is a lightweight documentation app that can be expanded into a full knowledge portal.
- Use it to document backend services, Redis concepts, or monorepo architecture.
- This app is intentionally simple so it can be customized quickly.
