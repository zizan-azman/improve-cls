import { HeroConclusion } from "@/components/hero/hero-conclusion/HeroConclusion";
import { HERO_CONCLUSION_MOCK } from "@/mock/HeroConclusion.mock";

export default function ConclusionPage() {
  return (
    <section>
      <HeroConclusion config={HERO_CONCLUSION_MOCK} />
    </section>
  );
}
