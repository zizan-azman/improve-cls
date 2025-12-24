import { useEffect, useState } from "react";
import type { NewsModernItem, NewsModernProps } from "./NewsModern.model";
import styles from "./NewsModern.module.scss";

export function NewsModern({ config }: NewsModernProps) {
  const { placeholder, delay, news, emptyData } = config;

  // Always start empty to simulate async load
  const [newsItems, setNewsItems] = useState<NewsModernItem[]>([]);
  const [isLoading, setIsLoading] = useState(placeholder.showPlaceholder);
  const [hasLoaded, setHasLoaded] = useState(false); // <-- new state

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsItems(news); // load mock data after delay
      setIsLoading(false); // hide placeholder if shown
      setHasLoaded(true); // mark data as loaded
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, news]); // run once on mount

  return (
    <div className={styles["news-modern"]}>
      {isLoading && placeholder.showPlaceholder && (
        <div className={styles["news-modern__loading-placeholder"]}>
          {placeholder.placeholderText}
        </div>
      )}

      {newsItems.length > 0
        ? newsItems.map((item) => (
            <div
              key={item.uniqueID}
              className={styles["news-modern__news-item"]}
            >
              <div className={styles["news-modern__date"]}>
                <div className={styles["news-modern__date-day"]}>
                  {item.dateDay}
                </div>
                <div className={styles["news-modern__date-month"]}>
                  {item.dateMonth}
                </div>
              </div>
              <div className={styles["news-modern__item-content"]}>
                <div className={styles["news-modern__item-category"]}>
                  {item.category}
                </div>
                <div className={styles["news-modern__item-paragraph"]}>
                  {item.description}
                </div>
              </div>
            </div>
          ))
        : hasLoaded && (
            <div className={styles["news-modern__empty-data"]}>{emptyData}</div>
          )}
    </div>
  );
}
