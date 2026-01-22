import { Box } from '@mui/material';

interface MenuIconProps {
  onClick: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ onClick }) => {
  return (
    <Box
      component="img"
      src="menu.svg"
      alt="Menu"
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    />
  );
};

export default MenuIcon;
