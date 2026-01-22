import { Box } from '@mui/material';
import closeIcon from '../../../../assets/icons/closeIcon.png';

interface CloseDrawerButtonProps {
  onClick: () => void;
}

const CloseDrawerButton: React.FC<CloseDrawerButtonProps> = ({ onClick }) => {
  return (
    <>
      <Box
        component="img"
        src={closeIcon}
        sx={{
          position: 'absolute',
          top: 90,
          right: 30,
          border: '1px solid #000',
          width: '20px',
          '&:hover': { transform: 'scale(1.05)' },
          cursor: 'pointer',
          zIndex: 1301,
        }}
        onClick={onClick}
      />
    </>
  );
};

export default CloseDrawerButton;
