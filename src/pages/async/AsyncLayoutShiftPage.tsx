import { HeroAsync } from "@/components/hero/hero-async/HeroAsync";
import { HERO_ASYNC_LAYOUT_SHIFT_MOCK } from "@/mock/HeroAsyncLayoutShift.mock";

export default function AsyncLayoutShiftPage() {
  return (
    <section>
      <HeroAsync config={HERO_ASYNC_LAYOUT_SHIFT_MOCK} />
    </section>
  );
}
