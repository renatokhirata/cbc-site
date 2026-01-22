import { Box, Stack, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface MenuItemProps {
  label: string;
  href: string;
  color?: string;
  colorHover?: string;
  isActive?: boolean;
  hasSubItems?: boolean;
  icon?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onIconClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const MenuItem = ({
  label,
  color = 'typeText.default',
  colorHover = 'link.hovered',
  isActive = false,
  hasSubItems = false,
  icon,
  onClick,
  onIconClick,
}: MenuItemProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography
        component="span"
        onClick={onClick}
        fontWeight={isActive ? 600 : 400}
        fontSize="18px"
        color={isActive ? colorHover : color}
        sx={{
          cursor: 'pointer',
          transition: 'color 0.2s',
          '&:hover': {
            color: colorHover,
          },
        }}
      >
        {label}
      </Typography>
      {hasSubItems && (
        <Box
          component="span"
          onClick={onIconClick}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            color: isActive ? colorHover : color,
            transition: 'color 0.2s',
            '&:hover': {
              color: colorHover,
            },
          }}
        >
          {icon || <ExpandMore />}
        </Box>
      )}
    </Stack>
  );
};

export default MenuItem;
