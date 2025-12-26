export function getModifierClass(
  condition: boolean,
  base: string,
  modifier: string
) {
  return condition ? `${base} ${modifier}` : `${base}`;
}

export const getEmphasizeClass = (type: string): string => {
  switch (type) {
    case "bold":
      return "emphasize emphasize--bold";
    case "italic":
      return "emphasize emphasize--italic";
    case "bold-italic":
      return "emphasize emphasize--bold-italic";
    case "code":
      return "emphasize emphasize--code";
    case "normal":
      return "emphasize";
    default:
      return "";
  }
};
