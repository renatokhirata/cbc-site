import { Box, Typography, Stack } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';
import SocialIcons from '../../SocialIcons';

const ContactInfo = () => {
  return (
    <Box>
      <ColoredTitle title="Contatos" color="title.secondary" />
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: 'typeText.default',
              fontWeight: 600,
              fontSize: '1.4rem',
            }}
          >
            Assuntos Gerais
          </Typography>

          <Box
            component="a"
            href="mailto:imprensa@cbc.esp.br"
            sx={{
              color: 'typeText.default',
              textDecoration: 'underline',
              fontSize: '1rem',
            }}
          >
            imprensa@cbc.esp.br
          </Box>
        </Box>

        <Stack spacing={0}>
          <Typography
            variant="h6"
            sx={{
              color: 'typeText.default',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            Assessor de Comunicação
          </Typography>

          <Typography
            sx={{
              color: 'typeText.default',
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            Wesley Kestrel
          </Typography>

          <Typography
            sx={{
              color: 'typeText.default',
              fontSize: '1rem',
            }}
          >
            (61) 3585.1051 / 99123.2212
          </Typography>

          <Box
            component="a"
            href="mailto:wesley@cbc.esp.br"
            sx={{
              color: 'typeText.default',
              textDecoration: 'underline',
              fontSize: '1rem',
            }}
          >
            wesley@cbc.esp.br
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography
            variant="h6"
            sx={{
              color: 'typeText.default',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            Redes sociais
          </Typography>

          <SocialIcons blue={true} size={{ xs: 28, md: 34 }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
