import type { LinkArrowConfig } from "@/components/link/link-arrow/LinkArrow.model";

interface HeroImageTeaserParagraph {
  uniqueID?: string;
  text: string;
}
interface HeroImageTeaser {
  imgWidth: string | undefined;
  imgHeight: string | undefined;
  imgAlt: string | undefined;
  imgPath: string;
  paragraphs: HeroImageTeaserParagraph[];
  links: LinkArrowConfig[];
}

interface HeroImageDescriptionImg {
  imgAlt: string;
  imgPath: string;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}

interface HeroImageTextPart {
  type: "bold" | "italic" | "code" | "bold-italic" | "normal";
  text: string;
}

interface HeroImageContentEndDescription {
  uniqueID?: string;
  text?: string;
  textParts?: (string | HeroImageTextPart)[];
  imgConfig?: HeroImageDescriptionImg;
}

interface HeroImageContentEnd {
  descriptions: HeroImageContentEndDescription[];
  links: LinkArrowConfig[];
}

export interface HeroImageConfig {
  type: "layout-shift" | "media-dimension" | "aspect-ratio";
  heading: string;
  teaser: HeroImageTeaser;
  contentEnd: HeroImageContentEnd;
}

export interface HeroImageProps {
  config: HeroImageConfig;
}
