import { Stack, TextField, Typography, FormHelperText } from '@mui/material';

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}
const Phone = ({ value, onChange, disabled, error }: PhoneFieldProps) => (
  <Stack spacing={1} width="100%">
    <Typography
      variant="body2"
      color="typeText.tertiary"
      fontWeight={700}
      fontSize={'1rem'}
    >
      Contato
    </Typography>
    <TextField
      fullWidth
      placeholder="Telefone"
      variant="outlined"
      type="tel"
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

export default Phone;
