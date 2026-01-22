/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack } from '@mui/material';
import { Gallery } from '../../../interfaces/Media/IMedia';
import Carousel from '..';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import ArrowController from '../ArrowController';
import GalleryItem from './GalleryItem';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from '../../../hooks/useBreakpoint';

interface GalleryItemsCarouselProps {
  galleryItems: Gallery[];
}

const GalleryItemsCarousel: React.FC<GalleryItemsCarouselProps> = ({
  galleryItems = [],
}) => {
  const isMobile = useBreakpoint('md');
  const navigate = useNavigate();
  const [embla1, setEmbla1] = useState<any>(null);
  const [embla2, setEmbla2] = useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollButtons = useCallback(() => {
    if (embla1) {
      setCanScrollPrev(embla1.canScrollPrev());
      setCanScrollNext(embla1.canScrollNext());
    }
  }, [embla1]);

  const scrollToNext = useCallback(() => {
    if (embla1) embla1.scrollNext();
    if (embla2) embla2.scrollNext();
  }, [embla1, embla2]);

  const scrollToPrevious = useCallback(() => {
    if (embla1) embla1.scrollPrev();
    if (embla2) embla2.scrollPrev();
  }, [embla1, embla2]);

  useEffect(() => {
    if (!embla1) return;

    embla1.on('select', updateScrollButtons);
    embla1.on('reInit', updateScrollButtons);

    embla1.on('select', () => {
      if (embla2) {
        embla2.scrollTo(embla1.selectedScrollSnap());
      }
    });
    updateScrollButtons();

    return () => {
      embla1.off('select', updateScrollButtons);
      embla1.off('reInit', updateScrollButtons);
    };
  }, [embla1, embla2, updateScrollButtons]);

  useEffect(() => {
    if (!embla2) return;

    embla2.on('select', () => {
      if (embla1) {
        embla1.scrollTo(embla2.selectedScrollSnap());
      }
    });

    embla2.on('reInit', updateScrollButtons);
    updateScrollButtons();

    return () => {
      embla2.off('select', updateScrollButtons);
      embla2.off('reInit', updateScrollButtons);
    };
  }, [embla1, embla2, updateScrollButtons]);

  const renderMediaSlide = (item: Gallery, index: number) => {
    return (
      <Box
        key={index}
        sx={{
          width: '100%',
          maxWidth: { xs: 427, md: 467 },
          height: 'auto',
          display: 'block',
        }}
      >
        <GalleryItem
          galleryItem={item}
          onClick={() => navigate(`/modalidades/galeria/${item.id}`)}
        />
      </Box>
    );
  };

  return (
    <Stack
      spacing={4}
      pt={{ xs: 0, md: 3 }}
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'visible',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Carousel
          slideGap={20}
          withControls={false}
          withIndicators={false}
          slideSize="auto"
          align="start"
          draggable={true}
          getEmblaApi={setEmbla1}
          slides={galleryItems}
          sx={{
            width: { xs: '100%', md: 'calc(100% + 64px)' },
            marginLeft: 0,
            marginRight: { xs: 0, md: '-64px' },
            paddingRight: { xs: 0, md: '64px' },
            '& .mantine-Carousel-viewport': {
              overflow: 'visible !important',
            },
            '& .mantine-Carousel-container': {
              overflow: 'visible !important',
            },
          }}
          renderSlide={function (item: Gallery, index: number): ReactNode {
            return renderMediaSlide(item, index);
          }}
        />
      </Box>

      {!isMobile && (
        <Stack spacing={4}>
          <Box sx={{ position: 'relative' }}>
            <Carousel
              slideGap={20}
              withControls={false}
              withIndicators={false}
              slideSize="auto"
              align="start"
              draggable={true}
              getEmblaApi={setEmbla2}
              slides={galleryItems}
              sx={{
                width: 'calc(100% + 64px)',
                marginLeft: 0,
                marginRight: '-64px',
                paddingRight: '64px',
                '& .mantine-Carousel-viewport': {
                  overflow: 'visible !important',
                },
                '& .mantine-Carousel-container': {
                  overflow: 'visible !important',
                },
              }}
              renderSlide={function (item: Gallery, index: number): ReactNode {
                return renderMediaSlide(item, index);
              }}
            />
          </Box>
          {!isMobile && (
            <ArrowController
              handleScrollRight={scrollToNext}
              handleScrollLeft={scrollToPrevious}
              isAtStart={!canScrollPrev}
              isAtEnd={!canScrollNext}
              color="#1C2142"
              boxShadow={0}
              topPosition={-45}
              rightPosition={0}
            />
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default GalleryItemsCarousel;
