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

interface HeroContainerDescriptionImg {
  imgAlt: string;
  imgPath: string;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}

interface HeroContainerTextPart {
  type: "bold" | "italic" | "code" | "bold-italic" | "normal";
  text: string;
}

interface HeroContainerContentEndDescription {
  uniqueID?: string;
  text?: string;
  textParts?: (string | HeroContainerTextPart)[];
  imgConfig?: HeroContainerDescriptionImg;
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
