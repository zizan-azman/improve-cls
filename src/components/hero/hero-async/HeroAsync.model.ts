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

interface HeroAsyncContentEndDescription {
  uniqueID?: string;
  text: string;
  imgAlt: string | undefined;
  imgPath: string | undefined;
  showImage: boolean;
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
