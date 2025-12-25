import heroAsyncLoading1 from "@/assets/images/hero-async/loading-placeholder/hero-async-loading-placeholder.png";
import heroAsyncLoading2 from "@/assets/images/hero-async/loading-placeholder/hero-async-loading-css.png";
import heroAsyncLoading3 from "@/assets/images/hero-async/loading-placeholder/hero-async-loading-cls-score.png";
import heroAsyncLoading4 from "@/assets/images/hero-async/loading-placeholder/hero-async-loading-mismatch.png";
import type { HeroAsyncConfig } from "@/components/hero/hero-async/HeroAsync.model";
import { NEWS_ITEMS_MOCK } from "./NewsItems.mock";

export const HERO_ASYNC_LOADING_PLACEHOLDER_MOCK: HeroAsyncConfig = {
  heading: "Fix layout shift using a loading placeholder",
  teaser: {
    newsConfig: {
      type: "loading-placeholder",
      delay: 2000,
      emptyData: "Sorry, there are no available data to display >__<",
      placeholder: {
        placeholderText: "Please wait while data is loading (^o^)b",
        showPlaceholder: true,
      },
      news: NEWS_ITEMS_MOCK,
    },
    paragraphs: [
      {
        uniqueID: "1",
        text: "This example demonstrates how using a loading placeholder with css width and height can help to reduce layout shifts.",
      },
      {
        uniqueID: "2",
        text: "Scroll down to learn why this happens and how it improves the Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "3",
        text: "To view other examples, check out the links below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/async/temporary-skeleton",
        text: "Temporary skeleton solution",
      },
      {
        uniqueID: "2",
        path: "/async/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        text: "To reduce the layout shift caused by asynchronously loaded data, a loading placeholder is used. This placeholder reserves space on the page before content is rendered.",
        imgConfig: {
          showImage: true,
          controlImgHeight: true,
          imgAlt: "Screenshot of a loading placeholder",
          imgPath: heroAsyncLoading1,
        },
      },
      {
        uniqueID: "1",
        text: "In this example, a loading placeholder is displayed while the News data is being fetched. The placeholder is styled with a fixed size using CSS width: 100% and height: 600px, ensuring that sufficient space is reserved during loading.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt: "Screenshot of loading placeholder CSS width and height",
          imgPath: heroAsyncLoading2,
        },
      },
      {
        uniqueID: "2",
        text: "The width and height values can be adjusted based on your needs. In this case, a height of 600px was chosen because the final content height is predictable. Reserving 600px of space using a loading placeholder ensures that when the content loads and the placeholder is removed, the layout remains stable and no layout shifts occur.",
      },
      {
        uniqueID: "3",
        text: "After applying this solution, running a Lighthouse report shows a significantly improved CLS score.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt:
            "Screenshot of improved CLS score after applying CSS width and height on loading placeholder",
          imgPath: heroAsyncLoading3,
        },
      },
      {
        uniqueID: "2",
        text: "In cases where the width or height of the incoming content is unpredictable—for example, when the News component may render only one item at times and many items at others—you may need to experiment with the loading placeholder's dimensions to find values that consistently produce the best CLS score, regardless of content variation.",
      },
      {
        uniqueID: "3",
        text: "For example, if a loading placeholder reserves 600px of height but the News component only renders a single item with a much smaller height, a layout shift will occur when the placeholder is removed.",
        imgConfig: {
          showImage: true,
          controlImgHeight: true,
          imgAlt:
            "Screenshot of loading placeholder reserving too much space for incoming News Component content",
          imgPath: heroAsyncLoading4,
        },
      },
      {
        uniqueID: "4",
        text: "To achieve a good CLS score, it's important to experiment with placeholder dimensions to find values that work best across different content scenarios.",
      },

      {
        uniqueID: "4",
        text: "To view other examples, check out the links below.",
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
        path: "/async/temporary-skeleton",
        text: "Temporary skeleton solution",
      },
      {
        uniqueID: "2",
        path: "/async/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
