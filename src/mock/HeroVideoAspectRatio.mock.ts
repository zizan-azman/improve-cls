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
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of video element using CSS aspect-ratio inside a flex container",
          imgPath: heroVideoAspectRatio1,
          imgWidth: "232",
          imgHeight: "160",
        },
        textParts: [
          "To reduce layout shifts, the ",
          {
            text: "video",
            type: "bold-italic",
          },
          " element is styled with ",
          {
            text: "width: 500px",
            type: "code",
          },
          ", ",
          {
            text: "height: auto",
            type: "code",
          },
          ", ",
          {
            text: "aspect-ratio: 16/9",
            type: "code",
          },
          " and ",
          {
            text: "flex-shrink: 0",
            type: "code",
          },
          "—where ",
          {
            text: "500px",
            type: "bold",
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
          " prevents the video from shrinking inside a flex container (row direction). The ",
          {
            text: "aspect-ratio",
            type: "bold-italic",
          },
          " property allows the ",
          {
            text: "browser to calculate the video's height in advance",
            type: "bold",
          },
          ", ensuring the ",
          {
            text: "correct space is reserved",
            type: "bold",
          },
          " before the video loads.",
        ],
        text: "To reduce layout shifts, the cideo element is styled with width: 500px, height: auto, aspect-ratio: 16/9 and flex-shrink: 0—where 500px can be replaced with any custom width. Setting flex-shrink: 0 prevents the video from shrinking its width as a side effect of being inside a flex container (row direction). The aspect-ratio property allows the browser to calculate the video's height in advance, ensuring the correct space is reserved before the video loads.",
      },
      {
        uniqueID: "1",
        textParts: [
          "It's important to ensure that the ",
          {
            text: "aspect-ratio",
            type: "bold-italic",
          },
          " property matches the video's ",
          {
            text: "original dimensions",
            type: "bold",
          },
          ". In this example, the video has a ",
          {
            text: "width of 1280px",
            type: "bold-italic",
          },
          " and a ",
          {
            text: "height of 720px",
            type: "bold-italic",
          },
          ", so an ",
          {
            text: "aspect ratio of 16/9",
            type: "bold-italic",
          },
          " should be used.",
        ],
        text: "It's important to note that the aspect-ratio property must match your video's original aspect ratio. In this example, the video's original dimensions are width 1280px and height 720px. Therefore, aspect-ratio: 16/9 is the correct ratio to be used.",
      },
      {
        uniqueID: "2",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of video being cropped to a different aspect-ratio",
          imgPath: heroVideoAspectRatio2,
          imgWidth: "608",
          imgHeight: "623",
        },
        textParts: [
          "If the video's original aspect ratio is ",
          { text: "unknown", type: "bold" },
          ", or if you intentionally use an ",
          {
            text: "aspect ratio different from the video's actual ratio",
            type: "bold",
          },
          ", applying ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          " ensures the video fills the reserved space. Keep in mind that ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          " may ",
          {
            text: "crop",
            type: "bold",
          },
          " parts of the video to fit the chosen aspect ratio, which can result in some content being ",
          {
            text: "clipped",
            type: "bold",
          },
          ". The screenshot below shows the effect of using CSS ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          " and ",
          {
            text: "aspect-ratio: 1/1",
            type: "code",
          },
          " (square) on a ",
          {
            text: "720p video",
            type: "bold",
          },
          ", which gets ",
          {
            text: "cropped",
            type: "bold",
          },
          " to match the ",
          {
            text: "square aspect ratio",
            type: "bold",
          },
          ".",
        ],
        text: "If the video's original aspect ratio is unknown, or if you intentionally use an aspect-ratio that is different from your video's ratio, you can apply object-fit: cover. Keep in mind that object-fit: cover will crop parts of your video to fit the aspect-ratio you used, which may result in some content being clipped. The screenshot below shows the result of using CSS object-fit cover and aspect-ratio 1/1 (square) on a 720p video. The 720p video gets cropped into the square aspect-ratio.",
      },
      {
        uniqueID: "3",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of video element styled with aspect-ratio and flex-shrink set to zero",
          imgPath: heroVideoAspectRatio3,
          imgWidth: "3170",
          imgHeight: "2432",
        },
        textParts: [
          "Without ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          ", the video may appear to have ",
          {
            text: "extra top and bottom spacing",
            type: "bold",
          },
          ". To make the ",
          {
            text: "mismatched aspect ratio",
            type: "bold",
          },
          " more visible, we can add a ",
          {
            text: "background-color: black",
            type: "code",
          },
          " to the video element. The screenshot below shows the result of applying CSS ",
          {
            text: "aspect-ratio: 1/1",
            type: "code",
          },
          " and ",
          {
            text: "aspect-ratio: 4/3",
            type: "code",
          },
          " on a ",
          {
            text: "720p video",
            type: "bold-italic",
          },
          " without ",
          {
            text: "object-fit: cover",
            type: "code",
          },
          ". Notice how the ",
          {
            text: "black background",
            type: "bold",
          },
          " helps visualize the video's actual height.",
        ],
        text: "Without object-fit cover, the video will appear as if it has an extra top and bottom spacing. To visualize the mismatched aspect-ratio clearly, we can add a background-color black to the video element. Below is a screenshot of using CSS aspect-ratio of 1/1 and 4/3 on a 720p without object-fit cover. Notice that the background-color black helps us see the actual height of the video.",
      },
      {
        uniqueID: "4",
        imgConfig: {
          controlHeight: false,
          imgAlt:
            "Screenshot of improved CLS score after applying CSS aspect-ratio",
          imgPath: heroVideoAspectRatio4,
          imgWidth: "211",
          imgHeight: "92",
        },
        textParts: [
          "After applying the ",
          { text: "aspect-ratio ", type: "bold" },
          "stylings, we now see a huge ",
          { text: "improvement ", type: "bold" },
          "in the ",
          { text: "CLS score", type: "bold-italic" },
          ".",
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
