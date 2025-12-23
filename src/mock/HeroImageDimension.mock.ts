import type { HeroImageConfig } from "@/components/hero/hero-image/HeroImage.model";
import heroTeaser from "@/assets/images/bee.jpg";
import heroImageFix1 from "@/assets/images/hero-image-element/image-dimension/hero-image-attributes.png";
import heroImageFix2 from "@/assets/images/hero-image-element/image-dimension/hero-image-style.png";
import heroImageFix3 from "@/assets/images/hero-image-element/image-dimension/hero-image-dummy.png";
import heroImageFix4 from "@/assets/images/hero-image-element/image-dimension/hero-image-cls-score.png";

export const HERO_IMAGE_DIMENSION_MOCK: HeroImageConfig = {
  type: "media-dimension",
  heading: "Fix layout shift using img element width and height",
  teaser: {
    imgWidth: "480",
    imgHeight: "334",
    imgAlt: "Bee on a white flower",
    imgPath: heroTeaser,
    paragraphs: [
      {
        uniqueID: "1",
        text: "This example demonstrates how defining width and height on an img element (inside a flex container) can help to reduce layout shifts.",
      },
      {
        uniqueID: "2",
        text: "Scroll down to learn why this happens and how it can improve the Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "3",
        text: "To view other layout shift examples, check out the links below.",
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
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of img element using its original width and height as the attribute value",
        imgPath: heroImageFix1,
        text: "To reduce layout shifts, the img element is given explicit width and height attributes that match the image’s original dimensions. This allows the browser to calculate the correct aspect ratio and reserve the required space before the image loads, helping to maintain a stable layout.",
      },
      {
        uniqueID: "1",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Screenshot of img element with width and height stylings",
        imgPath: heroImageFix2,
        text: "In addition, the image is styled with width: 400px, height: 100%, and flex-shrink: 0—where 400px can be replaced with any custom width. Setting flex-shrink: 0 prevents the image from shrinking its width as a side effect of being inside a flex container (row direction). When combined with the width and height attributes, these styles ensure the image scales correctly within its parent container and avoids layout shifts.",
      },
      {
        uniqueID: "2",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "This approach is a recommended best practice for preventing layout shifts caused by img or video element inside of a flex container.",
      },
      {
        uniqueID: "3",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: heroImageFix4,
        text: "After defining explicit dimensions on the img, we now see a huge improvement in the CLS score.",
      },
      {
        uniqueID: "4",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: heroImageFix3,
        text: "Note that for img or video element inside of a flex container, you'll need to use the original width and height dimensions in order to achieve 0 layout shifts. If you use a dummy value for the width and height attributes, there will be some layout shifts. To achive 0 layout shifts using a dummy width and height attribute, it is recommended to change the flex parent container to a grid container. This is because grid layouts can reserve space more predictably using units such as fr.",
      },
      {
        uniqueID: "5",
        showImage: false,
        controlImgHeight: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "To view other examples, check out the links below.",
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
