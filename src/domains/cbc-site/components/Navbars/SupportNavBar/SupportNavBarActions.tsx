import { Stack } from '@mui/material';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { INavigationItem } from '../../../interfaces/Link/ILink';
import { CustomLink } from '../../Links';

interface SupportNavBarActionsProps {
  menuItems: INavigationItem[];
  onNavigate?: () => void;
}

const SupportNavBarActions: React.FC<SupportNavBarActionsProps> = ({
  menuItems,
  onNavigate,
}) => {
  const isMobile = useBreakpoint(`md`);

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      spacing={isMobile ? 2.5 : 4}
      flex={1}
      alignItems={isMobile ? 'flex-start' : 'center'}
      py={isMobile ? 0.5 : 0}
    >
      {menuItems.map((item) => (
        <CustomLink
          key={item.label}
          to={item.href || ''}
          label={item.label || ''}
          hoverColor="linkHover.primary"
          color="link.primary"
          onNavigate={onNavigate}
        />
      ))}
    </Stack>
  );
};

export default SupportNavBarActions;
