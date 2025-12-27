import widthHeight1 from "@/assets/images/hero-container/width-height-styling.png";
import widthHeight2 from "@/assets/images/hero-container/width-height-cls-score.png";
import widthHeight3 from "@/assets/images/hero-container/width-height-img-attributes.png";
import type { HeroContainerConfig } from "@/components/hero/hero-container/HeroContainer.model";

export const HERO_CONTAINER_WIDTH_HEIGHT_MOCK: HeroContainerConfig = {
  type: "container-dimension",
  heading: "Fix layout shift using width and height on media containers",
  teaser: {
    imgWidth: "640",
    imgHeight: "360",
    imgAlt: "Sunflower with blue sky in the background",
    paragraphs: [
      {
        uniqueID: "1",
        text: "This example demonstrates how defining width and height on a media container prevents layout shifts when media such as images are loaded.",
      },
      {
        uniqueID: "2",
        text: "By reserving space through defining size dimensions, the browser can render the layout correctly before the image finishes loading—resulting in a stable page layout and improved Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "3",
        text: "Scroll down to learn more about the solution and why it is considered a CLS best practice.",
      },
      {
        uniqueID: "4",
        text: "To revisit the original layout shift example, check out the link below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/container/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        imgConfig: {
          imgAlt:
            "Screenshot of media container and img styling that fixes layout shifts",
          imgPath: widthHeight1,
          imgWidth: "347",
          imgHeight: "250",
          controlHeight: false,
        },
        textParts: [
          "In this example, the ",
          {
            text: "media container ",
            type: "bold-italic",
          },
          "is given ",
          {
            text: "explicit width and height ",
            type: "bold",
          },
          "values. The image itself is set to ",
          {
            text: "width 100%",
            type: "code",
          },
          ", ",
          {
            text: "height 100%",
            type: "code",
          },
          ", and ",
          {
            text: "object-fit cover",
            type: "code",
          },
          ". This allows the image to scale correctly inside the media container.",
        ],
        text: "In this example, the media container is given explicit width and height values. The image itself is set to width 100%, height 100%, and object-fit cover. This allows the image to scale correctly inside the media container.",
      },
      {
        uniqueID: "1",
        imgConfig: {
          imgAlt: "Lighthouse improved CLS score",
          imgPath: widthHeight2,
          imgWidth: "211",
          imgHeight: "78",
          controlHeight: false,
        },
        textParts: [
          "After ",
          {
            text: "defining dimensions ",
            type: "bold",
          },
          "on the ",
          {
            text: "media container, ",
            type: "bold-italic",
          },
          "running a ",
          {
            text: "Lighthouse ",
            type: "bold-italic",
          },
          "report shows a significantly ",
          {
            text: "improved CLS score.",
            type: "bold",
          },
        ],
        text: "After defining dimensions on the media container, running a Lighthouse report shows a significantly improved CLS score.",
      },
      {
        uniqueID: "2",
        textParts: [
          "This improvement occurs because the browser can ",
          {
            text: "allocate the required space ",
            type: "bold",
          },
          "during the initial render, ",
          {
            text: "preventing content from being pushed down ",
            type: "bold",
          },
          "when the image finishes loading.",
        ],
        text: "This improvement occurs because the browser can allocate the required space during the initial render, preventing content from being pushed down when the image finishes loading.",
      },
      {
        uniqueID: "3",
        textParts: [
          "By ",
          {
            text: "defining width and height ",
            type: "bold",
          },
          "on the ",
          {
            text: "media container, ",
            type: "bold-italic",
          },
          "the layout remains ",
          {
            text: "stable.",
            type: "bold",
          },
        ],
        text: "By defining width and height on the media container, the layout remains stable regardless of the image loading state.",
      },
      {
        uniqueID: "4",
        textParts: [
          "Setting the ",
          {
            text: "img element ",
            type: "bold-italic",
          },
          "to ",
          {
            text: "width: 100%",
            type: "code",
          },
          ", ",
          {
            text: "height: 100%",
            type: "code",
          },
          ", and ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          ", ensures the image fills the container without affecting the layout.",
        ],
        text: "Setting the img element to width: 100%, height: 100%, and object-fit: cover, ensures the image fills the container without affecting the layout.",
      },
      {
        uniqueID: "5",
        imgConfig: {
          imgAlt:
            "Screenshot of the img element with width, height, and alt attribute.",
          imgPath: widthHeight3,
          imgWidth: "241",
          imgHeight: "129",
          controlHeight: false,
        },
        textParts: [
          "Additionally, it is recommended to ",
          {
            text: "define width and height attributes ",
            type: "bold",
          },
          "on the ",
          {
            text: "img element ",
            type: "bold-italic",
          },
          "itself to help the ",
          {
            text: "browser reserve space and prevent layout shifts. ",
            type: "bold",
          },
          "It is also recommended to add the ",
          {
            text: "img alt attribute ",
            type: "bold",
          },
          "as it improves your ",
          {
            text: "Lighthouse Accessibility ",
            type: "bold-italic",
          },
          "and ",
          { text: "SEO score.", type: "bold-italic" },
        ],
        text: "Additionally, it is recommended to define width and height attributes on the img element itself to help the browser reserve space and prevent layout shifts. It is also recommended to add the img alt attribute as it improves your Lighthouse Accessibility and SEO score.",
      },
      {
        uniqueID: "6",
        textParts: [
          "To revisit the original layout shift example, ",
          {
            text: "check out ",
            type: "bold",
          },
          "the link below.",
        ],
        text: "To revisit the original layout shift example, check out the link below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/container/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
