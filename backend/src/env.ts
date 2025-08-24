import z from "zod";

const envSchema = z.object({
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().min(1).max(65535),
  DATABASE_NAME: z.string(),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  FRONTEND_URL: z.url(),
});

const env = envSchema.parse(process.env);

export { env };
