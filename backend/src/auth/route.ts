import { Hono } from "hono";
import { type AuthType, auth } from "@/auth";

const authRouter = new Hono<{ Bindings: AuthType }>({
  strict: false,
});

authRouter.on(["POST", "GET"], "/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export { authRouter };
