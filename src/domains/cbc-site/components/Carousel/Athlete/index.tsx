import { Box } from '@mui/material';
import Carousel from '..';
import { Image } from '@mantine/core';
import athleteCarouselImage from '../../../../../assets/images/carouselCards/athleteCarousel.svg';
import useBreakpoint from '../../../hooks/useBreakpoint';
import ColoredTitle from '../../ColoredTitle';

interface AthleteSlide {
  image: string;
  title: string;
}

const athleteSlides: AthleteSlide[] = [
  {
    title: 'Atletas e Equipes da BMX',
    image: athleteCarouselImage,
  },
  {
    title: 'Slide 2',
    image: athleteCarouselImage,
  },
  {
    title: 'Slide 3',
    image: athleteCarouselImage,
  },
];

const AthleteCarousel = () => {
  const isMobile = useBreakpoint('sm');
  if (!isMobile) return null;

  return (
    <>
      <Carousel
        loop
        align="start"
        slidesToScroll={1}
        slides={athleteSlides}
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
        renderSlide={(slide) => (
          <Box justifyContent="center" position="relative">
            <ColoredTitle title={slide.title} color={'title.secondary'} />
            <Image
              src={slide.image}
              alt="Athlete Image carousel"
              radius="md"
              mt={20}
            />
          </Box>
        )}
      />
    </>
  );
};

export default AthleteCarousel;
