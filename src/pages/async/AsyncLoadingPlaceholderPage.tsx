import { HeroAsync } from "@/components/hero/hero-async/HeroAsync";
import { HERO_ASYNC_LOADING_PLACEHOLDER_MOCK } from "@/mock/HeroAsyncLoadingPlaceholder.mock";

export default function AsyncLoadingPlaceholderPage() {
  return <HeroAsync config={HERO_ASYNC_LOADING_PLACEHOLDER_MOCK} />;
}
