/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControlLabel, Checkbox, FormHelperText, Box } from '@mui/material';
import { ChangeEvent } from 'react';
import { Control, Controller } from 'react-hook-form';

interface NotRobotProps {
  control: Control<any>;
  error?: string;
  withBorder?: boolean;
}

export const NotRobot = ({ control, error, withBorder }: NotRobotProps) => (
  <Controller
    name="notRobot"
    control={control}
    render={({ field }) => (
      <Box width={'100%'}>
        <FormControlLabel
          control={
            <Checkbox
              checked={field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.checked)
              }
              sx={{
                width: '20px',
                color: 'primary.main',
                height: '20px',
                m: '0px 8px 0px 0px',
              }}
            />
          }
          label="Não sou um robô"
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '14px',
            },
            width: '100%',
            backgroundColor: 'customBackground.default',
            padding: '24px 16px',
            borderRadius: 2,
            margin: 0,
            borderBottom: withBorder ? '4px solid' : 'none',
            borderColor: withBorder ? 'button.default' : 'transparent',
          }}
        />
        {error && (
          <FormHelperText error sx={{ ml: 2, mt: 0.5 }}>
            {error}
          </FormHelperText>
        )}
      </Box>
    )}
  />
);

export default NotRobot;
