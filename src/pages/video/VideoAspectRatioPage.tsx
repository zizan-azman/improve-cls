import { HeroVideo } from "@/components/hero/hero-video/HeroVideo";
import { HERO_VIDEO_ASPECT_RATIO_MOCK } from "@/mock/HeroVideoAspectRatio.mock";

export default function VideoAspectRatioPage() {
  return <HeroVideo config={HERO_VIDEO_ASPECT_RATIO_MOCK} />;
}
