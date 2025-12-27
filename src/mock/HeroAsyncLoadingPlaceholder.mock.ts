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
        textParts: [
          "To reduce the layout shift caused by ",
          {
            text: "asynchronously loaded data",
            type: "bold",
          },
          ", a ",
          {
            text: "loading placeholder",
            type: "bold",
          },
          " is used. This placeholder ",
          {
            text: "reserves space",
            type: "bold",
          },
          " on the page before content is rendered.",
        ],
        text: "To reduce the layout shift caused by asynchronously loaded data, a loading placeholder is used. This placeholder reserves space on the page before content is rendered.",
        imgConfig: {
          controlHeight: true,
          imgAlt: "Screenshot of a loading placeholder",
          imgPath: heroAsyncLoading1,
          imgWidth: "1906",
          imgHeight: "1450",
        },
      },
      {
        uniqueID: "1",
        textParts: [
          "In this example, a ",
          {
            text: "loading placeholder",
            type: "bold",
          },
          " appears while the News data is being fetched. The placeholder is styled with fixed dimensions using CSS ",
          {
            text: "width: 100%",
            type: "code",
          },
          " and ",
          {
            text: "height: 600px",
            type: "code",
          },
          ", ensuring ",
          {
            text: "sufficient space is reserved",
            type: "bold",
          },
          " for the content during loading.",
        ],
        text: "In this example, a loading placeholder is displayed while the News data is being fetched. The placeholder is styled with a fixed size using CSS width: 100% and height: 600px, ensuring that sufficient space is reserved during loading.",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of loading placeholder CSS width and height",
          imgPath: heroAsyncLoading2,
          imgWidth: "361",
          imgHeight: "109",
        },
      },
      {
        uniqueID: "2",
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
          " values can be adjusted based on your needs. In this case, a ",
          {
            text: "height of 600px",
            type: "bold",
          },
          " was chosen because the ",
          {
            text: "final content height is predictable",
            type: "bold",
          },
          ". Reserving 600px of space using a loading placeholder ensures that when the content loads and the placeholder is removed, the layout remains ",
          {
            text: "stable",
            type: "bold",
          },
          " and ",
          {
            text: "no layout shifts occur",
            type: "bold",
          },
          ".",
        ],
        text: "The width and height values can be adjusted based on your needs. In this case, a height of 600px was chosen because the final content height is predictable. Reserving 600px of space using a loading placeholder ensures that when the content loads and the placeholder is removed, the layout remains stable and no layout shifts occur.",
      },
      {
        uniqueID: "3",
        textParts: [
          "After applying this solution, running a ",
          { text: "Lighthouse ", type: "bold-italic" },
          "report shows a significantly ",
          { text: "improved CLS score.", type: "bold" },
        ],
        text: "After applying this solution, running a Lighthouse report shows a significantly improved CLS score.",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of improved CLS score after applying CSS width and height on loading placeholder",
          imgPath: heroAsyncLoading3,
          imgWidth: "2262",
          imgHeight: "920",
        },
      },
      {
        uniqueID: "4",
        textParts: [
          "In cases where the ",
          {
            text: "width",
            type: "bold",
          },
          " or ",
          {
            text: "height",
            type: "bold",
          },
          " of ",
          {
            text: "incoming content is unpredictable",
            type: "bold",
          },
          "—such as when the News component may render only one item at times and many items at others—you may need to ",
          {
            text: "experiment",
            type: "bold",
          },
          " with ",
          {
            text: "loading placeholder dimensions",
            type: "bold",
          },
          " to find values that consistently produce the ",
          {
            text: "best CLS score",
            type: "bold",
          },
          " across different content variations.",
        ],
        text: "In cases where the width or height of the incoming content is unpredictable—for example, when the News component may render only one item at times and many items at others—you may need to experiment with the loading placeholder's dimensions to find values that consistently produce the best CLS score, regardless of content variation.",
      },
      {
        uniqueID: "5",
        textParts: [
          "For example, if a loading placeholder reserves 600px of height but the News component only renders a single item with a much ",
          {
            text: "smaller height",
            type: "bold",
          },
          ", a ",
          {
            text: "layout shift",
            type: "bold",
          },
          " will occur when the placeholder is removed.",
        ],
        text: "For example, if a loading placeholder reserves 600px of height but the News component only renders a single item with a much smaller height, a layout shift will occur when the placeholder is removed.",
        imgConfig: {
          controlHeight: true,
          imgAlt:
            "Screenshot of loading placeholder reserving too much space for incoming News Component content",
          imgPath: heroAsyncLoading4,
          imgWidth: "965",
          imgHeight: "541",
        },
      },
      {
        uniqueID: "6",
        textParts: [
          "To achieve a ",
          { text: "good ", type: "bold" },
          { text: "CLS score", type: "bold" },
          ", it's important to ",
          { text: "experiment ", type: "bold" },
          "with ",
          { text: "placeholder dimensions ", type: "bold" },
          "to find values that work ",
          { text: "best ", type: "bold" },
          "across ",
          { text: "different content scenarios", type: "bold" },
          ".",
        ],
        text: "To achieve a good CLS score, it's important to experiment with placeholder dimensions to find values that work best across different content scenarios.",
      },

      {
        uniqueID: "7",
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
