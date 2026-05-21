# redis-*mini*

> A developer-focused monorepo teaching Redis integration through real backend services, shared UI packages, and practical Turborepo tooling.

---

## At a Glance

| | |
|---|---|
| 🖥️ **Backend Apps** | 2 |
| 🌐 **Frontend Apps** | 2 |
| 📦 **Shared Packages** | 4 |
| ⚡ **Redis Commands** | 5 |

---

## Why Redis?

| Concept | What it means |
|---|---|
| 🚀 **In-memory speed** | Sub-millisecond reads and writes — ideal for caches, flags, and sessions |
| 🔑 **Key/value simplicity** | Store banners, tokens, or config with a single `SET`. Retrieve instantly with `GET` |
| 📊 **Health visibility** | `PING` lets services report Redis availability alongside their primary database |

---

## Apps in This Repo

| App | Type | Stack | What it shows |
|---|---|---|---|
| `simple-start` | **Backend** | Express + ioredis + MongoDB | Redis health endpoint alongside a Mongo health endpoint — shows multi-DB integration patterns |
| `site-banner` | **Backend** | Express + ioredis | Pure Redis demo — `SET`, `GET`, `DEL`, and `EXISTS` for a feature-store banner key |
| `web` | **Frontend** | Next.js + packages/ui | How a front-end app consumes shared workspace components in a Redis-powered monorepo |
| `docs` | **Frontend** | Next.js | Placeholder docs site — shows how multiple web apps coexist in one workspace |

### Key Entry Points

**`simple-start`**
```
apps/simple-start/src/app.ts
apps/simple-start/src/config/app.config.ts
apps/simple-start/src/server.ts
```

**`site-banner`**
```
apps/site-banner/src/app.ts
apps/site-banner/src/config/app.config.ts
apps/site-banner/src/server.ts
```

---

## Shared Packages

| Package | Purpose |
|---|---|
| `config` | Shared configuration utilities used across all apps |
| `eslint-config` | Consistent linting rules for the entire workspace |
| `typescript-config` | Unified TypeScript settings to keep types in sync |
| `ui` | Shared React components consumed by `web` and `docs` |

---

## Redis Commands Used

| Command | Purpose |
|---|---|
| `PING` | Health check — verify the server is alive |
| `SET` | Store a value at a key |
| `GET` | Read a value by key |
| `DEL` | Remove a key entirely |
| `EXISTS` | Check whether a key is present |

---

## Environment Configuration

```env
# .env — local development defaults

PORT=5001
REDIS_URL=redis://localhost:6379
DATABASE_URL=mongodb://localhost:27017/redis-mini-db
BANNER_KEY=app:banner
```

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm
- Redis running on `localhost:6379`
- MongoDB *(optional — only needed for the `simple-start` Mongo health endpoint)*

### Step-by-Step

| Step | Command | Description |
|---|---|---|
| **01** Install | `pnpm install` | Install all workspace dependencies |
| **02** Run a service | `pnpm dev --filter site-banner` | Run any single app in isolation via Turborepo filter |
| **03** Run all | `pnpm dev` | Start all apps together (if workspace supports it) |
| **04** Build | `pnpm build` | Compile all apps for production |

---

## Repo Architecture

```
redis-mini/
├── apps/
│   ├── simple-start/     # Express + ioredis + MongoDB health checks
│   ├── site-banner/      # Express + ioredis banner store
│   ├── web/              # Next.js frontend
│   └── docs/             # Next.js docs site
└── packages/
    ├── config/           # Shared configuration
    ├── eslint-config/    # Lint rules
    ├── typescript-config/ # TypeScript settings
    └── ui/               # Shared components
```

---

## How to Extend

| Concept | Status | Description |
|---|---|---|
| **Caching** | ✅ Ready to add | Cache API responses with TTL-based expiry |
| **Sessions** | ✅ Ready to add | Store and validate user sessions in Redis |
| **Rate limiting** | ✅ Ready to add | Throttle requests using `INCR` + `EXPIRE` |
| **Pub/Sub** | 🔜 Future | Pass messages between services in real time |
| **Streams** | 🔜 Future | Build event-driven pipelines with Redis Streams |
| **Hashes & Lists** | 🔜 Future | Model richer data with Redis data structures |

---

## Project Notes

- `apps/simple-start` — best for learning Redis integration **alongside another database**
- `apps/site-banner` — a **pure Redis demo** showing all core operations
- `apps/web` and `apps/docs` — show how **frontend apps** can live in the same monorepo
- `packages/*` — keep shared configuration **consistent** across all apps

---

> Add new apps in `apps/`, shared helpers in `packages/`, and keep logic isolated per service.

**Happy learning!** 🟥