import { Link as MuiLink, LinkProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useActiveLink from '../../hooks/useActiveLink';
import { isExternalLink } from '../../../../shared/utils/navigation';
import DropdownLink from './DropdownLink';
import MenuLink from './MenuLink';
import { INavigationItem } from '../../interfaces/Link/ILink';
import { KeyboardArrowDown } from '@mui/icons-material';

interface CustomLinkProps extends LinkProps {
  label: string;
  to: string;
  hoverColor?: string;
  subLinks?: INavigationItem[];
  isMobile?: boolean;
  onNavigate?: () => void;
  fontSize?:
    | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }
    | number;
}

export function CustomLink({
  to,
  label,
  hoverColor,
  subLinks,
  isMobile,
  fontSize,
  onNavigate,
  ...props
}: CustomLinkProps) {
  const navigate = useNavigate();
  const { isLinkActive } = useActiveLink();
  const isExternal = isExternalLink(to);
  const isActive = !isExternal && isLinkActive(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isExternal) return;
    e.preventDefault();
    navigate(to);
    onNavigate?.();
  };

  // Se houver sublinks, usa os componentes DropdownLink ou MenuLink
  if (subLinks && subLinks.length > 0) {
    const item: INavigationItem = {
      label,
      href: to,
      subLinks,
    };

    const menuItem: INavigationItem = {
      navigationItems: [item],
    };

    if (isMobile) {
      return (
        <DropdownLink
          item={menuItem}
          color={'typeText.tertiary'}
          colorHover={hoverColor}
          onNavigate={onNavigate || (() => {})}
        />
      );
    } else {
      return (
        <MenuLink
          item={menuItem}
          color="typeText.default"
          colorHover="typeText.tertiary"
          icon={<KeyboardArrowDown />}
        />
      );
    }
  }

  // Link simples sem sublinks
  return (
    <MuiLink
      onClick={handleClick}
      href={isExternal ? to : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
      sx={{
        fontSize: fontSize || { xs: 24, md: 18 },
        fontWeight: isActive ? 700 : 400,
        textDecoration: 'none',
        cursor: 'pointer',
        color: isActive ? hoverColor : undefined,
        '&:hover': {
          textDecoration: 'none',
          color: hoverColor || 'linkHover.primary',
        },
      }}
    >
      {label}
    </MuiLink>
  );
}
