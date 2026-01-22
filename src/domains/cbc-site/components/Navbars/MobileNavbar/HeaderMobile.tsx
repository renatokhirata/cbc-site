import { Stack, Box, IconButton } from '@mui/material';
import hanburgerIcon from '../../../../../assets/icons/hamburgerIcon.svg';
import logoCbc from '../../../../../assets/images/cbcLogo.svg';
import { Close } from '@mui/icons-material';

interface HeaderMobileProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen?: boolean;
  onClick: () => void;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({
  onOpen,
  onClose,
  isOpen,
  onClick,
}) => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={69}
        px={4}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 1300,
        }}
      >
        <Box
          component="img"
          src={logoCbc}
          alt="Logo Navbar"
          flexShrink={0}
          mr={{ xs: 1, sm: 2, md: 0 }}
          height={36}
          width="auto"
          onClick={onClick}
        />
        {!isOpen && (
          <IconButton
            onClick={onOpen}
            size="large"
            aria-label="open drawer"
            edge="end"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: '2rem', fontWeight: 'bold' },
            }}
          >
            <Box component="img" src={hanburgerIcon} alt="Logo CBC" />
          </IconButton>
        )}

        {isOpen && (
          <IconButton
            onClick={onClose}
            size="large"
            aria-label="close drawer"
            edge="end"
            color="inherit"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: '2.5rem', fontWeight: 'bold' },
            }}
          >
            <Close />
          </IconButton>
        )}
      </Stack>
    </>
  );
};

export default HeaderMobile;
