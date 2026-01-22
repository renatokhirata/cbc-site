import { Link, ListItemButton } from '@mui/material';
import useActiveLink from '../../../hooks/useActiveLink';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { isExternalLink } from '../../../../../shared/utils/navigation';

interface SubItemProps {
  item: string;
  to: string;
  colorHover: string;
  onClick: () => void;
}

const SubItem = ({
  item,
  to,
  colorHover = 'link.hovered',
  onClick,
}: SubItemProps) => {
  const { isLinkActive } = useActiveLink();
  const isMobile = useBreakpoint('md');
  const isActive = isLinkActive(to);
  const isExternal = isExternalLink(to);

  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        py: isMobile ? 1 : 0.5,
        px: 1,
        '&:hover': { color: colorHover },
      }}
    >
      <Link
        onClick={onClick}
        href={to}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        sx={{
          fontSize: { xs: 24, md: 18 },
          fontWeight: isActive ? 600 : 400,
          textDecoration: 'none',
          cursor: 'pointer',
          color: isActive ? colorHover : 'typeText.default',
          '&:hover': {
            textDecoration: 'none',
            color: colorHover || 'linkHover.primary',
          },
        }}
      >
        {item}
      </Link>
    </ListItemButton>
  );
};

export default SubItem;
