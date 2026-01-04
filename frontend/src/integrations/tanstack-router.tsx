import { LoginPage } from "@/features/auth/LoginPage.tsx";
import { RegisterPage } from "@/features/auth/RegisterPage.tsx";
import { HomePage } from "@/features/home/HomePage.tsx";
import Header from "@/shared/components/Header.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { initialQueryClient } from "./tanstack-query.tsx";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof tanstackRouter;
  }
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, registerRoute]);

const tanstackRouter = createRouter({
  routeTree,
  context: {
    queryClient: initialQueryClient,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

export function TanstackRouterProvider() {
  return <RouterProvider router={tanstackRouter} />;
}
