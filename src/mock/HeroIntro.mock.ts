import type { HeroIntroConfig } from "@/components/hero/hero-intro/HeroIntro.model";
import heroIntro1 from "@/assets/images/hero-intro/hero-intro-layout-shift.webm";
import heroIntro2 from "@/assets/images/hero-intro/hero-intro-cls-compare.png";

export const HERO_INTRO_MOCK: HeroIntroConfig = {
  heading: "Why Cumulative Layout Shift is important",
  descriptions: [
    {
      uniqueID: "0",
      textParts: [
        {
          text: "Cumulative Layout Shift (CLS) ",
          type: "bold",
        },
        "is a key web performance metric that measures unexpected layout changes on a page.",
      ],
      paragraph:
        "Cumulative Layout Shift (CLS) is a key web performance metric that measures unexpected layout changes on a page.",
    },
    {
      uniqueID: "1",
      textParts: [
        {
          text: "Layout shifts ",
          type: "bold",
        },
        "are a common issue that users frequently encounter—for example, when an image loads and pushes content downward, or when a button moves just as a user is about to click it. These sudden layout shifts create a ",
        {
          text: "frustrating user experience ",
          type: "bold",
        },
        "and can ",
        {
          text: "negatively impact ",
          type: "bold",
        },
        "a website's overall performance.",
      ],
      paragraph:
        "Layout changes or shifts are a common issue that users frequently encounter—for example, when an image loads and pushes content downward, or when a button moves just as a user is about to click it. These sudden layout shifts create a frustrating user experience and can negatively impact a website's overall performance.",
      videoConfig: {
        controlHeight: true,
        videoWidth: "12",
        videoHeight: "9",
        videoPath: heroIntro1,
      },
    },
    {
      uniqueID: "2",
      textParts: [
        "Improving CLS is also ",
        {
          text: "crucial",
          type: "bold",
        },
        " for ",
        {
          text: "search engine optimization (SEO)",
          type: "bold",
        },
        ". Google considers CLS as part of its ",
        {
          text: "Core Web Vitals",
          type: "bold",
        },
        ", and pages with ",
        {
          text: "minimal layout shifts",
          type: "bold",
        },
        " are more likely to ",
        {
          text: "rank higher in search results",
          type: "bold",
        },
        ". By minimizing layout shifts, you create a more ",
        {
          text: "stable",
          type: "bold",
        },
        " and ",
        {
          text: "professional",
          type: "bold",
        },
        " website that users trust and enjoy.",
      ],
      paragraph:
        "Improving CLS is also crucial for search engine optimization (SEO). Google considers CLS as part of its Core Web Vitals, and pages with minimal layout shifts are more likely to rank higher in search results. By minimizing layout shifts, you create a more stable and professional website that users trust and enjoy.",
      imgConfig: {
        controlHeight: true,
        imgAlt: "Screenshot of poor cls vs good cls",
        imgPath: heroIntro2,
        imgWidth: "581",
        imgHeight: "456",
      },
    },
    {
      uniqueID: "3",
      textParts: [
        "This project demonstrates ",
        {
          text: "common layout shift issues ",
          type: "bold",
        },
        "found in typical web layouts, including ",
        {
          text: "images within containers, image elements, video elements, ",
          type: "bold-italic",
        },
        "and ",
        {
          text: "asynchronously loaded content. ",
          type: "bold-italic",
        },
        "For each scenario, the project presents one or more practical solutions to fix layout shifts and effectively improve the CLS score.",
      ],
      paragraph:
        "This project demonstrates common layout shift issues found in typical web layouts, including images within containers, standalone image elements, video elements, and asynchronously loaded content. For each scenario, the project presents one or more practical solutions to fix layout shifts and effectively improve the CLS score.",
    },
    {
      uniqueID: "4",
      textParts: [
        "After exploring these examples, you'll gain a better understanding of how layout shifts occur and how simple adjustments—like defining ",
        {
          text: "dimensions, ",
          type: "bold-italic",
        },
        "using ",
        {
          text: "object-fit, ",
          type: "bold-italic",
        },
        "or adding ",
        {
          text: "placeholder skeletons",
          type: "bold-italic",
        },
        "—can help reduce layout shifts.",
      ],
      paragraph:
        "After these examples, you'll gain a better understanding of how layout shifts occur and how simple adjustments—like defining dimensions, using object-fit, or adding placeholder skeletons—can lead to a smoother, more reliable user experience.",
    },
    // {
    //   uniqueID: "5",
    //   textParts: [
    //     "By improving CLS, you not only ",
    //     {
    //       text: "enhance user experience ",
    //       type: "bold",
    //     },
    //     "but also improve your site's visibility and performance in ",
    //     {
    //       text: "SEO ",
    //       type: "bold",
    //     },
    //     "rankings.",
    //   ],
    //   paragraph:
    //     "By improving CLS, you not only enhance user experience but also improve your site's visibility and performance in SEO rankings.",
    // },
  ],
};
