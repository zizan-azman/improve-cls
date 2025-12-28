import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "@/pages/home/HomePage";
import ConclusionPage from "@/pages/conclusion/ConclusionPage";
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
  AsyncTemporarySkeletonPage,
} from "@/pages/async";

export const router = createBrowserRouter(
  [
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
          path: "async/loading-placeholder",
          element: <AsyncLoadingPlaceholderPage />,
        },
        {
          path: "async/temporary-skeleton",
          element: <AsyncTemporarySkeletonPage />,
        },

        // Conclusion
        {
          path: "conclusion",
          element: <ConclusionPage />,
        },

        // Wildcard fallback
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ],
  {
    basename: "/improve-cls",
  }
);
