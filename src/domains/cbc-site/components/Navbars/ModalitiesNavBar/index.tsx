import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { linkService } from '../../../services';
import { INavigation } from '../../../interfaces/Link/ILink';
import ModalitiesNavBarActions from './ModalitiesNavBarActions';

interface ModalitiesNavBarProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

const ModalitiesNavBar = ({
  isMobile = false,
  onNavigate,
}: ModalitiesNavBarProps) => {
  const [items, setItems] = useState<INavigation | undefined>(undefined);

  useEffect(() => {
    const fetchSubItems = async () => {
      try {
        const response = await linkService.getMenuLinks('secondary');
        setItems(response);
      } catch (error) {
        console.error('Error fetching sub-items:', error);
      }
    };

    fetchSubItems();
  }, []);

  return (
    <Stack
      direction="row"
      spacing={isMobile ? 3 : 4}
      bgcolor="#1C1C3A"
      py={isMobile ? 3 : 0}
      px={isMobile ? 3 : 0}
      alignItems={isMobile ? 'flex-start' : 'center'}
      justifyContent={isMobile ? 'flex-start' : 'center'}
      height={isMobile ? 'auto' : 88}
      sx={{
        transition: 'height 0.3s ease',
      }}
    >
      {items?.navigationItems?.map((item, index) => (
        <ModalitiesNavBarActions
          key={index}
          item={item}
          onNavigate={onNavigate}
        />
      ))}
    </Stack>
  );
};

export default ModalitiesNavBar;
