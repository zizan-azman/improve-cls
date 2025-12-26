import type { HeroIntroConfig } from "@/components/hero/hero-intro/HeroIntro.model";
import heroIntro1 from "@/assets/images/hero-intro/hero-intro-layout-shift.webm";
import heroIntro2 from "@/assets/images/hero-intro/hero-intro-cls-compare.png";

export const HERO_INTRO_MOCK: HeroIntroConfig = {
  heading: "Why Cumulative Layout Shift is important",
  descriptions: [
    {
      uniqueID: "0",
      paragraph:
        "Cumulative Layout Shift (CLS) is a key web performance metric that measures unexpected layout changes on a page. Layout changes or shifts are a common issue that users frequently encounter—for example, when an image loads and pushes content downward, or when a button moves just as a user is about to click it. These sudden layout shifts create a frustrating user experience and can negatively impact a website's overall performance.",
      videoConfig: {
        controlHeight: true,
        videoWidth: "12",
        videoHeight: "9",
        videoPath: heroIntro1,
      },
    },
    {
      uniqueID: "1",
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
      paragraph:
        "This project demonstrates common layout shift issues found in typical web layouts, including images within containers, standalone image elements, video elements, and asynchronously loaded content. For each scenario, the project presents one or more practical solutions to fix layout shifts and effectively improve the CLS score.",
    },
    {
      uniqueID: "4",
      paragraph:
        "By exploring these examples, you'll gain a better understanding of how layout shifts occur and how simple adjustments—like defining dimensions, using object-fit, or adding placeholder skeletons—can lead to a smoother, more reliable user experience.",
    },
    {
      uniqueID: "5",
      paragraph:
        "By improving CLS, you not only enhance user experience but also improve your site’s visibility and performance in SEO rankings.",
    },
  ],
};
