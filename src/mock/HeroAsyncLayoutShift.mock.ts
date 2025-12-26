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
        text: "In this example, we have a News Component that loads its data asynchronously. The data gets loaded after a 2-second delay.",
      },
      {
        uniqueID: "1",
        text: "While the data is being fetched, no space is reserved for the incoming News content. As a result, the content below the News component is initially rendered at the top of the page.",
        imgConfig: {
          showImage: true,
          controlImgHeight: true,
          imgAlt: "Screenshot of News Component with no reserved space",
          imgPath: heroAsyncLayoutShift1,
        },
      },
      {
        uniqueID: "2",
        text: "Once the data finally loads, the News component appears and pushes the content beneath it downward, causing a noticeable layout shift.",
        videoConfig: {
          controlVideoHeight: true,
          showVideo: true,
          videoPath: heroAsyncLayoutShift2,
        },
      },
      {
        uniqueID: "3",
        text: "When we run the Lighthouse report on this page, we get a poor CLS score. This not only gives a poor user experience, but also negatively impacts SEO.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt:
            "Screenshot of poor CLS score caused by News component with layout shift",
          imgPath: heroAsyncLayoutShift3,
        },
      },
      {
        uniqueID: "4",
        text: "To fix this layout shift and improve CLS score, check out the links below.",
        imgConfig: {
          showImage: false,
          controlImgHeight: false,
          imgAlt: undefined,
          imgPath: undefined,
        },
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
