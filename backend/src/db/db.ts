import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { env } from '../env';

const postgresPool = new Pool({
  connectionString: env.DATABASE_URL,
});
const db = drizzle({ client: postgresPool });

export { db };
