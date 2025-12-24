export function getNewsModernClass(
  type: string,
  base: string,
  modifier1: string,
  modifier2: string
) {
  if (type === "loading-placeholder") {
    return `${base} ${modifier1}`;
  }

  if (type === "container-dimension") {
    return `${base} ${modifier2}`;
  }

  return `${base}`;
}
