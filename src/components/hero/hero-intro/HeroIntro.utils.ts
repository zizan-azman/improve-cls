export function getHeroDescriptionMediaClass(
  useHeight: boolean,
  base: string,
  modifier: string
) {
  return useHeight ? `${base} ${modifier}` : `${base}`;
}
