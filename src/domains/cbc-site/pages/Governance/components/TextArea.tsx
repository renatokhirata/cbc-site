import { Box, Typography, useTheme } from '@mui/material';

export const TextArea = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      aria-label="Seção de Governança"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={{ md: 'customBackground.paper' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={3}
        maxWidth={600}
        width="80%"
      >
        <Typography
          fontSize={{ xs: '0.95rem', md: '1.05rem', lg: '1.15rem' }}
          color={theme.palette.text.primary}
          lineHeight={1.6}
          fontWeight={400}
        >
          A Confederação Brasileira de Ciclismo reafirma seu compromisso com a
          transparência, integridade e boa gestão do esporte. Esta seção reúne
          documentos e informações que refletem os pilares que sustentam a
          atuação da entidade em todo o país.
        </Typography>
      </Box>
    </Box>
  );
};
