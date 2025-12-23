import type { LinkArrowConfig } from "@/components/link/link-arrow/LinkArrow.model";

interface HeroContainerTeaserParagraph {
  uniqueID?: string;
  text: string;
}
interface HeroContainerTeaser {
  imgWidth: string | undefined;
  imgHeight: string | undefined;
  imgAlt: string;
  paragraphs: HeroContainerTeaserParagraph[];
  links: LinkArrowConfig[];
}

interface HeroContainerContentEndDescription {
  uniqueID?: string;
  text: string;
  imgAlt: string | undefined;
  imgPath: string | undefined;
  showImage: boolean;
}

interface HeroContainerContentEnd {
  descriptions: HeroContainerContentEndDescription[];
  links: LinkArrowConfig[];
}

export interface HeroContainerConfig {
  type: "layout-shift" | "container-dimension";
  heading: string;
  teaser: HeroContainerTeaser;
  contentEnd: HeroContainerContentEnd;
}

export interface HeroContainerProps {
  config: HeroContainerConfig;
}
