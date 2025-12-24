import widthHeight1 from "@/assets/images/hero-container/width-height-styling.png";
import widthHeight2 from "@/assets/images/hero-container/width-height-cls-score.png";
import widthHeight3 from "@/assets/images/hero-container/width-height-img-attributes.png";
import type { HeroContainerConfig } from "@/components/hero/hero-container/HeroContainer.model";

export const HERO_CONTAINER_WIDTH_HEIGHT_MOCK: HeroContainerConfig = {
  type: "container-dimension",
  heading: "Fix layout shift by defining width and height on media containers",
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
        showImage: true,
        imgAlt:
          "Screenshot of media container and img styling that fixes layout shifts",
        imgPath: widthHeight1,
        text: "In this example, the media container is given explicit width and height values. The image itself is set to width and height of 100% with object-fit: cover, allowing it to scale correctly within the reserved space.",
      },
      {
        uniqueID: "1",
        showImage: true,
        imgAlt: "Lighthouse improved CLS score",
        imgPath: widthHeight2,
        text: "After defining dimensions on the media container, running a Lighthouse report shows a significantly improved CLS score.",
      },
      {
        uniqueID: "2",
        showImage: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "This improvement occurs because the browser can allocate the required space during the initial render, preventing content from being pushed down when the image finishes loading.",
      },
      {
        uniqueID: "3",
        showImage: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "By defining width and height on the media container, the layout remains stable regardless of the image loading state.",
      },
      {
        uniqueID: "4",
        showImage: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "Setting the img element to width: 100% and height: 100%, combined with object-fit: cover, ensures the image fills the container without affecting the layout.",
      },
      {
        uniqueID: "5",
        showImage: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "This approach is a recommended best practice for preventing layout shifts in responsive designs, especially when working with dynamic or slow-loading media.",
      },
      {
        uniqueID: "6",
        showImage: true,
        imgAlt:
          "Screenshot of the img element with width, height, and alt attribute.",
        imgPath: widthHeight3,
        text: "It is also recommended to define width and height attributes on the img element itself to help the browser reserve space and prevent layout shifts. This will improve the Lighthouse performance score. Additionally, it is also recommended to add the alt attribute to your media elements as it improves your Lighthouse Accessibility and SEO score.",
      },
      {
        uniqueID: "7",
        showImage: false,
        imgAlt: undefined,
        imgPath: undefined,
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
