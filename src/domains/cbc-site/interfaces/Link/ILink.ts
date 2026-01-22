export interface INavigationItem {
  title?: string;
  href?: string;
  label?: string;
  subLinks?: INavigationItem[];
  navigationItems?: INavigationItem[];
  bgImage?: string;
  icon?: string;
}

export interface INavigation {
  type: string;
  navigationItems: INavigationItem[];
}
