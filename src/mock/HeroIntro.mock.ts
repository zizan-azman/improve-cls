import type { HeroIntroConfig } from "@/components/hero/hero-intro/HeroIntro.model";
import heroIntro1 from "@/assets/videos/layout-shift.webm";

export const HERO_INTRO_MOCK: HeroIntroConfig = {
  heading: "Why Cumulative Layout Shift is important",
  descriptions: [
    {
      uniqueID: "0",
      paragraph:
        "Cumulative Layout Shift (CLS) is a key metric in web performance that measures unexpected layout changes on a page. You've likely experienced it yourself—an image suddenly loads and pushes content down, or a button shifts just as you're about to click it. These sudden movements create a frustrating user experience and can negatively impact engagement.",
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
        "Improving CLS is not just about user satisfaction; it's also crucial for search engine optimization (SEO). Google considers CLS as part of its Core Web Vitals, and pages with lower layout shifts are more likely to rank higher in search results. By minimizing layout shifts, you create a more stable and professional website that users trust and enjoy.",
    },
    {
      uniqueID: "3",
      paragraph:
        "This project demonstrates common layout shift issues across typical web layouts, including images in containers, standalone image elements, video elements, and content loaded asynchronously. For each scenario, we provide one or two practical solutions to prevent layout shifts, helping you improve your CLS score effectively.",
    },
    {
      uniqueID: "4",
      paragraph:
        "By exploring these examples, you'll gain a better understanding of how layout shifts occur and how simple adjustments—like defining dimensions, using object-fit, or adding placeholder skeletons—can lead to a smoother, more reliable user experience. Ultimately, improving CLS not only enhances usability but also boosts your site's SEO performance, making it more visible and engaging for visitors.",
    },
  ],
};
