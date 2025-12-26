interface HeroConclusionVideo {
  videoPath: string;
  videoWidth: string;
  videoHeight: string;
  controlHeight: boolean;
}

interface HeroConclusionImg {
  imgPath: string;
  imgAlt: string;
  imgWidth: string;
  imgHeight: string;
  controlHeight: boolean;
}

interface HeroConclusionTextPart {
  type: "bold" | "italic" | "code";
  text: string;
}

interface HeroConclusionDescription {
  uniqueID: string;
  paragraph?: string;
  textPart?: (string | HeroConclusionTextPart)[];
  imgConfig?: HeroConclusionImg;
  videoConfig?: HeroConclusionVideo;
}

export interface HeroConclusionConfig {
  heading: string;
  descriptions: HeroConclusionDescription[];
}

export interface HeroConclusionProps {
  config: HeroConclusionConfig;
}
