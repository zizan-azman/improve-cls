interface HeroIntroVideo {
  videoPath: string;
  videoWidth: string;
  videoHeight: string;
  controlHeight: boolean;
}

interface HeroIntroImg {
  imgPath: string;
  imgAlt: string;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}

interface HeroIntroDescription {
  uniqueID: string;
  paragraph: string;
  imgConfig?: HeroIntroImg;
  videoConfig?: HeroIntroVideo;
}

export interface HeroIntroConfig {
  heading: string;
  descriptions: HeroIntroDescription[];
}

export interface HeroIntroProps {
  config: HeroIntroConfig;
}
