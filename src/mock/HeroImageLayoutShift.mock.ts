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
        showImage: true,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: layoutShift1,
        text: "In this example, we have an img element inside a typical flex container. This img element does not have any width and height attribute. It also does not have any width and height styling.",
      },
      {
        uniqueID: "1",
        showImage: false,
        controlImgHeight: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "Because the img element does not have any size dimension, this page experiences a visible layout shift when the image finishes loading.",
      },
      {
        uniqueID: "2",
        showImage: false,
        controlImgHeight: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "As a result, the browser initially renders it with zero dimensions and later recalculates its size once the image loads—pushing content below it and causing a visible layout shift.",
      },
      {
        uniqueID: "3",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Lighthouse poor CLS score",
        imgPath: layoutShift2,
        text: "When running a Lighthouse report (Desktop), the results show that this page has a poor Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "4",
        showImage: false,
        controlImgHeight: false,
        imgAlt: undefined,
        imgPath: undefined,
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
