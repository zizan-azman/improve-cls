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
      uniqueID: "1",
      button: {
        iconID: "#picture-in-picture",
        iconWidth: "24",
        iconHeight: "24",
        text: "Media Containers",
      },
      links: [
        {
          path: "/container/layout-shift",
          text: "Layout shift example",
          uniqueID: "1",
        },
        {
          path: "/container/width-height",
          text: "Add width or height",
          uniqueID: "2",
        },
      ],
    },
    {
      id: "img",
      uniqueID: "2",
      button: {
        iconID: "#imagesmode",
        iconWidth: "24",
        iconHeight: "24",
        text: "Image element",
      },
      links: [
        {
          path: "/img/layout-shift",
          text: "Layout shift example",
          uniqueID: "1",
        },
        {
          path: "/img/width-height",
          text: "Add width or height",
          uniqueID: "2",
        },
        { path: "/img/aspect-ratio", text: "Img aspect ratio", uniqueID: "3" },
      ],
    },
    {
      id: "video",
      uniqueID: "3",
      button: {
        iconID: "#slideshow",
        iconWidth: "24",
        iconHeight: "24",
        text: "Video element",
      },
      links: [
        {
          path: "/video/layout-shift",
          text: "Layout shift example",
          uniqueID: "1",
        },
        {
          path: "/video/width-height",
          text: "Video width or height",
          uniqueID: "2",
        },
        {
          path: "/video/aspect-ratio",
          text: "Video aspect ratio",
          uniqueID: "3",
        },
      ],
    },
    {
      id: "async",
      uniqueID: "4",
      button: {
        iconID: "#event-list",
        iconWidth: "24",
        iconHeight: "24",
        text: "Async Content",
      },
      links: [
        {
          path: "/async/layout-shift",
          text: "Layout shift example",
          uniqueID: "1",
        },
        {
          path: "/async/loading-placeholder",
          text: "Loading Placeholder",
          uniqueID: "2",
        },
        {
          path: "/async/min-width-height",
          text: "Add min width or height",
          uniqueID: "3",
        },
      ],
    },
  ],
};
