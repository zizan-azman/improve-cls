export function getNavLinkClass(
  isActive: boolean,
  base: string,
  active: string
) {
  return isActive ? `${base} ${active}` : `${base}`;
}

export function getDrawerClass(isOpen: boolean, base: string, active: string) {
  return isOpen ? `${base} ${active}` : `${base}`;
}

export function getGroupLinkClass(
  isExpanded: boolean,
  base: string,
  expand: string
) {
  return isExpanded ? `${base} ${expand}` : `${base}`;
}
