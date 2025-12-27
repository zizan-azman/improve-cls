export function getHeroImageClass(
  type: string,
  base: string,
  modifier1: string,
  modifier2: string
) {
  if (type === "media-dimension") {
    return `${base} ${modifier1}`;
  }

  if (type === "aspect-ratio") {
    return `${base} ${modifier2}`;
  }

  return `${base}`;
}
