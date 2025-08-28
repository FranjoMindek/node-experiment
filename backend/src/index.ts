import { swagger } from '@elysiajs/swagger';
import { Elysia } from "elysia";
import { betterAuth, generateBetterAuthOpenAPISchema } from "./auth";
import { env } from './env';

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        ...(await generateBetterAuthOpenAPISchema()) as any,
        info: {
          title: "Your App API",
          version: "0.1.0",
        },
        servers: [
          {
            url: env.APP_URL,
          }
        ],
      }
    })
  )
  .mount(betterAuth.handler)
  .group(
    '/api',
    {
      detail: {
        tags: ['API']
      }
    },
    (app) => {
      app.get("/", () => "Hello Elysia")
      return app;
    }
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
