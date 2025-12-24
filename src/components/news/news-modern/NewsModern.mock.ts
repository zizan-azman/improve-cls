import type { NewsModernConfig } from "./NewsModern.model";

export const NEWS_MODERN_MOCK_DATA: NewsModernConfig = {
  type: "layout-shift",
  placeholder: {
    showPlaceholder: false,
    placeholderText: "Loading please wait",
  },
  delay: 3000,
  news: [
    {
      uniqueID: "1",
      dateDay: "12",
      dateMonth: "Sep",
      category: "News",
      description: "This is a description",
    },
    {
      uniqueID: "2",
      dateDay: "10",
      dateMonth: "Sep",
      category: "Announcement",
      description: "This is a description",
    },
    {
      uniqueID: "3",
      dateDay: "8",
      dateMonth: "Sep",
      category: "News",
      description: "This is a description",
    },
  ],

  emptyData: "Sorry, there are no data available",
};
