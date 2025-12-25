interface HeroIntroVideo {
  videoWidth: string;
  videoHeight: string;
  controlHeight: boolean;
}

interface HeroIntroImg {
  imgAlt: string;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}
interface HeroIntroParagraph {
  text: string;
  imgConfig?: HeroIntroImg;
  videoConfig?: HeroIntroVideo;
}

export interface HeroIntroConfig {
  heading: string;
  paragraphs: HeroIntroParagraph[];
}

export interface HeroIntroProps {
  config: HeroIntroConfig;
}
