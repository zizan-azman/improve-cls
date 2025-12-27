import heroAsyncLayoutShift1 from "@/assets/images/hero-async/layout-shift/hero-async-render.png";
import heroAsyncLayoutShift2 from "@/assets/images/hero-async/layout-shift/layout-shift-sample.mp4";
import heroAsyncLayoutShift3 from "@/assets/images/hero-async/layout-shift/hero-async-layout-shift-cls.png";
import type { HeroAsyncConfig } from "@/components/hero/hero-async/HeroAsync.model";
import { NEWS_ITEMS_MOCK } from "./NewsItems.mock";

export const HERO_ASYNC_LAYOUT_SHIFT_MOCK: HeroAsyncConfig = {
  heading: "Layout Shift Caused by Asynchronously Loaded Data",
  teaser: {
    newsConfig: {
      type: "layout-shift",
      delay: 2000,
      emptyData: "Sorry, there are no available data to display >__<",
      placeholder: {
        placeholderText: "Please wait while data is loading (^o^)b",
        showPlaceholder: false,
      },
      news: NEWS_ITEMS_MOCK,
    },
    paragraphs: [
      {
        uniqueID: "1",
        text: "This News component triggers a significant layout shift when it finishes loading.",
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
        path: "/async/loading-placeholder",
        text: "Loading placeholder solution",
      },
      {
        uniqueID: "2",
        path: "/async/temporary-skeleton",
        text: "Temporary skeleton solution",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        textParts: [
          "In this example, we have a News Component that loads its data ",
          { text: "asynchronously", type: "bold-italic" },
          ". The data gets loaded after a ",
          { text: "2-second delay", type: "bold" },
          ".",
        ],
        text: "In this example, we have a News Component that loads its data asynchronously. The data gets loaded after a 2-second delay.",
      },
      {
        uniqueID: "1",
        textParts: [
          "While the data is being fetched, ",
          {
            text: "no space is reserved",
            type: "bold",
          },
          " for the ",
          {
            text: "incoming content",
            type: "bold",
          },
          ". As a result, content below the News component initially ",
          {
            text: "renders at the top",
            type: "bold",
          },
          " of the page.",
        ],
        text: "While the data is being fetched, no space is reserved for the incoming News content. As a result, the content below the News component is initially rendered at the top of the page.",
        imgConfig: {
          controlHeight: true,
          imgAlt: "Screenshot of News Component with no reserved space",
          imgPath: heroAsyncLayoutShift1,
          imgWidth: "1011",
          imgHeight: "328",
        },
      },
      {
        uniqueID: "2",
        textParts: [
          "Once the data loads, the News component appears and ",
          {
            text: "pushes the content below it downward",
            type: "bold",
          },
          ", resulting in a noticeable ",
          {
            text: "layout shift",
            type: "bold",
          },
          ".",
        ],
        text: "Once the data finally loads, the News component appears and pushes the content beneath it downward, causing a noticeable layout shift.",
        videoConfig: {
          controlHeight: true,
          videoPath: heroAsyncLayoutShift2,
          videoWidth: "1920",
          videoHeight: "1076",
        },
      },
      {
        uniqueID: "3",
        textParts: [
          "When we run the ",
          {
            text: "Lighthouse",
            type: "bold-italic",
          },
          " report on this page, we get a ",
          {
            text: "poor",
            type: "bold",
          },
          " ",
          {
            text: "CLS score",
            type: "bold-italic",
          },
          ". This not only gives a ",
          {
            text: "poor user experience",
            type: "bold",
          },
          ", but also ",
          {
            text: "negatively impacts ",
            type: "bold",
          },
          {
            text: "SEO",
            type: "bold-italic",
          },
          ".",
        ],
        text: "When we run the Lighthouse report on this page, we get a poor CLS score. This not only gives a poor user experience, but also negatively impacts SEO.",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of poor CLS score caused by News component with layout shift",
          imgPath: heroAsyncLayoutShift3,
          imgWidth: "213",
          imgHeight: "78",
        },
      },
      {
        uniqueID: "4",
        textParts: [
          "To fix this layout shift and improve CLS score, ",
          { text: "check out ", type: "bold" },
          "the links below.",
        ],
        text: "To fix this layout shift and improve CLS score, check out the links below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/async/loading-placeholder",
        text: "Loading placeholder solution",
      },
      {
        uniqueID: "2",
        path: "/async/temporary-skeleton",
        text: "Temporary skeleton solution",
      },
    ],
  },
};
