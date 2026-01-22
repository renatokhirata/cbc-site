import { useLocation } from 'react-router-dom';

const stripTrailingSlash = (s: string) =>
  s.endsWith('/') && s !== '/' ? s.slice(0, -1) : s;

const useActiveLink = () => {
  const { pathname: rawPathname } = useLocation();
  const pathname = stripTrailingSlash(rawPathname);

  const isLinkActive = (href: string): boolean => {
    const normalizedHref = stripTrailingSlash(href || '');

    if (pathname === normalizedHref) {
      return true;
    }

    if (
      normalizedHref === '/modalidades' &&
      rawPathname.startsWith('/modalidades')
    ) {
      return true;
    }

    if (normalizedHref.includes('/modalidades/')) {
      return (
        pathname === normalizedHref ||
        rawPathname.startsWith(normalizedHref + '/')
      );
    }

    if (
      normalizedHref !== '/' &&
      rawPathname.startsWith(normalizedHref + '/')
    ) {
      return true;
    }

    return false;
  };

  return {
    pathname: rawPathname,
    isLinkActive,
  };
};

export default useActiveLink;
