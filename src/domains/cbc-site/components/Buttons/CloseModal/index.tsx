import { Button, ButtonProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useBreakpoint from '../../../hooks/useBreakpoint';

export interface CloseModalProps extends ButtonProps {
  onClick: () => void;
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  withBorder?: boolean;
}

const CloseModalButton: React.FC<CloseModalProps> = ({
  position,
  onClick,
  top,
  right,
  bottom,
  left,
  withBorder,
  ...props
}) => {
  const isMobile = useBreakpoint('md');
  if (isMobile) {
    return (
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          minWidth: 0,
          width: 40,
          height: 40,
          p: 0,
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '50%',
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: position,
          top: top,
          right: right,
          bottom: bottom,
          left: left,
          zIndex: 10,
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
        {...props}
      >
        <CloseIcon sx={{ width: 24, height: 24 }} />
      </Button>
    );
  }
  return (
    <Button
      onClick={onClick}
      startIcon={<CloseIcon sx={{ width: { xs: '24px', sm: '32px' } }} />}
      variant="contained"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '25px',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 400,
        padding: '6px 16px',
        position: position,
        border: withBorder ? '1px solid #000' : 'none',
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)',
        '&:hover': {
          backgroundColor: '#f5f5f5',
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)',
        },
        zIndex: 10,
      }}
      {...props}
    >
      {'Fechar'}
    </Button>
  );
};

export default CloseModalButton;
