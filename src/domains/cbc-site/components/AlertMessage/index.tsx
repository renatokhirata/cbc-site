import { Alert, type AlertColor, Snackbar } from '@mui/material';

interface AlertMessageProps {
  children: string;
  open: boolean;
  onClose: () => void;
  severity?: AlertColor;
  variant?: 'filled' | 'standard' | 'outlined';
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

const AlertMessage = ({
  children,
  open,
  onClose,
  severity,
  variant,
  vertical = 'top',
  horizontal = 'right',
}: AlertMessageProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: '100%' }}
        variant={variant}
      >
        {children}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
