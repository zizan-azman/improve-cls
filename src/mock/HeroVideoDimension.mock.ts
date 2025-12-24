import videoTeaser from "@/assets/videos/bee-360p.mp4";
import heroVideoDimension1 from "@/assets/images/hero-video/dimension/hero-video-dimension-attribute.png";
import heroVideoDimension2 from "@/assets/images/hero-video/dimension/hero-video-dimension-styling.png";
import heroVideoDimension3 from "@/assets/images/hero-video/dimension/hero-video-dimension-cls.png";
import type { HeroVideoConfig } from "@/components/hero/hero-video/HeroVideo.model";

export const HERO_VIDEO_DIMENSION_MOCK: HeroVideoConfig = {
  type: "media-dimension",
  heading: "Fix layout shift using video element width and height",
  teaser: {
    videoWidth: "640",
    videoHeight: "360",
    videoPath: videoTeaser,
    videoAlt: "Bee pollinating a flower",
    paragraphs: [
      {
        uniqueID: "1",
        text: "This example demonstrates how defining width and height on a video element (inside a flex container) can help to reduce layout shifts.",
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
        path: "/video/aspect-ratio",
        text: "Fix layout shift using aspect-ratio",
      },
      {
        uniqueID: "2",
        path: "/video/layout-shift",
        text: "View the original layout shift example",
      },
    ],
  },
  contentEnd: {
    descriptions: [
      {
        uniqueID: "0",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Screenshot of video element with width and height attribute",
        imgPath: heroVideoDimension1,
        text: "To reduce layout shifts, the video element is given explicit width and height attributes that match the video's original dimensions. This allows the browser to calculate the correct aspect ratio and reserve the required space before the video loads, helping to maintain a stable layout.",
      },
      {
        uniqueID: "1",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Screenshot of video element with width and height CSS",
        imgPath: heroVideoDimension2,
        text: "In addition, the image is styled with width: 400px, height: 100%, and flex-shrink: 0—where 400px can be replaced with any custom width. Setting flex-shrink: 0 prevents the image from shrinking its width as a side effect of being inside a flex container (row direction). When combined with the width and height attributes, these styles ensure the image scales correctly within its parent container and avoids layout shifts.",
      },
      {
        uniqueID: "2",
        showImage: true,
        controlImgHeight: false,
        imgAlt: "Improved CLS score",
        imgPath: heroVideoDimension3,
        text: "After defining explicit dimensions on the video, we now see a huge improvement in the CLS score.",
      },
      {
        uniqueID: "4",
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
        path: "/video/aspect-ratio",
        text: "Fix layout shift using aspect-ratio",
      },
      {
        uniqueID: "2",
        path: "/video/layout-shift",
        text: "View the original layout shift example",
      },
    ],
  },
};
