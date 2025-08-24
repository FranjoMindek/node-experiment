import { swagger } from '@elysiajs/swagger';
import { Elysia } from "elysia";
import { betterAuth, generateBetterAuthOpenAPISchema } from "./auth";

const betterAuthOpenAPISchema = await generateBetterAuthOpenAPISchema();
console.log(betterAuthOpenAPISchema)

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        ...betterAuthOpenAPISchema as any,
        info: {
          title: "Your App API",
          version: "0.1.0",
        },

      }
    })
  )
  .mount(betterAuth.handler)
  .group(
    '/api',
    (app) => {
      app.get("/", () => "Hello Elysia")
      return app;
    }
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
