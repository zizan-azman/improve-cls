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
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of img element using CSS aspect-ratio inside a flex container",
          imgPath: heroImageAspectRatio1,
          imgWidth: "233",
          imgHeight: "156",
        },
        textParts: [
          "To reduce layout shifts, the ",
          {
            text: "img",
            type: "bold-italic",
          },
          " element is styled with ",
          {
            text: "width: 400px",
            type: "code",
          },
          ", ",
          {
            text: "height: 100%",
            type: "code",
          },
          ", ",
          {
            text: "aspect-ratio: 16/9",
            type: "code",
          },
          ", and ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          "—where ",
          {
            text: "400px",
            type: "bold",
          },
          " can be replaced with any ",
          {
            text: "custom width",
            type: "bold",
          },
          ". The ",
          {
            text: "aspect-ratio",
            type: "bold-italic",
          },
          " property allows the browser to calculate the image's height ahead of time, while ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          " prevents the image from shrinking inside a flex container. Together, these styles ensure the correct space is reserved before the image loads.",
        ],
        text: "To reduce layout shifts, the img element is styled with width: 400px, height: 100%, aspect-ratio: 16/9, and flex-shrink: 0—where 400px can be replaced with any custom width. The aspect-ratio property allows the browser to calculate the image's height ahead of time, while flex-shrink: 0 prevents the image from shrinking inside a flex container. Together, these styles ensure the correct space is reserved before the image loads.",
      },
      {
        uniqueID: "1",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of image original dimensions with the correct aspect-ratio",
          imgPath: heroImageAspectRatio2,
          imgWidth: "581",
          imgHeight: "702",
        },
        textParts: [
          "It's ",
          {
            text: "important",
            type: "bold",
          },
          " to ensure that the ",
          {
            text: "aspect-ratio",
            type: "bold-italic",
          },
          " property matches the ",
          {
            text: "image's original dimensions",
            type: "bold",
          },
          ". In this example, the image has original dimensions of ",
          {
            text: "width 1280px",
            type: "bold-italic",
          },
          " and ",
          {
            text: "height 720px",
            type: "bold-italic",
          },
          ", which means the CSS ",
          {
            text: "aspect-ratio: 16/9",
            type: "code",
          },
          " should be used.",
        ],

        text: "It's important to ensure that the aspect-ratio property matches the image's original dimensions. In this example, the image has original dimensions of width 1280px and height 720px, which means the CSS aspect-ratio: 16/9 should be used.",
      },
      {
        uniqueID: "2",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of img element styled with aspect-ratio and flex-shrink set to zero",
          imgPath: heroImageAspectRatio3,
          imgWidth: "574",
          imgHeight: "257",
        },
        textParts: [
          "If the image's ",
          {
            text: "original aspect ratio",
            type: "bold",
          },
          " is unknown, or if you intentionally use an aspect ratio that differs from the image’s actual dimensions, applying ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          " ensures the image fills the reserved space correctly. Without it, the image may appear ",
          {
            text: "stretched",
            type: "bold",
          },
          " or ",
          {
            text: "squashed",
            type: "bold",
          },
          " due to ",
          {
            text: "incorrect scaling.",
            type: "bold",
          },
        ],
        text: "If the image's original aspect ratio is unknown, or if you intentionally use an aspect ratio that differs from the image’s actual dimensions, applying object-fit: cover ensures the image fills the reserved space correctly. Without it, the image may appear stretched or squashed due to incorrect scaling.",
      },
      {
        uniqueID: "3",
        textParts: [
          "Keep in mind that using ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          " may crop parts of the image in order to fit the chosen aspect ratio, which can result in some content being ",
          {
            text: "clipped.",
            type: "bold",
          },
        ],
        text: "Keep in mind that object-fit: cover will crop parts of your image to fit the aspect-ratio you used, which may result in some content being clipped.",
      },
      {
        uniqueID: "4",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot comparing aspect-ratio values with mismatched image proportions",
          imgPath: heroImageAspectRatio4,
          imgWidth: "2262",
          imgHeight: "920",
        },
        textParts: [
          "After applying the ",
          {
            text: "aspect-ratio",
            type: "bold-italic",
          },
          " styles, we can see a significant ",
          {
            text: "improvement in the CLS score.",
            type: "bold",
          },
        ],
        text: "After applying the aspect-ratio stylings, we now see a huge improvement in the CLS score.",
      },
      {
        uniqueID: "5",
        textParts: [
          "To view other layout shift examples, ",
          { text: "check out ", type: "bold" },
          "the links below.",
        ],
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
