export interface NewsModernPlaceholder {
  showPlaceholder: boolean;
  placeholderText: string;
}

export interface NewsModernItem {
  uniqueID: string;
  dateDay: string;
  dateMonth: string;
  category: "News" | "Announcement";
  description: string;
}

export interface NewsModernConfig {
  placeholder: NewsModernPlaceholder;
  delay?: number;
  news: NewsModernItem[];
  emptyData: string;
}

export interface NewsModernProps {
  config: NewsModernConfig;
}
