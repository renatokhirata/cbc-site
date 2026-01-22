/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, FormHelperText, Stack, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface EmailProps {
  control: Control<any>;
  bgColor?: string;
  error?: string;
}

export const Email = ({ control, bgColor, error }: EmailProps) => (
  <Box flex={1}>
    <Stack bgcolor={bgColor} borderRadius={2}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            placeholder="E-mail"
            variant="outlined"
            type="email"
            value={field.value}
            onChange={field.onChange}
            error={!!error}
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
    </Stack>

    <Stack direction="row" alignItems={'center'} ml={1}>
      {error && (
        <FormHelperText error sx={{ mt: 0.5 }}>
          {error}
        </FormHelperText>
      )}
    </Stack>
  </Box>
);

export default Email;
