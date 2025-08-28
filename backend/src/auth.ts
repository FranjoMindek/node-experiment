import { betterAuth as generateBetterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import { db } from "./db/db";
import { env } from "./env";

export const betterAuth = generateBetterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  trustedOrigins: [env.FRONTEND_URL],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    // github: {
    //   clientId: env.GITHUB_CLIENT_ID,
    //   clientSecret: env.GITHUB_CLIENT_SECRET,
    // },
    // google: {
    //   clientId: env.GOOGLE_CLIENT_ID,
    //   clientSecret: env.GOOGLE_CLIENT_SECRET,
    // },
  },
  usePlural: true,
  plugins: [
    openAPI()
  ],
  basePath: '/api/auth',
  baseURL: env.APP_URL,
});

export async function generateBetterAuthOpenAPISchema() {
  const baseSchema = await betterAuth.api.generateOpenAPISchema()

  const newPaths: typeof baseSchema.paths = {}
  for (const [path, operations] of Object.entries(baseSchema.paths)) {
    newPaths[`${betterAuth.options.basePath}${path}`] = operations
    for (const key of Object.keys(operations) as Array<keyof typeof operations>) {
      const operation = operations[key]!
      operation.tags = [`Better Auth`]
    }
  }
  baseSchema.paths = newPaths

  return baseSchema
}