import { MenuItem as MuiMenuItem } from '@mui/material';
import useActiveLink from '../../../hooks/useActiveLink';

interface MenuSubItemProps {
  label: string;
  href: string;
  colorHover?: string;
  onClick: () => void;
}

const MenuSubItem = ({
  label,
  href,
  colorHover = 'link.hovered',
  onClick,
}: MenuSubItemProps) => {
  const { isLinkActive } = useActiveLink();
  const isActive = isLinkActive(href);

  return (
    <MuiMenuItem
      onClick={onClick}
      sx={{
        color: isActive ? colorHover : 'typeText.default',
        transition: 'color 0.2s',
        '&:hover': {
          color: colorHover,
        },
      }}
    >
      {label}
    </MuiMenuItem>
  );
};

export default MenuSubItem;
