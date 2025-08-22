import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { authRouter } from "@/auth/route";

const app = new Hono();

app.get("/", (context) => {
  return context.text("Hello Hono!");
});

const routes = [authRouter] as const;
routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

serve(
  {
    port: 3001,
    fetch: app.fetch,
  },
  (addressInfo) => {
    console.log(`Server is running at http://${addressInfo.address}:${addressInfo.port}`);
  },
);
