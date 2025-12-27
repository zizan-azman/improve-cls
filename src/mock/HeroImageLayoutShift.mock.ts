import heroTeaser from "@/assets/images/bee.jpg";
import layoutShift1 from "@/assets/images/hero-image-element/layout-shift/hero-image-media-no-dimension.png";
import layoutShift2 from "@/assets/images/hero-image-element/layout-shift/hero-image-poor-cls-score.png";
import type { HeroImageConfig } from "@/components/hero/hero-image/HeroImage.model";

export const HERO_IMAGE_LAYOUT_SHIFT_MOCK: HeroImageConfig = {
  type: "layout-shift",
  heading: "Layout shift caused by img element inside a flex container",
  teaser: {
    imgWidth: undefined,
    imgHeight: undefined,
    imgPath: heroTeaser,
    imgAlt: "Bee on a white flower",
    paragraphs: [
      {
        uniqueID: "1",
        text: "The image shown here triggers a significant layout shift when it finishes loading.",
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
        path: "/img/width-height",
        text: "Width and Height solution",
      },
      {
        uniqueID: "2",
        path: "/img/aspect-ratio",
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
          imgAlt: "Screenshot of img element with no size dimension",
          imgPath: layoutShift1,
          imgWidth: "1397",
          imgHeight: "236",
        },
        textParts: [
          "In this example, we have an ",
          {
            text: "img element ",
            type: "bold-italic",
          },
          "inside a typical flex container. This img element ",
          {
            text: "does not have any width and height attribute. ",
            type: "bold",
          },
          "It also ",
          { text: "does not have any CSS width and height.", type: "bold" },
        ],
        text: "In this example, we have an img element inside a typical flex container. This img element does not have any width and height attribute. It also does not have any CSS width and height.",
      },
      {
        uniqueID: "1",
        textParts: [
          "Because the img element does not have any size dimension, this page experiences a ",
          {
            text: "visible layout shift ",
            type: "bold",
          },
          "when the image finishes loading.",
        ],
        text: "Because the img element does not have any size dimension, this page experiences a visible layout shift when the image finishes loading.",
      },
      {
        uniqueID: "2",
        textParts: [
          "As a result, the ",
          {
            text: "browser initially renders it with zero dimensions ",
            type: "bold",
          },
          "and later recalculates its size once the image loads—",
          { text: "pushing content below it ", type: "bold" },
          "and causing a visible layout shift.",
        ],
        text: "As a result, the browser initially renders it with zero dimensions and later recalculates its size once the image loads—pushing content below it and causing a visible layout shift.",
      },
      {
        uniqueID: "3",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Lighthouse poor CLS score",
          imgPath: layoutShift2,
          imgWidth: "210",
          imgHeight: "89",
        },
        textParts: [
          "When running a ",
          {
            text: "Lighthouse ",
            type: "bold-italic",
          },
          "report, the results show that this page has a ",
          { text: "poor Cumulative Layout Shift (CLS) score.", type: "bold" },
        ],
        text: "When running a Lighthouse report, the results show that this page has a poor Cumulative Layout Shift (CLS) score.",
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
        path: "/img/width-height",
        text: "Width and Height solution",
      },
      {
        uniqueID: "2",
        path: "/img/aspect-ratio",
        text: "Aspect ratio solution",
      },
    ],
  },
};
