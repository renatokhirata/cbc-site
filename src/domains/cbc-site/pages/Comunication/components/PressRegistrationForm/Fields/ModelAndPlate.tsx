import {
  Box,
  Divider,
  Stack,
  TextField,
  Typography,
  FormHelperText,
} from '@mui/material';

interface ModelAndPlateProps {
  model: string;
  plate: string;
  onModelChange: (value: string) => void;
  onPlateChange: (value: string) => void;
  modelError?: string;
  plateError?: string;
}

const ModelAndPlate = ({
  model,
  plate,
  onModelChange,
  onPlateChange,
  modelError,
  plateError,
}: ModelAndPlateProps) => {
  const hasError = !!modelError || !!plateError;

  return (
    <Stack spacing={1} width="100%">
      <Typography
        variant="body2"
        color="typeText.tertiary"
        fontWeight={700}
        fontSize={'1rem'}
      >
        Veículo de imprensa
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
          id="model"
          placeholder="Modelo"
          value={model}
          onChange={(e) => onModelChange(e.target.value)}
          fullWidth
          error={!!modelError}
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
          id="plate"
          placeholder="Placa"
          value={plate}
          onChange={(e) => onPlateChange(e.target.value)}
          fullWidth
          error={!!plateError}
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
        {modelError && (
          <FormHelperText error sx={{ ml: 2, mt: 0.5 }}>
            {modelError}
          </FormHelperText>
        )}

        {plateError && (
          <FormHelperText error sx={{ ml: 2, mt: modelError ? 0 : 0.5 }}>
            {plateError}
          </FormHelperText>
        )}
      </Stack>
    </Stack>
  );
};

export default ModelAndPlate;
