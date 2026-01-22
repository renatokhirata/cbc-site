import { Stack, TextField, FormHelperText } from '@mui/material';

interface DepartmentFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

const Email = ({ value, onChange, disabled, error }: DepartmentFieldProps) => (
  <Stack spacing={1} width="100%">
    <TextField
      fullWidth
      placeholder="E-mail"
      variant="outlined"
      type="email"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: 2,
            borderWidth: '2px',
            borderColor: 'typeText.secondary',
          },
          '&:hover fieldset': {
            borderColor: 'typeText.secondary',
          },
        },
      }}
      error={!!error}
    />
    {error && (
      <FormHelperText error sx={{ ml: 0 }}>
        {error}
      </FormHelperText>
    )}
  </Stack>
);

export default Email;
