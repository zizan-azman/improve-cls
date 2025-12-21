import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "@/pages/home/HomePage";
import {
  ContainerLayoutShiftPage,
  ContainerWidthHeightPage,
} from "@/pages/container";
import {
  ImgLayoutShiftPage,
  ImgAspectRatioPage,
  ImgWidthHeightPage,
} from "@/pages/img";
import {
  VideoLayoutShiftPage,
  VideoAspectRatioPage,
  VideoWidthHeightPage,
} from "@/pages/video";
import {
  AsyncLayoutShiftPage,
  AsyncLoadingPlaceholderPage,
  AsyncMinWidthHeightPage,
} from "@/pages/async";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      /* Home page ("/") */
      {
        index: true,
        element: <HomePage />,
      },

      /* Other pages */
      // Container
      {
        path: "container/layout-shift",
        element: <ContainerLayoutShiftPage />,
      },
      {
        path: "container/width-height",
        element: <ContainerWidthHeightPage />,
      },
      // Img
      {
        path: "img/layout-shift",
        element: <ImgLayoutShiftPage />,
      },
      {
        path: "img/width-height",
        element: <ImgWidthHeightPage />,
      },
      {
        path: "img/aspect-ratio",
        element: <ImgAspectRatioPage />,
      },
      // Video
      {
        path: "video/layout-shift",
        element: <VideoLayoutShiftPage />,
      },
      {
        path: "video/width-height",
        element: <VideoWidthHeightPage />,
      },
      {
        path: "video/aspect-ratio",
        element: <VideoAspectRatioPage />,
      },
      // Async Content
      {
        path: "async/layout-shift",
        element: <AsyncLayoutShiftPage />,
      },
      {
        path: "async/min-width-height",
        element: <AsyncMinWidthHeightPage />,
      },
      {
        path: "async/loading-placeholder",
        element: <AsyncLoadingPlaceholderPage />,
      },

      // Wildcard fallback
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
