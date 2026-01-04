# Bun + Elysia + Drizzle + BetterAuth

## Quick Start

```sh
bun install
bun run db:start
bun run migration:migrate
bun run dev
```

## Database Commands

```sh
`bun run db:start`           # Start PostgreSQL with Docker
`bun run db:stop`            # Stop PostgreSQL Docker database
`bun run db:studio`          # Open Drizzle Studio (must have database running)
`bun run migration:generate` # Generate a new migration
`bun run migration:migrate`  # Run migrations on the database
```
