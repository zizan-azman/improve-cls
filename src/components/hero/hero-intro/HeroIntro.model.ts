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

interface HeroIntroTextPart {
  type: "bold" | "italic" | "code" | "bold-italic" | "normal";
  text: string;
}

interface HeroIntroDescription {
  uniqueID: string;
  paragraph: string;
  textParts?: (string | HeroIntroTextPart)[];
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
