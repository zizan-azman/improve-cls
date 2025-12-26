import type { HeroConclusionConfig } from "@/components/hero/hero-conclusion/HeroConclusion.model";

export const HERO_CONCLUSION_MOCK: HeroConclusionConfig = {
  heading: "Conclusion",
  descriptions: [
    {
      uniqueID: "0",
      textParts: [
        "Layout shifts can occur in many different scenarios, but the core principle for preventing them is simple: ",
        {
          text: "always reserve space for elements before they are rendered.",
          type: "bold",
        },
      ],
      paragraph:
        "Layout shifts can occur in many different scenarios, but the core principle for preventing them is simple: always reserve space for elements before they are rendered.",
    },
    {
      uniqueID: "1",
      textParts: [
        "While there are multiple ways to address layout shifts, they all work toward the same goal—",
        {
          text: "improving the CLS score. ",
          type: "bold-italic",
        },
        "The best solution often depends on your layout, codebase, and team preferences, so it's important to choose an approach that is both ",
        {
          text: "effective ",
          type: "bold",
        },
        "and ",
        {
          text: "easy to maintain.",
          type: "bold",
        },
      ],
      paragraph:
        "While there are multiple ways to address layout shifts, they all work toward the same goal—improving the CLS score. The best solution often depends on your layout, codebase, and team preferences, so it's important to choose an approach that is both effective and easy to maintain.",
    },
    {
      uniqueID: "3",
      textParts: [
        "Accurately identifying the root cause of a layout shift is equally important. Tools like ",
        {
          text: "Lighthouse ",
          type: "bold-italic",
        },
        "and other performance audits can provide useful hints, but they do not always pinpoint the exact culprit. A reliable approach is to disable components one by one and re-run performance checks until the source of the layout shift becomes clear.",
      ],
      paragraph:
        "Accurately identifying the root cause of a layout shift is equally important. Tools like Lighthouse and other performance audits can provide useful hints, but they do not always pinpoint the exact culprit. A reliable approach is to disable components one by one and re-run performance checks until the source of the layout shift becomes clear.",
    },
    {
      uniqueID: "4",
      textParts: [
        "For layout shifts caused by media elements such as ",
        {
          text: "images ",
          type: "bold-italic",
        },
        "and ",
        {
          text: "videos, ",
          type: "bold-italic",
        },
        "the most consistent solution is to use a dedicated media container with a fixed ",
        {
          text: "width",
          type: "code",
        },
        " and ",
        {
          text: "height",
          type: "code",
        },
        ", combined with ",
        {
          text: "object-fit: cover",
          type: "code",
        },
        " on the media itself. This approach preserves the visual layout, maintains aspect ratio, and remains easy to scale and maintain over time.",
      ],
      paragraph:
        "For layout shifts caused by media elements such as images and videos, the most consistent solution is to use a dedicated media container with a fixed width and height, combined with object-fit: cover on the media itself. This approach preserves the visual layout, maintains aspect ratio, and remains easy to scale and maintain over time.",
    },
    {
      uniqueID: "5",
      textParts: [
        "When dealing with asynchronously loaded data, always provide a ",
        {
          text: "loading placeholder ",
          type: "bold-italic",
        },
        "or ",
        {
          text: "temporary skeleton. ",
          type: "bold-italic",
        },
        "This prevents sudden content jumps, improves perceived performance, and delivers a smoother user experience while data is being fetched.",
      ],
      paragraph:
        "When dealing with asynchronously loaded data, always provide a loading placeholder or skeleton state. This prevents sudden content jumps, improves perceived performance, and delivers a smoother user experience while data is being fetched.",
    },
    {
      uniqueID: "6",
      textParts: [
        "It's also important to avoid relying on ",
        {
          text: "JavaScript ",
          type: "bold-italic",
        },
        "to calculate and apply layout dimensions at render time. This is because browsers take some time to load Javascript. Dynamically setting width and height using Javascript can introduce ",
        {
          text: "late layout changes ",
          type: "bold",
        },
        "and significantly ",
        {
          text: "worsen CLS. ",
          type: "bold",
        },
        "Wherever possible, layout dimensions should be defined using ",
        {
          text: "HTML ",
          type: "bold-italic",
        },
        "and ",
        {
          text: "CSS ",
          type: "bold-italic",
        },
        "so the browser can reserve space early in the rendering process.",
      ],
      paragraph:
        "It's also important to avoid relying on JavaScript to calculate and apply layout dimensions at render time. This is because browsers take some time to load Javascript. Dynamically setting width and height using Javascript can introduce late layout changes and significantly worsen CLS. Wherever possible, layout dimensions should be defined using HTML and CSS so the browser can reserve space early in the rendering process.",
    },
    {
      uniqueID: "7",
      textParts: [
        "Ultimately, improving CLS is not only about visual stability—it directly contributes to a ",
        {
          text: "better user experience ",
          type: "bold",
        },
        "and ",
        {
          text: "stronger SEO performance. ",
          type: "bold",
        },
        "By reducing layout shifts, you create faster, more predictable pages that users trust and search engines reward.",
      ],
      paragraph:
        "Ultimately, improving CLS is not only about visual stability—it directly contributes to a better user experience and stronger SEO performance. By reducing layout shifts, you create faster, more predictable pages that users trust and search engines reward.",
    },
  ],
};
