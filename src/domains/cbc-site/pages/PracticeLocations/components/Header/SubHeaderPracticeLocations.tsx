import { Stack, Box, Container } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import practiceLocationsIcon from '../../../../../../assets/images/practiceLocations.svg';

const SubHeaderPracticeLocations = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      bgcolor="customBackground.tertiary"
      height={{ xs: 120, md: 200 }}
      alignItems="center"
    >
      <Container maxWidth="xl" sx={{ display: 'flex', gap: 4 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: -1, md: 2 }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Box
            component="img"
            src={practiceLocationsIcon}
            alt="Ícone Locais de prática"
            width={{ xs: 50, md: 100 }}
            height={{ xs: 50, md: 100 }}
          />

          <Stack spacing={{ xs: -1.5, md: -2 }}>
            <ColoredTitle
              title="LOCAIS DE PRÁTICA"
              color="typeText.primary"
              fontSize={{ xs: '2.125rem', md: '60px' }}
            />
            <ColoredTitle
              title="Estrada"
              color="typeText.primary"
              fontSize={{ xs: '1.3rem', md: '2.125rem' }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default SubHeaderPracticeLocations;
