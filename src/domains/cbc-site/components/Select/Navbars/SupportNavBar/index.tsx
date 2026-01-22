import { Stack, Box, Container } from '@mui/material';

import { useEffect, useState } from 'react';
import { linkService } from '../../../../services';
import { INavigation } from '../../../../interfaces/Link/ILink';
import SocialIconsSection from '../../../Navbars/SupportNavBar/SocialIconsSection';
import SupportNavBarActions from '../../../Navbars/SupportNavBar/SupportNavBarActions';

interface TopbarProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}
const SupportNavBar = ({ isMobile = false, onNavigate }: TopbarProps) => {
  const [menuItems, setMenuItems] = useState<INavigation>();

  useEffect(() => {
    const fetchTertiaryLinks = async () => {
      const res = await linkService.getMenuLinks('tertiary');
      setMenuItems(res);
    };
    fetchTertiaryLinks();
  }, []);

  return (
    <Box bgcolor="customBackground.tertiary" color="typeText.primary">
      {isMobile ? (
        <Stack
          direction="row"
          height={isMobile ? 'auto' : 50}
          alignItems={isMobile ? 'flex-start' : 'center'}
          justifyContent="center"
          py={isMobile ? 3 : 0}
          width="100%"
          pl={isMobile ? 4 : 0}
          pr={isMobile ? 4 : 0}
        >
          <SupportNavBarActions
            menuItems={menuItems?.navigationItems || []}
            onNavigate={onNavigate}
          />
          {!isMobile && <SocialIconsSection />}
        </Stack>
      ) : (
        <Container maxWidth={isMobile ? false : 'xl'}>
          <Stack
            direction="row"
            height={isMobile ? 'auto' : 50}
            alignItems={isMobile ? 'flex-start' : 'center'}
            justifyContent="center"
            py={isMobile ? 3 : 0}
            width="100%"
            pl={isMobile ? 4 : 0}
            pr={isMobile ? 4 : 0}
          >
            <SupportNavBarActions
              menuItems={menuItems?.navigationItems || []}
              onNavigate={onNavigate}
            />
            {!isMobile && <SocialIconsSection />}
          </Stack>
        </Container>
      )}
    </Box>
  );
};

export default SupportNavBar;
