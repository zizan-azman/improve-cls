import type { HeroImageConfig } from "@/components/hero/hero-image/HeroImage.model";
import heroTeaser720p from "@/assets/images/bee-720p.jpg";
import heroImageAspectRatio1 from "@/assets/images/hero-image-element/image-aspect-ratio/hero-image-aspect-ratio.png";
import heroImageAspectRatio2 from "@/assets/images/hero-image-element/image-aspect-ratio/hero-image-details.png";
import heroImageAspectRatio3 from "@/assets/images/hero-image-element/image-aspect-ratio/hero-image-distorted.png";
import heroImageAspectRatio4 from "@/assets/images/hero-image-element/image-aspect-ratio/hero-image-cls-score.png";

export const HERO_IMAGE_ASPECT_RATIO_MOCK: HeroImageConfig = {
  type: "aspect-ratio",
  heading: "Fix layout shift using CSS aspect-ratio",
  teaser: {
    imgAlt: "Bee on a white flower",
    imgWidth: "1280",
    imgHeight: "720",
    imgPath: heroTeaser720p,
    paragraphs: [
      {
        uniqueID: "1",
        text: "This example demonstrates how using CSS aspect-ratio on an img element inside a flex container can prevent layout shifts without relying on width and height attributes.",
      },
      {
        uniqueID: "2",
        text: "Scroll down to learn how this approach can improve the Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "3",
        text: "To view other layout shift examples, check out the links below.",
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
        path: "/img/layout-shift",
        text: "Layout shift example",
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
          "Screenshot of img element using CSS aspect-ratio inside a flex container",
        imgPath: heroImageAspectRatio1,
        text: "To reduce layout shifts, the img element is styled with width: 400px, height: 100%, aspect-ratio: 16/9 and flex-shrink: 0—where 400px can be replaced with any custom width. Setting flex-shrink: 0 prevents the image from shrinking its width as a side effect of being inside a flex container (row direction). The aspect-ratio property allows the browser to calculate the image's height in advance, ensuring the correct space is reserved before the image loads.",
      },
      {
        uniqueID: "1",
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of image original dimensions with the correct aspect-ratio",
        imgPath: heroImageAspectRatio2,
        text: "It's important to note that the aspect-ratio property must match your image's original aspect ratio. In this example, the image's original dimensions are width 1280px and height 720px. Therefore, aspect-ratio: 16/9 is the correct ratio to be used.",
      },
      {
        uniqueID: "2",
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of img element styled with aspect-ratio and flex-shrink set to zero",
        imgPath: heroImageAspectRatio3,
        text: "If the image's original aspect ratio is unknown, or if you intentionally use an aspect-ratio that is different from your image's ratio, you can apply object-fit: cover. This ensures the image fills the reserved space defined by the chosen aspect-ratio. Without object-fit, the image may appear stretched or squashed due to incorrect scaling.",
      },
      {
        uniqueID: "3",
        showImage: false,
        controlImgHeight: true,
        imgAlt: "Screenshot of img element with no size dimension",
        imgPath: undefined,
        text: "Keep in mind that object-fit: cover will crop parts of your image to fit the aspect-ratio you used, which may result in some content being clipped.",
      },
      {
        uniqueID: "4",
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot comparing aspect-ratio values with mismatched image proportions",
        imgPath: heroImageAspectRatio4,
        text: "After applying the aspect-ratio stylings, we now see a huge improvement in the CLS score.",
      },
      {
        uniqueID: "5",
        showImage: false,
        controlImgHeight: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "To view other layout shift examples, check out the links below.",
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
        path: "/img/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
