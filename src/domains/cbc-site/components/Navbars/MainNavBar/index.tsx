import { Box, Container, Stack } from '@mui/material';
import logoNavbar from '../../../../../assets/images/cbcLogo.svg';
import { linkService } from '../../../services';
import { useEffect, useState } from 'react';
import { INavigation } from '../../../interfaces/Link/ILink';
import MainNavBarActions from './MainNavBarActions';
import { useNavigate } from 'react-router-dom';

interface MainNavbarProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

const MainNavBar = ({ isMobile = false, onNavigate }: MainNavbarProps) => {
  const [menuItems, setMenuItems] = useState<INavigation>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrimaryLinks = async () => {
      const res = await linkService.getMenuLinks('primary');
      setMenuItems(res);
    };
    fetchPrimaryLinks();
  }, []);

  return (
    <Container maxWidth="lg" disableGutters>
      <Stack
        direction="row"
        whiteSpace={'nowrap'}
        spacing={isMobile ? 1.5 : { xs: 1, md: 4 }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent={{ xs: 'flex-start', md: 'center' }}
        flexWrap={{ xs: 'nowrap', md: 'nowrap' }}
        bgcolor="#ffffff"
        height={{ xs: 'auto', md: 80 }}
        py={{ xs: 3, md: 0 }}
        pl={{ xs: 4, md: 0 }}
        px={isMobile ? 4 : { xs: 4, sm: 4, md: 2, lg: 2 }}
        borderBottom={{ xs: '1px solid #e0e0e0', md: 'none' }}
        overflow="hidden"
      >
        {!isMobile && (
          <Box
            component="img"
            src={logoNavbar}
            alt="Logo Navbar"
            flexShrink={0}
            mr={{ xs: 1, sm: 2, md: 0 }}
            height={{ xs: 30, sm: 35, md: 35 }}
            width="auto"
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
            }}
          />
        )}

        <MainNavBarActions
          isMobile={isMobile}
          menuItems={menuItems?.navigationItems || []}
          onNavigate={onNavigate}
        />
      </Stack>
    </Container>
  );
};

export default MainNavBar;
