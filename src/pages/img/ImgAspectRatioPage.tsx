import { HeroImage } from "@/components/hero/hero-image/HeroImage";
import { HERO_IMAGE_ASPECT_RATIO_MOCK } from "@/mock/HeroImageAspectRatio.mock";

export default function ImgAspectRatioPage() {
  return <HeroImage config={HERO_IMAGE_ASPECT_RATIO_MOCK} />;
}
