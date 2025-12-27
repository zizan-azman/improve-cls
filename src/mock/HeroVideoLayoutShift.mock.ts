import videoTeaser from "@/assets/videos/bee-360p.mp4";
import heroVideoLayoutShift1 from "@/assets/images/hero-video/layout-shift/hero-video-no-dimension.png";
import heroVideoLayoutShift2 from "@/assets/images/hero-video/layout-shift/hero-video-poor-cls.png";
import type { HeroVideoConfig } from "@/components/hero/hero-video/HeroVideo.model";

export const HERO_VIDEO_LAYOUT_SHIFT_MOCK: HeroVideoConfig = {
  type: "layout-shift",
  heading: "Layout shift caused by video element inside a flex container",
  teaser: {
    videoWidth: undefined,
    videoHeight: undefined,
    videoPath: videoTeaser,
    videoAlt: "Bee pollinating a flower",
    paragraphs: [
      {
        uniqueID: "1",
        text: "The video shown here triggers a significant layout shift when it finishes loading.",
      },
      {
        uniqueID: "2",
        text: "Scroll down to learn why this happens and how it impacts the Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "3",
        text: "To learn how to fix this layout shift and improve the CLS score, check out the links below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/video/width-height",
        text: "Width and Height solution",
      },
      {
        uniqueID: "2",
        path: "/video/aspect-ratio",
        text: "Aspect ratio solution",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of video element with no size dimension",
          imgPath: heroVideoLayoutShift1,
          imgWidth: "318",
          imgHeight: "200",
        },
        textParts: [
          "In this example, a ",
          {
            text: "video element",
            type: "bold-italic",
          },
          " is placed inside a flex container without any predefined ",
          {
            text: "width or height attributes",
            type: "bold",
          },
          " or ",
          {
            text: "CSS styling",
            type: "bold",
          },
          ".",
        ],
        text: "In this example, a video element is placed inside a flex container without any predefined width or height attributes or CSS styling.",
      },
      {
        uniqueID: "1",
        textParts: [
          "Because the ",
          {
            text: "video element",
            type: "bold-italic",
          },
          " has no ",
          {
            text: "predefined width and height dimensions",
            type: "bold",
          },
          ", the page experiences a visible ",
          {
            text: "layout shift",
            type: "bold",
          },
          " when the video finishes loading.",
        ],
        text: "Because the video element has no predefined width and height dimensions, the page experiences a visible layout shift when the video finishes loading.",
      },
      {
        uniqueID: "2",
        textParts: [
          "As a result, the browser initially renders the ",
          {
            text: "video with zero dimensions",
            type: "bold",
          },
          ". Once the video loads and its size is recalculated, it ",
          {
            text: "pushes the content below",
            type: "bold",
          },
          ", causing a visible ",
          {
            text: "layout shift",
            type: "bold",
          },
          ".",
        ],
        text: "As a result, the browser initially renders it with zero dimensions and later recalculates its size once the video loads—pushing content below it and causing a visible layout shift.",
      },
      {
        uniqueID: "3",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Lighthouse poor CLS score",
          imgPath: heroVideoLayoutShift2,
          imgWidth: "213",
          imgHeight: "87",
        },
        textParts: [
          "When running a ",
          {
            text: "Lighthouse",
            type: "bold-italic",
          },
          " report, the results show that this page has a ",
          {
            text: "poor Cumulative Layout Shift (CLS) score",
            type: "bold",
          },
          ".",
        ],
        text: "When running a Lighthouse report (Desktop), the results show that this page has a poor Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "4",
        textParts: [
          "To learn how to fix this layout shift and improve the CLS score, ",
          {
            text: "check out ",
            type: "bold",
          },
          "the links below.",
        ],
        text: "To learn how to fix this layout shift and improve the CLS score, check out the links below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/video/width-height",
        text: "Width and Height solution",
      },
      {
        uniqueID: "2",
        path: "/video/aspect-ratio",
        text: "Aspect ratio solution",
      },
    ],
  },
};
