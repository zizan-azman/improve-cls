import { HeroVideo } from "@/components/hero/hero-video/HeroVideo";
import { HERO_VIDEO_DIMENSION_MOCK } from "@/mock/HeroVideoDimension.mock";

export default function VideoWidthHeightPage() {
  return <HeroVideo config={HERO_VIDEO_DIMENSION_MOCK} />;
}
