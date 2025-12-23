import { HeroContainer } from "@/components/hero/hero-container/HeroContainer";
import { HERO_CONTAINER_LAYOUT_SHIFT_MOCK } from "@/mock/HeroContainerLayoutShift.mock";

function ContainerLayoutShiftPage() {
  return <HeroContainer config={HERO_CONTAINER_LAYOUT_SHIFT_MOCK} />;
}

export default ContainerLayoutShiftPage;
