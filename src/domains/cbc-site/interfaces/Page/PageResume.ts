import { INavigation } from '../Link/ILink';

export interface PageResume {
  title?: string;
  content?: string;
  subContent?: string;
  slug?: string;
  banner?: string;
  mobileBanner?: string;
  menuItems?: INavigation[];
}
