import { NewsModern } from "@/components/news/news-modern/NewsModern";
import { NEWS_MODERN_MOCK_DATA } from "@/components/news/news-modern/NewsModern.mock";

export default function AsyncLayoutShiftPage() {
  return <NewsModern config={NEWS_MODERN_MOCK_DATA} />;
}
