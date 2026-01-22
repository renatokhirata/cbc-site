/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Stack, TextField, FormHelperText } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface FirstAndLastNameProps {
  control: Control<any>;
  bgColor?: string;
  firstNameError?: string;
  lastNameError?: string;
  errorSpacing?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const FirstAndLastName = ({
  control,
  bgColor,
  firstNameError,
  lastNameError,
  errorSpacing,
}: FirstAndLastNameProps) => {
  const hasError = !!firstNameError || !!lastNameError;

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        width="100%"
        border={2}
        borderColor={hasError ? 'error.main' : 'button.default'}
        borderRadius={2}
        bgcolor={bgColor}
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              id="first-name"
              placeholder="Nome"
              value={field.value}
              onChange={field.onChange}
              fullWidth
              error={!!firstNameError}
              sx={{
                border: 'none',
                '& fieldset': { border: 'none' },
                '& .MuiFormHelperText-root': { display: 'none' },
              }}
            />
          )}
        />

        <Box
          display="flex"
          alignItems="center"
          sx={{ color: 'typeText.secondary' }}
        >
          <Divider orientation="vertical" flexItem />
        </Box>

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              id="last-name"
              placeholder="Sobrenome"
              value={field.value}
              onChange={field.onChange}
              fullWidth
              error={!!lastNameError}
              sx={{
                border: 'none',
                '& fieldset': { border: 'none' },
                '& .MuiFormHelperText-root': { display: 'none' },
              }}
            />
          )}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={errorSpacing}
        alignItems={'center'}
        ml={1}
      >
        {firstNameError && (
          <FormHelperText error sx={{ mt: 0.5 }}>
            {firstNameError}
          </FormHelperText>
        )}

        {lastNameError && (
          <FormHelperText error sx={{ mt: firstNameError ? 0 : 0.5 }}>
            {lastNameError}
          </FormHelperText>
        )}
      </Stack>
    </Box>
  );
};

export default FirstAndLastName;
