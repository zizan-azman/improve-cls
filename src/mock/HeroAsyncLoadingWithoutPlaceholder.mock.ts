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
        textParts: [
          "To reduce layout shifts caused by ",
          {
            text: "asynchronously loaded content",
            type: "bold",
          },
          ", a ",
          {
            text: "temporary skeleton",
            type: "bold",
          },
          " can be applied to the ",
          {
            text: "parent container",
            type: "bold",
          },
          " using the CSS ",
          {
            text: ":not()",
            type: "code",
          },
          " and ",
          {
            text: ":has()",
            type: "code",
          },
          {
            text: " selectors",
            type: "bold",
          },
          ".",
        ],
        text: "To reduce layout shift caused by incoming content from asynchronous data, a temporary skeleton can be created on the parent container using the CSS :not() and :has() selectors.",
      },
      {
        uniqueID: "1",
        textParts: [
          "During the ",
          {
            text: "data-loading state",
            type: "bold",
          },
          ", the ",
          {
            text: "parent container",
            type: "bold",
          },
          " can be ",
          {
            text: "conditionally styled to reserve space",
            type: "bold",
          },
          ". By using the ",
          {
            text: ":not(:has(.incoming-content))",
            type: "code",
          },
          {
            text: " selector",
            type: "bold",
          },
          ", the container is targeted only when ",
          {
            text: "incoming content has not yet been rendered",
            type: "bold",
          },
          ".",
        ],
        text: "During the data-loading state, the parent container can be conditionally styled to reserve space. Using the :not(:has(.incoming-content)) selector, the parent container is targeted only when there is no incoming content.",
      },
      {
        uniqueID: "2",
        textParts: [
          "In this example, the ",
          {
            text: "parent container",
            type: "bold",
          },
          " is assigned a fixed ",
          {
            text: "height of 600px",
            type: "bold",
          },
          " and a ",
          {
            text: "grey background",
            type: "bold",
          },
          " to visually represent a loading ",
          {
            text: "skeleton",
            type: "bold",
          },
          ". Once the data finishes loading and the news items are rendered, the ",
          {
            text: "selector no longer applies",
            type: "bold",
          },
          ". The ",
          {
            text: "temporary skeleton styles are automatically removed",
            type: "bold",
          },
          ", allowing the ",
          {
            text: "parent container",
            type: "bold",
          },
          " to ",
          {
            text: "resize naturally based on the loaded content",
            type: "bold",
          },
          ".",
        ],
        text: "In this example, the parent container is given a height of 600px and a grey background to visually represent the skeleton. Once the data has finished loading and the news items are rendered, the selector no longer matches. As a result, the temporary skeleton styling is automatically removed, and the parent container naturally takes on the dimensions of the loaded content.",
        imgConfig: {
          controlHeight: true,
          imgAlt: "Screenshot of skeleton CSS",
          imgPath: heroAsyncSkeleton1,
          imgWidth: "959",
          imgHeight: "384",
        },
      },
      {
        uniqueID: "3",
        textParts: [
          "The ",
          {
            text: "width",
            type: "bold",
          },
          " and ",
          {
            text: "height",
            type: "bold",
          },
          " of the ",
          {
            text: "parent container",
            type: "bold",
          },
          " can be adjusted based on your needs. Here, a ",
          {
            text: "600px height",
            type: "bold",
          },
          " value is used to reserve space because the incoming content has a ",
          {
            text: "predictable height",
            type: "bold",
          },
          ". The reserved space was enough to remove any ",
          {
            text: "layout shifts",
            type: "bold",
          },
          ".",
        ],
        text: "The width and height of the parent container can be adjusted based on your needs. Here, 600px height value is used to reserve space because the incoming content has a predictable height. The reserved space was enough remove any layout shifts.",
      },
      {
        uniqueID: "4",
        textParts: [
          "After applying this solution, running a ",
          {
            text: "Lighthouse",
            type: "bold",
          },
          " report shows a significantly ",
          {
            text: "improved CLS score",
            type: "bold",
          },
          ".",
        ],
        text: "After applying this solution, running a Lighthouse report shows a significantly improved CLS score.",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of improved CLS score after applying temporary skeleton",
          imgPath: heroAsyncSkeleton2,
          imgWidth: "2262",
          imgHeight: "920",
        },
      },
      {
        uniqueID: "5",
        textParts: [
          "When the ",
          {
            text: "width or height of incoming content is unpredictable",
            type: "bold",
          },
          "—for example, when the News component sometimes renders a single item and other times many—you may need to ",
          {
            text: "experiment",
            type: "bold",
          },
          " with the ",
          {
            text: "skeleton’s dimensions",
            type: "bold",
          },
          " to consistently achieve the ",
          {
            text: "best CLS score",
            type: "bold",
          },
          ", regardless of content variation.",
        ],
        text: "In cases where the width or height of the incoming content is unpredictable—for example, when the News component may render only one item at times and many items at others—you may need to experiment with the skeleton's dimensions to find values that consistently produce the best CLS score, regardless of content variation.",
      },
      {
        uniqueID: "6",
        textParts: [
          "To view other examples, ",
          { text: "check out ", type: "bold" },
          "the links below.",
        ],
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
};
