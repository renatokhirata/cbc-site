import { Checkbox, Stack, Typography, FormHelperText } from '@mui/material';
import { ChangeEvent } from 'react';

interface NotRobotProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  error?: string;
}

const NotRobot = ({ value, onChange, disabled, error }: NotRobotProps) => (
  <Stack spacing={1} width="100%">
    <Typography
      variant="body2"
      color="typeText.tertiary"
      fontWeight={700}
      fontSize={'1rem'}
    >
      Verificação
    </Typography>
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.5}
      sx={{
        backgroundColor: 'customBackground.default',
        borderRadius: 2,
        padding: 1.5,
      }}
    >
      <Checkbox
        checked={value}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        sx={{
          color: 'button.default',
          padding: 0,
          '& .MuiSvgIcon-root': {
            fontSize: 32,
          },
        }}
      />
      <Typography
        sx={{
          fontSize: '1rem',
          color: '#000000',
          cursor: disabled ? 'default' : 'pointer',
        }}
        onClick={() => !disabled && onChange(!value)}
      >
        Não sou um robô
      </Typography>
    </Stack>
    {error && (
      <FormHelperText error sx={{ ml: 0 }}>
        {error}
      </FormHelperText>
    )}
  </Stack>
);

export default NotRobot;
