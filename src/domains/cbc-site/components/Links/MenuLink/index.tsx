import { useState } from 'react';
import { Box, Stack, Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useActiveLink from '../../../hooks/useActiveLink';
import { INavigationItem } from '../../../interfaces/Link/ILink';
import { isExternalLink } from '../../../../../shared/utils/navigation';
import MenuItem from './MenuItem';
import MenuSubItem from './MenuSubItem';
import { KeyboardArrowDown } from '@mui/icons-material';

interface MenuLinkProps {
  item: INavigationItem;
  color?: string;
  colorHover?: string;
  icon?: React.ReactNode;
}

const MenuLink = ({
  item,
  color,
  colorHover,
  icon = <KeyboardArrowDown />,
}: MenuLinkProps) => {
  const navigate = useNavigate();
  const { isLinkActive, pathname } = useActiveLink();
  const [openMenus, setOpenMenus] = useState<{
    [key: number]: HTMLElement | null;
  }>({});

  const handleMenuClose = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: null,
    }));
  };

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: prev[index] ? null : event.currentTarget,
    }));
  };

  const handleNavigate = (href?: string) => {
    if (!href) return;

    if (isExternalLink(href)) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(href, { replace: true });
  };

  return (
    <Stack direction="row" spacing={2}>
      {item?.navigationItems?.map((link, index) => {
        const isModalitiesParent =
          (link.href || '').startsWith('/modalidades') &&
          link.subLinks &&
          link.subLinks.length > 0;
        const isActive = isModalitiesParent
          ? pathname.startsWith('/modalidades') || isLinkActive(link.href || '')
          : isLinkActive(link.href || '');

        return (
          <Box key={index}>
            <MenuItem
              label={link.label || ''}
              href={link.href || ''}
              color={color}
              colorHover={colorHover}
              isActive={isActive}
              hasSubItems={!!link.subLinks?.length}
              icon={icon}
              onClick={(event) => {
                event.stopPropagation();
                handleNavigate(link.href);
              }}
              onIconClick={(event) => handleMenuClick(event, index)}
            />
            {link.subLinks && link.subLinks.length > 0 && (
              <Menu
                anchorEl={openMenus[index]}
                open={Boolean(openMenus[index])}
                onClose={() => handleMenuClose(index)}
                disableScrollLock
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'customBackground.primary',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginTop: '2px',
                  },
                }}
              >
                {link.subLinks.map((subItem, subIndex) => (
                  <MenuSubItem
                    key={subIndex}
                    label={subItem.label || ''}
                    href={subItem.href || ''}
                    colorHover={colorHover}
                    onClick={() => {
                      handleMenuClose(index);
                      handleNavigate(subItem.href);
                    }}
                  />
                ))}
              </Menu>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default MenuLink;
