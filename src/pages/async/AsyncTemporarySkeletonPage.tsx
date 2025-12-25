import { HeroAsync } from "@/components/hero/hero-async/HeroAsync";
import { HERO_ASYNC_NO_LOADING_PLACEHOLDER_MOCK } from "@/mock/HeroAsyncLoadingWithoutPlaceholder.mock";

export default function AsyncTemporarySkeletonPage() {
  return <HeroAsync config={HERO_ASYNC_NO_LOADING_PLACEHOLDER_MOCK} />;
}
