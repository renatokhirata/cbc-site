export const isExternalLink = (href?: string): boolean => {
  if (!href) {
    return false;
  }

  return (
    /^(https?:)?\/\//i.test(href) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
};
