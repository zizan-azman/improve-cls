export function getHeroDescriptionImageClass(
  useHeight: boolean,
  base: string,
  modifier: string
) {
  return useHeight ? `${base} ${modifier}` : `${base}`;
}

export function getHeroDescriptionVideoClass(
  useHeight: boolean,
  base: string,
  modifier: string
) {
  return useHeight ? `${base} ${modifier}` : `${base}`;
}
