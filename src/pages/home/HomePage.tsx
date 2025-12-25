import { HeroIntro } from "@/components/hero/hero-intro/HeroIntro";
import { HERO_INTRO_MOCK } from "@/mock/HeroIntro.mock";

export default function HomePage() {
  return (
    <section>
      <HeroIntro config={HERO_INTRO_MOCK} />
    </section>
  );
}
