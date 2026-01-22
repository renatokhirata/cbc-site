import { Modal as MuiModal, Box, Backdrop } from '@mui/material';
import CloseModalButton from '../Buttons/CloseModal';
import useBreakpoint from '../../hooks/useBreakpoint';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  withBorder?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  children,
  onClose,
  withBorder = false,
}) => {
  const isMobile = useBreakpoint('md');
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
      // re-enable scroll lock so background page doesn't scroll while modal is open
      disableScrollLock={false}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: 'rgba(37, 50, 123, 0.67)' },
        },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw',
          maxWidth: '90vw',
          height: '90vh',
          overflow: 'hidden',

          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CloseModalButton
          onClick={onClose}
          position="absolute"
          top={isMobile ? '20px' : '40px'}
          right={isMobile ? '20px' : '40px'}
          withBorder={withBorder}
        />
        {/* children (modal content) should fill the box; inner content can scroll independently */}
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
