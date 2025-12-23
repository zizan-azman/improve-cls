import type { HeroImageConfig } from "@/components/hero/hero-image/HeroImage.model";

export const HERO_IMAGE_DIMENSION_MOCK: HeroImageConfig = {
  type: "media-dimension",
  heading: "Fix layout shift using img element width and height",
  teaser: {
    imgWidth: "480",
    imgHeight: "334",
    imgAlt: "Bee on a white flower",
    paragraphs: [
      {
        uniqueID: "1",
        text: "This example demonstrates how defining width and height on an img element can help to reduce layout shifts.",
      },
      {
        uniqueID: "2",
        text: "Scroll down to learn why this happens and how it can improve the Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "3",
        text: "To view the layout shift example or learn a different way to fix this issue, check out the links below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/img/layout-shift",
        text: "View the original layout shift example",
      },
      {
        uniqueID: "2",
        path: "/img/aspect-ratio",
        text: "Fix layout shift with aspect-ratio",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "To reduce layout shifts, the img element is given explicit width and height attributes that match the image's original dimensions. These attributes allow the browser to calculate the image's aspect ratio and reserve space before the image loads, which helps maintain a stable layout.",
      },
      {
        uniqueID: "1",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "Additionally, the image is styled with width: 400px, height: 100%, and flex-shrink: 0—where 400px can be replaced with any custom width you need. The CSS flex-shrink 0 is needed to prevent the img from shrinking in width as a side effect of being inside a flex parent (row direction). By combining the width and height attributes with these CSS styles, the image scales correctly within its parent flex container, eliminating layout shifts.",
      },
      {
        uniqueID: "3",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "This approach is a recommended best practice for preventing layout shifts caused by img or video element inside of a flex container.",
      },
      {
        uniqueID: "4",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "After defining dimensions on the img or video element in the previous points, now running a Lighthouse report shows a significantly improved CLS score.",
      },
      {
        uniqueID: "2",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "Note that for img or video element inside of a flex container, you'll need to use the original width and height dimensions in order to achieve 0 layout shifts. If you use a dummy value for the width and height attributes, there will some layout shifts. To achive 0 layout shifts using a dummy width and height attribute, it is recommended to change the flex parent container to a grid container. This is because, display grid can reserve space much more simpler such as using 'fr' units.",
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
        path: "/img/layout-shift",
        text: "View the original layout shift example",
      },
      {
        uniqueID: "2",
        path: "/img/aspect-ratio",
        text: "Fix layout shift with aspect-ratio",
      },
    ],
  },
};
