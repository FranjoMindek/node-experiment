# Bun + Elysia + Drizzle + BetterAuth

## Quick Start

```bash
bun install
bun run db:start
bun run migration:migrate
bun run dev
```

## Database Commands

- `bun run db:start` - Start PostgreSQL with Docker
- `bun run db:stop` - Stop PostgreSQL Docker database
- `bun run db:studio` - Open Drizzle Studio (must have database running)
- `bun run migration:generate` - Generate migrations
- `bun run migration:migrate` - Run migrations