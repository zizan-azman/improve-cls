import { HeroImage } from "@/components/hero/hero-image/HeroImage";
import { HERO_IMAGE_DIMENSION_MOCK } from "@/mock/HeroImageDimension.mock";

export default function ImgWidthHeightPage() {
  return <HeroImage config={HERO_IMAGE_DIMENSION_MOCK} />;
}
