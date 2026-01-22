/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface SubjectProps {
  control: Control<any>;
  disabled?: boolean;
  error?: string;
}

export const Subject = ({ control, disabled, error }: SubjectProps) => (
  <Controller
    name="subject"
    control={control}
    render={({ field }) => (
      <TextField
        fullWidth
        placeholder="Assunto"
        variant="outlined"
        value={field.value}
        disabled={disabled}
        onChange={field.onChange}
        error={!!error}
        helperText={error}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: 2,
              borderWidth: '2px',
              borderColor: 'button.default',
            },
            '&:hover fieldset': {
              borderColor: 'button.default',
            },
          },
        }}
      />
    )}
  />
);

export default Subject;
