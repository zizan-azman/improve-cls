import type { LinkArrowConfig } from "@/components/link/link-arrow/LinkArrow.model";

interface HeroVideoTeaserParagraph {
  uniqueID?: string;
  text: string;
}
interface HeroVideoTeaser {
  videoWidth: string | undefined;
  videoHeight: string | undefined;
  videoAlt: string | undefined;
  videoPath: string;
  paragraphs: HeroVideoTeaserParagraph[];
  links: LinkArrowConfig[];
}

interface HeroVideoDescriptionImg {
  imgAlt: string;
  imgPath: string;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}

interface HeroVideoTextPart {
  type: "bold" | "italic" | "code" | "bold-italic" | "normal";
  text: string;
}

interface HeroVideoContentEndDescription {
  uniqueID?: string;
  text?: string;
  textParts?: (string | HeroVideoTextPart)[];
  imgConfig?: HeroVideoDescriptionImg;
}

interface HeroVideoContentEnd {
  descriptions: HeroVideoContentEndDescription[];
  links: LinkArrowConfig[];
}

export interface HeroVideoConfig {
  type: "layout-shift" | "media-dimension" | "aspect-ratio";
  heading: string;
  teaser: HeroVideoTeaser;
  contentEnd: HeroVideoContentEnd;
}

export interface HeroVideoProps {
  config: HeroVideoConfig;
}
