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
        path: "/img/aspect-ratio",
        text: "Aspect ratio solution",
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
          imgAlt: "",
          imgPath: heroImageFix1,
          imgWidth: "",
          imgHeight: "",
        },
        textParts: [
          "To reduce layout shifts, the ",
          {
            text: "img element",
            type: "bold",
          },
          " is given ",
          {
            text: "explicit width and height attributes",
            type: "bold",
          },
          " that match the ",
          {
            text: "image's original dimensions",
            type: "bold",
          },
          ". This ",
          {
            text: "allows the browser to calculate the correct aspect ratio",
            type: "bold",
          },
          " and ",
          {
            text: "reserve the required space",
            type: "bold",
          },
          " before the image loads, helping to maintain a ",
          {
            text: "stable",
            type: "bold",
          },
          " layout.",
        ],
        text: "To reduce layout shifts, the img element is given explicit width and height attributes that match the image's original dimensions. This allows the browser to calculate the correct aspect ratio and reserve the required space before the image loads, helping to maintain a stable layout.",
      },
      {
        uniqueID: "1",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of img element with width and height stylings",
          imgPath: heroImageFix2,
          imgWidth: "",
          imgHeight: "",
        },
        textParts: [
          "In addition, the image is styled with ",
          {
            text: "width: 400px",
            type: "code",
          },
          ", ",
          {
            text: "height: 100%",
            type: "code",
          },
          ", and ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          "—where 400px can be replaced with any ",
          {
            text: "custom width",
            type: "bold",
          },
          ". Setting ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          " prevents the image from shrinking its width as a side effect of being inside a flex container (row direction). When combined with the width and height attributes, these styles ensure the ",
          {
            text: "image scales correctly within its parent container",
            type: "bold",
          },
          " and ",
          {
            text: "avoids layout shifts.",
            type: "bold",
          },
        ],
        text: "In addition, the image is styled with width: 400px, height: 100%, and flex-shrink: 0—where 400px can be replaced with any custom width. Setting flex-shrink: 0 prevents the image from shrinking its width as a side effect of being inside a flex container (row direction). When combined with the width and height attributes, these styles ensure the image scales correctly within its parent container and avoids layout shifts.",
      },
      {
        uniqueID: "2",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of img element with no size dimension",
          imgPath: heroImageFix4,
          imgWidth: "",
          imgHeight: "",
        },
        textParts: [
          "After ",
          {
            text: "defining explicit dimensions",
            type: "bold",
          },
          " on the ",
          {
            text: "img",
            type: "bold-italic",
          },
          ", we now see a ",
          {
            text: "huge improvement",
            type: "bold",
          },
          " in the ",
          {
            text: "CLS score.",
            type: "bold-italic",
          },
        ],

        text: "After defining explicit dimensions on the img, we now see a huge improvement in the CLS score.",
      },
      {
        uniqueID: "3",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of img element with no size dimension",
          imgPath: heroImageFix3,
          imgWidth: "",
          imgHeight: "",
        },
        textParts: [
          "Note that for ",
          {
            text: "img",
            type: "bold-italic",
          },
          " or ",
          {
            text: "video element",
            type: "bold-italic",
          },
          " inside of a ",
          {
            text: "flex container",
            type: "bold-italic",
          },
          ", you'll need to use the ",
          {
            text: "original width",
            type: "bold",
          },
          " and ",
          {
            text: "height dimensions",
            type: "bold",
          },
          " in order to achieve 0 layout shifts. If you use a ",
          {
            text: "dummy value",
            type: "bold-italic",
          },
          " for the ",
          {
            text: "width",
            type: "bold-italic",
          },
          " and ",
          {
            text: "height attributes",
            type: "bold-italic",
          },
          ", there will be some layout shifts. To achieve 0 layout shifts using a dummy width and height attribute, it is recommended to ",
          {
            text: "change the flex parent container",
            type: "bold-italic",
          },
          " to a ",
          {
            text: "grid container",
            type: "bold-italic",
          },
          ". This is because ",
          {
            text: "grid layouts",
            type: "bold-italic",
          },
          " can ",
          {
            text: "reserve space",
            type: "bold",
          },
          " more ",
          {
            text: "predictably",
            type: "bold",
          },
          " using units such as ",
          {
            text: "fr.",
            type: "bold-italic",
          },
        ],
        text: "Note that for img or video element inside of a flex container, you'll need to use the original width and height dimensions in order to achieve 0 layout shifts. If you use a dummy value for the width and height attributes, there will be some layout shifts. To achive 0 layout shifts using a dummy width and height attribute, it is recommended to change the flex parent container to a grid container. This is because grid layouts can reserve space more predictably using units such as fr.",
      },
      {
        uniqueID: "4",
        textParts: [
          "It is ",
          {
            text: "important",
            type: "bold",
          },
          " to avoid using ",
          {
            text: "JavaScript",
            type: "bold-italic",
          },
          " to calculate the ",
          {
            text: "width and height",
            type: "bold",
          },
          " of media elements such as ",
          {
            text: "img",
            type: "bold-italic",
          },
          " and ",
          {
            text: "video",
            type: "bold-italic",
          },
          ". This is because, the values are applied after the initial layout is rendered. This can introduce late layout changes and result in ",
          {
            text: "layout shifts.",
            type: "bold",
          },
        ],
        text: "It is important to avoid using JavaScript to calculate the width and height of media elements such as img and video. This is because, the values are applied after the initial layout is rendered. This can introduce late layout changes and result in layout shifts.",
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
        path: "/img/aspect-ratio",
        text: "Aspect ratio solution",
      },
      {
        uniqueID: "2",
        path: "/img/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
