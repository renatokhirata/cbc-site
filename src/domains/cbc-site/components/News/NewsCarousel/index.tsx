import { Carousel } from '@mantine/carousel';
import { Box, Typography } from '@mui/material';
import { MediaResume } from '../../../interfaces/Media/IMedia';

interface NewsCarouselProps {
  images: MediaResume[];
}

export function NewsCarousel({ images }: NewsCarouselProps) {
  return (
    <Carousel
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: 'center',
      }}
      styles={{
        control: {
          color: '#fff',
          width: 40,
          height: 40,
          padding: '0.4rem',
          backgroundColor: '#217EFD',
          borderRadius: '50%',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
          '&:hover': {
            backgroundColor: '#217EFD',
          },
        },
      }}
    >
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <Box
            component="img"
            src={image.url}
            width="100%"
            height={'100%'}
            alt={image.alt}
            maxHeight={'520px'}
            sx={{
              objectFit: 'cover',
              backgroundColor: 'customBackground.dark',
              borderRadius: 2,
            }}
          />
          <Typography variant="body2" color="typeText.description">
            {image.alt}
          </Typography>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
