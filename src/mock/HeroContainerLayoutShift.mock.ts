import layoutShift1 from "@/assets/images/hero-container/layout-shift-cls-score.png";
import layoutShift2 from "@/assets/images/hero-container/layout-shift-img-no-dimension.png";
import layoutShift3 from "@/assets/images/hero-container/layout-shift-image-container-no-dimension.png";
import type { HeroContainerConfig } from "@/components/hero/hero-container/HeroContainer.model";

export const HERO_CONTAINER_LAYOUT_SHIFT_MOCK: HeroContainerConfig = {
  type: "layout-shift",
  heading: "Layout Shift caused by Media Containers inside a flex container",
  teaser: {
    imgWidth: undefined,
    imgHeight: undefined,
    imgAlt: "Sunflower with blue sky in the background",
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
        text: "To learn how to fix this layout shift and improve the CLS score, check out the link below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/container/width-height",
        text: "Width and Height solution",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        showImage: false,
        imgAlt: undefined,
        imgPath: undefined,
        text: "In this example, we have a Hero component that contains an image wrapped inside a media container. Because neither the image nor its container has a predefined width and height, the page experiences a visible layout shift when the image finishes loading.",
      },
      {
        uniqueID: "1",
        showImage: true,
        imgAlt: "Lighthouse poor CLS score",
        imgPath: `${layoutShift1}`,
        text: "When running a Lighthouse report, the results show that this page has a poor Cumulative Layout Shift (CLS) score.",
      },
      {
        uniqueID: "2",
        showImage: false,
        imgAlt: "",
        imgPath: undefined,
        text: "To improve the CSL score, we need to find out which elements are causing this layout shift. In some cases, Lighthouse does not clearly identify which element is responsible for the layout shift.",
      },
      {
        uniqueID: "3",
        showImage: false,
        imgAlt: "",
        imgPath: undefined,
        text: "After further investigation—such as disabling components one by one—it becomes clear that the img element is the source of the layout shift.",
      },
      {
        uniqueID: "4",
        showImage: true,
        imgAlt:
          "Screenshot of img element that does not have width or height dimension",
        imgPath: `${layoutShift2}`,
        text: "This happens because the img element does not have a predefined width or height values. As a result, the browser initially renders it with zero dimensions and later recalculates its size once the image loads—pushing content below it and causing a visible layout shift.",
      },
      {
        uniqueID: "5",
        showImage: true,
        imgAlt:
          "Screenshot of media container that does not have width or height dimension",
        imgPath: `${layoutShift3}`,
        text: "Additionally, the img element is inside a media container. But the media container also does not contain any width or height dimensions. Since both img element and its container do not have any size dimensions, therefore layout shifts occur.",
      },
      {
        uniqueID: "6",
        showImage: false,
        imgAlt: "",
        imgPath: undefined,
        text: "To learn how to fix this layout shift and improve the CLS score, check out the link below.",
      },
    ],
    links: [
      {
        uniqueID: "1",
        path: "/container/width-height",
        text: "Width and Height solution",
      },
    ],
  },
};
