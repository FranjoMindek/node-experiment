import { FormComplexDemoPage } from "@/features/demo/from-demo/FormComplexDemoPage.tsx";
import { FormSimpleDemoPage } from "@/features/demo/from-demo/FormSimpleDemoPage.tsx";
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

const formSimpleDemoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/demo/form/simple",
  component: FormSimpleDemoPage,
});

const formComplexDemoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/demo/form/complex",
  component: FormComplexDemoPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  formComplexDemoRoute,
  formSimpleDemoRoute,
]);

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
