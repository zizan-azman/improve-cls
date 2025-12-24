import heroVideoLayoutShift1 from "@/assets/images/hero-video/layout-shift/hero-video-no-dimension.png";
import type { HeroAsyncConfig } from "@/components/hero/hero-async/HeroAsync.model";
import { NEWS_MODERN_MOCK_DATA } from "@/components/news/news-modern/NewsModern.mock";

export const HERO_ASYNC_LAYOUT_SHIFT_MOCK: HeroAsyncConfig = {
  heading: "Layout shift caused by video element inside a flex container",
  teaser: {
    newsConfig: NEWS_MODERN_MOCK_DATA,
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
        text: "In this example, we have a video element inside a typical flex container. This video element does not have any width and height attribute. It also does not have any width and height styling.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt: "Screenshot of video element with no size dimension",
          imgPath: heroVideoLayoutShift1,
        },
      },
      {
        uniqueID: "1",
        text: "Because the video element does not have any size dimension, this page experiences a visible layout shift when the video finishes loading.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt: "Screenshot of video element with no size dimension",
          imgPath: heroVideoLayoutShift1,
        },
      },
      {
        uniqueID: "2",
        text: "As a result, the browser initially renders it with zero dimensions and later recalculates its size once the video loads—pushing content below it and causing a visible layout shift.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt: "Screenshot of video element with no size dimension",
          imgPath: heroVideoLayoutShift1,
        },
      },
      {
        uniqueID: "3",
        text: "When running a Lighthouse report (Desktop), the results show that this page has a poor Cumulative Layout Shift (CLS) score.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt: "Screenshot of video element with no size dimension",
          imgPath: heroVideoLayoutShift1,
        },
      },
      {
        uniqueID: "4",
        text: "To learn how to fix this layout shift and improve the CLS score, check out the links below.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt: "Screenshot of video element with no size dimension",
          imgPath: heroVideoLayoutShift1,
        },
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
