import { HeroImage } from "@/components/hero/hero-image/HeroImage";
import { HERO_IMAGE_LAYOUT_SHIFT_MOCK } from "@/mock/HeroImageLayoutShift.mock";

export default function ImgLayoutShiftPage() {
  return (
    <section>
      <HeroImage config={HERO_IMAGE_LAYOUT_SHIFT_MOCK} />
    </section>
  );
}
