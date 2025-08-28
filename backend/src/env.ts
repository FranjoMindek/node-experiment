import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import z from "zod";

dotenvExpand.expand(dotenv.config())

const envSchema = z.object({
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().min(1).max(65535),
  DATABASE_NAME: z.string(),
  DATABASE_URL: z.string(),
  APP_PORT: z.coerce.number().min(1).max(65535),
  APP_URL: z.url(),
  BETTER_AUTH_SECRET: z.string(),
  FRONTEND_URL: z.url(),
  NODE_ENV: z.enum(["development", "production"]),
});

export const env = envSchema.parse(process.env);
