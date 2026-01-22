import { CarouselSlide, Carousel as MantineCarousel } from '@mantine/carousel';
import { ReactNode } from 'react';
import { CarouselProps as CarouselNativeProps } from '@mantine/carousel';
import { Box, BoxProps } from '@mui/material';

interface CarouselProps<T> extends CarouselNativeProps {
  slides: T[];
  renderSlide: (item: T, index: number) => ReactNode;
  loop?: boolean;
  draggable?: boolean;
  slidesToScroll?: number;
  align?: 'start' | 'center' | 'end';
  controlsProps?: {
    size?: number;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
  };
  sx?: BoxProps['sx'];
}

const Carousel = <T,>({
  slides,
  renderSlide,
  loop,
  draggable,
  slidesToScroll,
  align = 'center',
  sx,
  ...props
}: CarouselProps<T>) => {
  const validSlides = Array.isArray(slides) ? slides : [];

  return (
    <Box sx={sx}>
      <MantineCarousel
        {...props}
        emblaOptions={{
          loop: loop,
          align: align,
          slidesToScroll: slidesToScroll,
          dragFree: draggable,
        }}
      >
        {validSlides.map((slide, index) => (
          <CarouselSlide key={index}>{renderSlide(slide, index)}</CarouselSlide>
        ))}
      </MantineCarousel>
    </Box>
  );
};

export default Carousel;
