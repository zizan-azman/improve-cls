import heroAsyncSkeleton1 from "@/assets/images/hero-async/without-placeholder/hero-async-skeleton.png";
import heroAsyncSkeleton2 from "@/assets/images/hero-async/without-placeholder/hero-async-skeleton-cls-score.png";

import type { HeroAsyncConfig } from "@/components/hero/hero-async/HeroAsync.model";
import { NEWS_ITEMS_MOCK } from "./NewsItems.mock";

export const HERO_ASYNC_NO_LOADING_PLACEHOLDER_MOCK: HeroAsyncConfig = {
  heading: "Fix layout shift using a temporary skeleton",
  teaser: {
    newsConfig: {
      type: "container-dimension",
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
        path: "/async/loading-placeholder",
        text: "Loading placeholder",
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
        text: "To reduce layout shift caused by incoming content from asynchronous data, a temporary skeleton can be created on the parent container using the CSS :not() and :has() selectors.",
      },
      {
        uniqueID: "1",
        text: "During the data-loading state, the parent container can be conditionally styled to reserve space. Using the :not(:has(.incoming-content)) selector, the parent container is targeted only when there is no incoming content.",
      },
      {
        uniqueID: "2",
        text: "In this example, the parent container is given a height of 600px and a grey background to visually represent the skeleton. Once the data has finished loading and the news items are rendered, the selector no longer matches. As a result, the temporary skeleton styling is automatically removed, and the parent container naturally takes on the dimensions of the loaded content.",
        imgConfig: {
          showImage: true,
          controlImgHeight: true,
          imgAlt: "Screenshot of skeleton CSS",
          imgPath: heroAsyncSkeleton1,
        },
      },
      {
        uniqueID: "3",
        text: "The width and height of the parent container can be adjusted based on your needs. Here, 600px height value is used to reserve space because the incoming content has a predictable height. The reserved space was enough remove any layout shifts.",
      },
      {
        uniqueID: "4",
        text: "After applying this solution, running a Lighthouse report shows a significantly improved CLS score.",
        imgConfig: {
          showImage: true,
          controlImgHeight: false,
          imgAlt:
            "Screenshot of improved CLS score after applying temporary skeleton",
          imgPath: heroAsyncSkeleton2,
        },
      },
      {
        uniqueID: "5",
        text: "In cases where the width or height of the incoming content is unpredictable—for example, when the News component may render only one item at times and many items at others—you may need to experiment with the skeleton's dimensions to find values that consistently produce the best CLS score, regardless of content variation.",
      },
      {
        uniqueID: "6",
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
        path: "/async/loading-placeholder",
        text: "Loading placeholder",
      },
      {
        uniqueID: "2",
        path: "/async/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
