import { Stack } from '@mui/material';
import { INavigationItem } from '../../../interfaces/Link/ILink';
import { CustomLink } from '../../Links';

interface MainNavBarActionsProps {
  isMobile: boolean;
  menuItems: INavigationItem[];
  onNavigate?: () => void;
}

const MainNavBarActions: React.FC<MainNavBarActionsProps> = ({
  isMobile,
  menuItems,
  onNavigate,
}) => {
  return (
    <Stack
      justifyContent={isMobile ? 'flex-start' : 'space-between'}
      flexGrow={1}
      width={'100%'}
      direction={isMobile ? 'column' : 'row'}
      spacing={{ xs: 2.5, md: 0 }}
      alignItems={isMobile ? 'flex-start' : 'flex-start'}
      flex={1}
      flexWrap={isMobile ? 'nowrap' : 'wrap'}
      overflow="hidden"
    >
      {menuItems.map((link, index) => {
        return (
          <CustomLink
            key={index}
            to={link.href || ''}
            label={link.label || ''}
            color={'typeText.default'}
            hoverColor="linkHover.secondary"
            subLinks={link.subLinks}
            isMobile={isMobile}
            onNavigate={onNavigate}
          />
        );
      })}
    </Stack>
  );
};

export default MainNavBarActions;
