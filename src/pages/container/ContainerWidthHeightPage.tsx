import { HeroContainer } from "@/components/hero/hero-container/HeroContainer";
import { HERO_CONTAINER_WIDTH_HEIGHT_MOCK } from "@/mock/HeroContainerWidthHeight.mock";

export default function ContainerWidthHeightPage() {
  return <HeroContainer config={HERO_CONTAINER_WIDTH_HEIGHT_MOCK} />;
}
