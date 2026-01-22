import { Box } from '@mui/material';
import SupportNavBar from '../SupportNavBar';
import MainNavBar from '../MainNavBar';
import HeaderMobile from './HeaderMobile';
import DrawerMobile from './DrawerMobile';
import { useNavigate } from 'react-router-dom';

interface MobileProps {
  open: boolean;
  onOpen: () => void;
  onClick: () => void;
}

const MobileNavbar: React.FC<MobileProps> = ({ open, onOpen, onClick }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginTop: '69px' }}>
      <HeaderMobile
        onOpen={onOpen}
        onClose={onClick}
        isOpen={open}
        onClick={() => navigate('/')}
      />
      <DrawerMobile open={open} onClose={onClick}>
        <SupportNavBar isMobile onNavigate={onClick} />
        <MainNavBar isMobile onNavigate={onClick} />
      </DrawerMobile>
    </Box>
  );
};

export default MobileNavbar;
