import { Stack, Box } from '@mui/material';
import ColoredTitle from '../ColoredTitle';
import SocialIcons from '../SocialIcons';

const ServiceChannel = () => {
  return (
    <Stack spacing={2}>
      <ColoredTitle
        color="typeText.tertiary"
        title="Canais de atendimento: "
        fontSize={{ xs: '1.5rem', md: '2.25rem' }}
      />

      <Box>
        <ColoredTitle
          color="typeText.default"
          title="+55(43) 3327-3232"
          fontSize={{ xs: '1.25rem', md: '2rem' }}
        />

        <ColoredTitle
          color="typeText.default"
          title="cbc@cbc.esp.br"
          fontSize={{ xs: '1.05rem', md: '1.8rem' }}
        />
      </Box>

      <ColoredTitle
        color="typeText.tertiary"
        title="Redes Sociais "
        fontSize={{ xs: '1.5rem', md: '2.25rem' }}
      />
      <SocialIcons blue size={{ xs: 24, md: 40 }} />
    </Stack>
  );
};

export default ServiceChannel;
