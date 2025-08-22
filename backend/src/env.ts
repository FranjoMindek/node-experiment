import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  DB_FILE_NAME: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  FRONTEND_URL: z.url(),
});

const env = envSchema.parse(process.env);

export { env };
