import type { SideNavigationConfig } from "@/components/navbar/side-navigation/SideNavigation.model";

export const SIDE_NAVIGATION_MOCK: SideNavigationConfig = {
  hamburger: { id: "#menu", width: "24", height: "24" },
  logo: {
    id: "#cls-logo",
    path: "/",
    width: "44",
    height: "44",
    text: "Improve CLS Score",
  },
  groups: [
    {
      id: "container",
      button: {
        iconID: "#picture-in-picture",
        iconWidth: "24",
        iconHeight: "24",
        text: "Media Containers",
      },
      links: [
        { path: "/container/layout-shift", text: "Layout shift example" },
        { path: "/container/width-height", text: "Add width or height" },
      ],
    },
    {
      id: "img",
      button: {
        iconID: "#imagesmode",
        iconWidth: "24",
        iconHeight: "24",
        text: "Image element",
      },
      links: [
        { path: "/img/layout-shift", text: "Layout shift example" },
        { path: "/img/width-height", text: "Add width or height" },
        { path: "/img/aspect-ratio", text: "Img aspect ratio" },
      ],
    },
    {
      id: "video",
      button: {
        iconID: "#slideshow",
        iconWidth: "24",
        iconHeight: "24",
        text: "Video element",
      },
      links: [
        { path: "/video/layout-shift", text: "Layout shift example" },
        { path: "/video/width-height", text: "Video width or height" },
        { path: "/video/aspect-ratio", text: "Video aspect ratio" },
      ],
    },
    {
      id: "async",
      button: {
        iconID: "#event-list",
        iconWidth: "24",
        iconHeight: "24",
        text: "Async Content",
      },
      links: [
        { path: "/async/layout-shift", text: "Layout shift example" },
        { path: "/async/loading-placeholder", text: "Loading Placeholder" },
        { path: "/async/min-width-height", text: "Add min width or height" },
      ],
    },
  ],
};
