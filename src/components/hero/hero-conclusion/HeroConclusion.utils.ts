export function getHeroDescriptionMediaClass(
  useHeight: boolean,
  base: string,
  modifier: string
) {
  return useHeight ? `${base} ${modifier}` : `${base}`;
}

export const getEmphasizeClass = (type: string): string => {
  switch (type) {
    case "bold":
      return "emphasize--bold";
    case "italic":
      return "emphasize--italic";
    case "bold-italic":
      return "emphasize--bold-italic";
    case "code":
      return "emphasize--code";
    default:
      return "";
  }
};
