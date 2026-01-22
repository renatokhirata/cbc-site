/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface DepartmentProps {
  control: Control<any>;
  disabled?: boolean;
  error?: string;
}

export const Department = ({ control, disabled, error }: DepartmentProps) => (
  <Controller
    name="department"
    control={control}
    render={({ field }) => (
      <TextField
        fullWidth
        placeholder="Departamento"
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

export default Department;
