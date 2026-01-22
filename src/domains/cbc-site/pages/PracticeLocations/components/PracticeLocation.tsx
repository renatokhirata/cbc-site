import { Stack, Box, Container } from '@mui/material';
import ColoredTitle from '../../../components/ColoredTitle';
import useBreakpoint from '../../../hooks/useBreakpoint';

interface PracticeLocationProps {
  img: string;
  title: string;
}

const PracticeLocation = ({ img, title }: PracticeLocationProps) => {
  const isMobile = useBreakpoint('md');
  return (
    <Container maxWidth={isMobile ? false : 'xl'} disableGutters={isMobile}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 6 }}>
        <Box
          component="img"
          src={img}
          width={{ xs: '100%', md: 386 }}
          height="100%"
          alt={title}
          sx={{
            display: 'block',
            objectFit: 'cover',
          }}
        />
        <Box
          borderTop={{ xs: 0, md: 1 }}
          borderColor={'divider'}
          pt={{ xs: 3, md: 2 }}
          px={{ xs: 2, sm: 3, md: 0 }}
          flex={1}
        >
          <ColoredTitle
            title={title}
            color="typeText.default"
            fontSize={{ xs: '1.5rem', md: '2.5rem' }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default PracticeLocation;
