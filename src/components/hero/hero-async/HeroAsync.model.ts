import type { LinkArrowConfig } from "@/components/link/link-arrow/LinkArrow.model";
import type { NewsModernConfig } from "@/components/news/news-modern/NewsModern.model";

interface HeroAsyncTeaserParagraph {
  uniqueID?: string;
  text: string;
}
interface HeroAsyncTeaser {
  newsConfig: NewsModernConfig;
  paragraphs: HeroAsyncTeaserParagraph[];
  links: LinkArrowConfig[];
}

interface HeroAsyncContentEndDescriptionImage {
  imgAlt: string | undefined;
  imgPath: string | undefined;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}

interface HeroAsyncContentEndDescriptionVideo {
  videoPath: string | undefined;
  videoWidth: string;
  videoHeight: string;
  controlHeight: boolean;
}
interface HeroAsyncTextPart {
  type: "bold" | "italic" | "code" | "bold-italic" | "normal";
  text: string;
}

interface HeroAsyncContentEndDescription {
  uniqueID?: string;
  text?: string;
  textParts?: (string | HeroAsyncTextPart)[];
  imgConfig?: HeroAsyncContentEndDescriptionImage;
  videoConfig?: HeroAsyncContentEndDescriptionVideo;
}

interface HeroAsyncContentEnd {
  descriptions: HeroAsyncContentEndDescription[];
  links: LinkArrowConfig[];
}

export interface HeroAsyncConfig {
  heading: string;
  teaser: HeroAsyncTeaser;
  contentEnd: HeroAsyncContentEnd;
}

export interface HeroAsyncProps {
  config: HeroAsyncConfig;
}
