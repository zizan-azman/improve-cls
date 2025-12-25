import type { HeroIntroProps } from "./HeroIntro.model";

export function HeroImage({ config }: HeroIntroProps) {
  const { heading, paragraphs } = config;
  return <div className="hero-intro"></div>;
}
