import { drizzle } from "drizzle-orm/better-sqlite3";
import { env } from "@/env";

const db = drizzle({ connection: { source: env.DB_FILE_NAME } });

export { db };
