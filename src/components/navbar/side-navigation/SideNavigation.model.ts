interface SideNavigationHamburger {
  id: string;
  width: string;
  height: string;
}

interface SideNavigationLogo {
  id: string;
  path: string;
  width: string;
  height: string;
  text: string;
}

interface SideNavigationGroupButton {
  iconWidth: string;
  iconHeight: string;
  iconID: string;
  text: string;
}

interface SideNavigationLink {
  path: string;
  text: string;
}

interface SideNavigationGroup {
  id: string;
  button: SideNavigationGroupButton;
  links: SideNavigationLink[];
}

export interface SideNavigationConfig {
  hamburger: SideNavigationHamburger;
  logo: SideNavigationLogo;
  groups: SideNavigationGroup[];
}

export interface SideNavigationProps {
  config: SideNavigationConfig;
}
