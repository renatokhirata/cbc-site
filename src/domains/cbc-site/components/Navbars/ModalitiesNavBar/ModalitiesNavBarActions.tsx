import { Box, Stack } from '@mui/material';
import { INavigationItem } from '../../../interfaces/Link/ILink';
import { CustomLink } from '../../Links';

interface ModalitiesNavBarActionsProps {
  item: INavigationItem;
  onNavigate?: () => void;
}

const ModalitiesNavBarActions = ({ item }: ModalitiesNavBarActionsProps) => {
  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <CustomLink
          to={item.href || ''}
          label={item.label || ''}
          hoverColor="linkHover.primary"
          color="link.primary"
        />
      </Stack>
    </Box>
  );
};

export default ModalitiesNavBarActions;
