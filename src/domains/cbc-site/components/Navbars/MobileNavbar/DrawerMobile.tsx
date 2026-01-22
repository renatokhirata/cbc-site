import { Drawer, Stack } from '@mui/material';
interface MobileProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const DrawerMobile: React.FC<MobileProps> = ({ open, onClose, children }) => {
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '90vw', sm: '70vw' },
          height: 'calc(100vh - 69px)',
          top: '69px',
          maxWidth: 'none',
          maxHeight: 'none',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none !important',
          bgcolor: 'unset',
          border: 'none',
        },
      }}
      open={open}
      onClose={onClose}
    >
      <Stack
        sx={{
          flex: 1,
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: 0,
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        {children}
      </Stack>
    </Drawer>
  );
};

export default DrawerMobile;
