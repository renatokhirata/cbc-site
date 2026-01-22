/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface MainButtonProps extends ButtonProps {
  label?: string;
  onClick?: () => void;
  isDark?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const MainButton = ({
  label,
  onClick,
  isDark = false,
  startIcon,
  endIcon,
  children,
  ...muiProps
}: MainButtonProps) => {
  const { sx, ...restProps } = muiProps as any;
  const defaultSx = {
    px: 2,
    py: 1,
    textTransform: 'unset',
    borderRadius: 2,
    backgroundColor: isDark ? 'button.default' : 'transparent',
    flexShrink: 0,
    border: '1px solid #2578A8',
    color: isDark ? 'typeText.primary' : 'button.default',
    justifyContent: 'center',
    fontSize: '16px',
  };

  const mergedSx = [defaultSx]
    .concat(Array.isArray(sx) ? sx : [sx])
    .filter(Boolean) as any;

  return (
    <MuiButton
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      sx={mergedSx}
      {...restProps}
      onClick={onClick}
    >
      {children || label}
    </MuiButton>
  );
};

export default MainButton;
