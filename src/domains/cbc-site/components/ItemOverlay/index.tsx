import { Box } from '@mui/material';

interface ItemOverlayProps {
  children: React.ReactNode;
  handleOpenModal?: () => void;
  onClick?: () => void;
}

const ItemOverlay: React.FC<ItemOverlayProps> = ({
  children,
  handleOpenModal,
  onClick,
}) => {
  return (
    <Box
      sx={{
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.08)',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'opacity 0.3s',
      }}
      onClick={(e) => {
        if (handleOpenModal) {
          e.stopPropagation();
          handleOpenModal();
        }
        if (onClick) {
          e.stopPropagation();
          onClick();
        }
      }}
    >
      {children}
    </Box>
  );
};

export default ItemOverlay;
