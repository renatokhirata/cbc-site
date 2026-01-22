import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { BannerProvider } from '../contexts/BannerContext';
import Footer from './Footer';
import FooterContent from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import MainNavBar from '../components/Navbars/MainNavBar';
import SupportNavBar from '../components/Navbars/SupportNavBar';
import MobileHeader from '../components/MobileHeader';

const RootLayout = () => {
  return (
    <BannerProvider>
      <ScrollToTop />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <MobileHeader>
          <SupportNavBar />
          <MainNavBar />
        </MobileHeader>

        <Outlet />

        <Footer>
          <FooterContent />
        </Footer>
      </Box>
    </BannerProvider>
  );
};

export default RootLayout;
