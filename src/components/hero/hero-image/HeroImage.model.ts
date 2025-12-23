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

interface HeroImageContentEndDescription {
  uniqueID?: string;
  text: string;
  imgAlt: string | undefined;
  imgPath: string | undefined;
  showImage: boolean;
  controlImgHeight: boolean;
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
