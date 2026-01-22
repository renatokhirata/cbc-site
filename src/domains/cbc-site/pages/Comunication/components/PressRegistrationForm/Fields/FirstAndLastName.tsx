import {
  Box,
  Divider,
  Stack,
  TextField,
  Typography,
  FormHelperText,
} from '@mui/material';

interface FirstAndLastNameProps {
  firstName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  firstNameError?: string;
  lastNameError?: string;
}

const FirstAndLastName = ({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  firstNameError,
  lastNameError,
}: FirstAndLastNameProps) => {
  const hasError = !!firstNameError || !!lastNameError;

  return (
    <Stack spacing={1} width="100%">
      <Typography
        variant="body2"
        color="typeText.tertiary"
        fontWeight={700}
        fontSize={'1rem'}
      >
        Informações básicas
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        width="100%"
        border={2}
        borderColor={hasError ? 'error.main' : 'typeText.secondary'}
        borderRadius={2}
      >
        <TextField
          id="first-name"
          placeholder="Nome"
          value={firstName}
          onChange={(e) => onFirstNameChange(e.target.value)}
          fullWidth
          error={!!firstNameError}
          sx={{
            border: 'none',
            '& fieldset': { border: 'none' },
            '& .MuiFormHelperText-root': { display: 'none' },
          }}
        />

        <Box
          display="flex"
          alignItems="center"
          sx={{ color: 'typeText.secondary' }}
        >
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ borderColor: 'typeText.secondary' }}
          />
        </Box>

        <TextField
          id="last-name"
          placeholder="Sobrenome"
          value={lastName}
          onChange={(e) => onLastNameChange(e.target.value)}
          fullWidth
          error={!!lastNameError}
          sx={{
            border: 'none',
            '& fieldset': { border: 'none' },
            '& .MuiFormHelperText-root': { display: 'none' },
          }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 10, sm: 10, md: 6, lg: 16 }}
        alignItems={'center'}
      >
        {firstNameError && (
          <FormHelperText error sx={{ ml: 2, mt: 0.5 }}>
            {firstNameError}
          </FormHelperText>
        )}

        {lastNameError && (
          <FormHelperText error sx={{ ml: 2, mt: firstNameError ? 0 : 0.5 }}>
            {lastNameError}
          </FormHelperText>
        )}
      </Stack>
    </Stack>
  );
};

export default FirstAndLastName;
