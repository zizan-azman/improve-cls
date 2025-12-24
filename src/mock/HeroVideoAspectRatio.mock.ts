import videoTeaser from "@/assets/videos/bee-360p.mp4";
import heroVideoAspectRatio1 from "@/assets/images/hero-video/aspect-ratio/hero-video-aspect-ratio-css.png";
import heroVideoAspectRatio2 from "@/assets/images/hero-video/aspect-ratio/hero-video-aspect-ratio-object-fit.png";
import heroVideoAspectRatio3 from "@/assets/images/hero-video/aspect-ratio/hero-video-aspect-ratio-border2.png";
import heroVideoAspectRatio4 from "@/assets/images/hero-video/aspect-ratio/hero-video-aspect-ratio-cls.png";

import type { HeroVideoConfig } from "@/components/hero/hero-video/HeroVideo.model";

export const HERO_VIDEO_ASPECT_RATIO_MOCK: HeroVideoConfig = {
  type: "aspect-ratio",
  heading: "Fix layout shift using CSS aspect-ratio",
  teaser: {
    videoAlt: "Bee on a white flower",
    videoWidth: "1280",
    videoHeight: "720",
    videoPath: videoTeaser,
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
        path: "/video/width-height",
        text: "Width and Height solution",
      },
      {
        uniqueID: "2",
        path: "/video/layout-shift",
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
        imgPath: heroVideoAspectRatio1,
        text: "To reduce layout shifts, the img element is styled with width: 500px, height: auto, aspect-ratio: 16/9 and flex-shrink: 0—where 500px can be replaced with any custom width. Setting flex-shrink: 0 prevents the image from shrinking its width as a side effect of being inside a flex container (row direction). The aspect-ratio property allows the browser to calculate the video's height in advance, ensuring the correct space is reserved before the image loads.",
      },
      {
        uniqueID: "1",
        showImage: false,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of image original dimensions with the correct aspect-ratio",
        imgPath: undefined,
        text: "It's important to note that the aspect-ratio property must match your image's original aspect ratio. In this example, the image's original dimensions are width 1280px and height 720px. Therefore, aspect-ratio: 16/9 is the correct ratio to be used.",
      },
      {
        uniqueID: "2",
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of img element styled with aspect-ratio and flex-shrink set to zero",
        imgPath: heroVideoAspectRatio2,
        text: "If the image's original aspect ratio is unknown, or if you intentionally use an aspect-ratio that is different from your image's ratio, you can apply object-fit: cover. Keep in mind that object-fit: cover will crop parts of your image to fit the aspect-ratio you used, which may result in some content being clipped. The screenshot below shows the result of using CSS object-fit cover and aspect-ratio 1/1 (square) on a 720p video. The 720p gets cropped into the square aspect-ratio.",
      },
      {
        uniqueID: "3",
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of img element styled with aspect-ratio and flex-shrink set to zero",
        imgPath: heroVideoAspectRatio3,
        text: "Without object-fit cover, the video will appear as if it has an extra top and bottom spacing. To visualize the mismatched aspect-ratio clearly, we can add a background-color black to the video element. Below is a screenshot of using CSS aspect-ratio of 1/1 and 4/3 on a 720p without object-fit cover. Notice that the background-color black helps us see the actual height of the video.",
      },
      {
        uniqueID: "4",
        showImage: true,
        controlImgHeight: false,
        imgAlt:
          "Screenshot of improved CLS score after applying CSS aspect-ratio",
        imgPath: heroVideoAspectRatio4,
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
        path: "/video/width-height",
        text: "Width and Height solution",
      },
      {
        uniqueID: "2",
        path: "/video/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
