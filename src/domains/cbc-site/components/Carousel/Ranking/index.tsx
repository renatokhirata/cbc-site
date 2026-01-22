import { Box, Container, Stack, Typography } from '@mui/material';
import Carousel from '..';
import useBreakpoint from '../../../hooks/useBreakpoint';
import ColoredTitle from '../../ColoredTitle';

interface RankingCarouselProps {
  titleRank: string;
  slides: { title: string; date: string; athleteName: string[] }[];
}

const RankingCarouselData: RankingCarouselProps = {
  titleRank: 'Ranking dos Atletas',
  slides: [
    {
      title: 'Super BMX regional',
      date: '2025-09-19',
      athleteName: [
        'Nome do Atleta 1',
        'Nome do Atleta 4',
        'Nome do Atleta 5',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
      ],
    },
    {
      title: 'Super BMX regional',
      date: '2025-03-25',
      athleteName: [
        'Nome do Atleta 1',
        'Nome do Atleta 4',
        'Nome do Atleta 5',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
      ],
    },
    {
      title: 'Super BMX regional',
      date: '2025-04-19',
      athleteName: [
        'Nome do Atleta 1',
        'Nome do Atleta 4',
        'Nome do Atleta 5',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
        'Nome do Atleta 6',
      ],
    },
  ],
};

const RankingCarousel = () => {
  const isMobile = useBreakpoint('sm');
  if (!isMobile) return null;

  return (
    <Box bgcolor="customBackground.blue" py={4}>
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <ColoredTitle
            title={RankingCarouselData.titleRank}
            color={'title.primary'}
          />
          <Carousel
            loop
            align="start"
            slidesToScroll={1}
            slides={RankingCarouselData.slides}
            controlsOffset="xs"
            controlSize={35}
            withControls
            styles={{
              control: {
                backgroundColor: '#1976D2',
                '&:hover': {
                  backgroundColor: '#1565C0',
                },
              },
            }}
            renderSlide={(slides) => (
              <Box height={500} borderRadius={2} bgcolor="background.paper">
                <Stack
                  direction="row"
                  bgcolor="customBackground.secondary"
                  p={4}
                  borderRadius={2}
                  justifyContent="center"
                >
                  <Typography variant="h6" color="typeText.primary">
                    {slides.title}
                  </Typography>
                </Stack>

                <Stack
                  alignContent="center"
                  alignItems="start"
                  height={'100%'}
                  px={6}
                  pt={4}
                >
                  <Typography
                    variant="body2"
                    color="typeText.default"
                    fontWeight={600}
                    mb={2}
                  >
                    Publicado em: {slides.date}
                  </Typography>

                  <Box
                    component="ol"
                    sx={{ padding: 0, margin: 0, listStyle: 'none' }}
                  >
                    {slides.athleteName.map((name, index) => (
                      <Box
                        component="li"
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="typeText.default"
                          fontWeight={600}
                          sx={{ minWidth: '20px', mr: 2 }}
                        >
                          {index + 1}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="typeText.default"
                          fontWeight={400}
                        >
                          {name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    bottom={0}
                    left={0}
                    borderRadius={4}
                    sx={{
                      py: 2,
                      pt: 28,
                      position: 'absolute',
                      backgroundImage:
                        'linear-gradient(to top, #f5f5f5, transparent)',
                      zIndex: 1000,
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="typeText.secondary"
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                      }}
                    >
                      Ver Ranking completo
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            )}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default RankingCarousel;
