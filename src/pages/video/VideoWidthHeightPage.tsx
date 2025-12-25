import { HeroVideo } from "@/components/hero/hero-video/HeroVideo";
import { HERO_VIDEO_DIMENSION_MOCK } from "@/mock/HeroVideoDimension.mock";

export default function VideoWidthHeightPage() {
  return (
    <section>
      <HeroVideo config={HERO_VIDEO_DIMENSION_MOCK} />
    </section>
  );
}
