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
        text: "Aspect ratio solution",
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
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of video element with width and height attribute",
          imgPath: heroVideoDimension1,
          imgWidth: "323",
          imgHeight: "252",
        },
        textParts: [
          "To reduce layout shifts, the ",
          {
            text: "video element",
            type: "bold-italic",
          },
          " is assigned explicit ",
          {
            text: "width and height attributes",
            type: "bold-italic",
          },
          " matching its original dimensions. This allows the browser to calculate the correct ",
          {
            text: "aspect ratio",
            type: "bold-italic",
          },
          " and reserve the necessary space before the video loads, helping maintain a ",
          {
            text: "stable layout",
            type: "bold",
          },
          ".",
        ],
        text: "To reduce layout shifts, the video element is given explicit width and height attributes that match the video's original dimensions. This allows the browser to calculate the correct aspect ratio and reserve the required space before the video loads, helping to maintain a stable layout.",
      },
      {
        uniqueID: "1",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Screenshot of video element with width and height CSS",
          imgPath: heroVideoDimension2,
          imgWidth: "225",
          imgHeight: "156",
        },
        textParts: [
          "In addition, the ",
          {
            text: "video",
            type: "bold-italic",
          },
          " is styled with ",
          {
            text: "width: 500px",
            type: "code",
          },
          ", ",
          {
            text: "height: auto",
            type: "code",
          },
          ", and ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          "—where ",
          {
            text: "500px",
            type: "bold-italic",
          },
          " can be replaced with any ",
          {
            text: "custom width",
            type: "bold",
          },
          ". Setting ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          " prevents the video from ",
          {
            text: "shrinking inside a flex container",
            type: "bold-italic",
          },
          " (row direction). Combined with the explicit width and height attributes, these styles ensure the video scales correctly within its parent container and avoids layout shifts.",
        ],
        text: "In addition, the video is styled with width: 500px, height: auto, and flex-shrink: 0—where 400px can be replaced with any custom width. Setting flex-shrink: 0 prevents the video from shrinking its width as a side effect of being inside a flex container (row direction). When combined with the width and height attributes, these styles ensure the video scales correctly within its parent container and avoids layout shifts.",
      },
      {
        uniqueID: "2",
        imgConfig: {
          controlHeight: false,
          imgAlt: "Improved CLS score",
          imgPath: heroVideoDimension3,
          imgWidth: "211",
          imgHeight: "92",
        },
        textParts: [
          "After defining explicit dimensions on the ",
          {
            text: "video",
            type: "bold-italic",
          },
          ", we now see a significant ",
          {
            text: "improvement ",
            type: "bold",
          },
          "in the ",
          {
            text: "CLS score",
            type: "bold-italic",
          },
          ".",
        ],
        text: "After defining explicit dimensions on the video, we now see a huge improvement in the CLS score.",
      },
      {
        uniqueID: "3",
        textParts: [
          "Additionally, it is important to avoid using ",
          {
            text: "JavaScript",
            type: "bold-italic",
          },
          " to calculate the ",
          {
            text: "width",
            type: "bold-italic",
          },
          " and ",
          {
            text: "height",
            type: "bold-italic",
          },
          " of media elements such as ",
          {
            text: "images",
            type: "bold-italic",
          },
          " and ",
          {
            text: "videos",
            type: "bold-italic",
          },
          ". Because these values are applied after the initial layout renders, they can introduce late layout changes and result in ",
          {
            text: "layout shifts",
            type: "bold",
          },
          ".",
        ],
        text: "Additionally, it is important to avoid using Javascript to calculate the width and height of a media element such as img and video. Using Javascript will definitely cause layout shifts.",
      },
      {
        uniqueID: "4",
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
        path: "/video/aspect-ratio",
        text: "Aspect ratio solution",
      },
      {
        uniqueID: "2",
        path: "/video/layout-shift",
        text: "Layout shift example",
      },
    ],
  },
};
