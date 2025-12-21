import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const LayoutShiftPage = lazy(
  () => import("@/pages/container/ContainerLayoutShiftPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ✅ Home page ("/")
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },

      // Other pages
      {
        path: "container/layout-shift",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutShiftPage />
          </Suspense>
        ),
      },

      // ✅ Wildcard fallback (redirect)
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
