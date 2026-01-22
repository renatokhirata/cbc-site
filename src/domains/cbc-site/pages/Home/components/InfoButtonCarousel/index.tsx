/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack } from '@mui/material';
import { ReactNode, useCallback, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import ArrowController from '../../../../components/Carousel/ArrowController';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import Carousel from '../../../../components/Carousel';
import InfoButton from '../../../../components/Buttons/InfoButton';

interface InfoButtonCarouselProps {
  infoButtonItems: {
    title: string;
    subtitle: string;
    icon: string;
    color: 'primary' | 'secondary' | 'tertiary' | 'default';
    href?: string;
  }[];
  onClick?: (item: InfoButtonCarouselProps['infoButtonItems'][number]) => void;
}

const InfoButtonCarousel: React.FC<InfoButtonCarouselProps> = ({
  infoButtonItems = [],
  onClick,
}) => {
  const isMobile = useBreakpoint('md');
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

  const renderButtonSlide = (
    item: InfoButtonCarouselProps['infoButtonItems'][number],
    index: number,
  ) => {
    return (
      <Box
        key={index}
        sx={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        <InfoButton
          title={item.title}
          subtitle={item.subtitle}
          icon={
            <Box
              component={'img'}
              src={item.icon}
              width={'64px'}
              height={'64px'}
            />
          }
          color={item.color}
          onClick={() => onClick?.(item)}
          isCarouselItem={true}
        />
      </Box>
    );
  };

  const half = Math.ceil(infoButtonItems.length / 2);
  const topItems = infoButtonItems.slice(0, half);
  const bottomItems = infoButtonItems.slice(half);

  return (
    <>
      <Stack
        spacing={4}
        mt={{ xs: 0, md: 16 }}
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
            align="start"
            draggable={true}
            getEmblaApi={setEmbla1}
            slides={isMobile ? infoButtonItems : topItems}
            slideSize={isMobile ? '100%' : '33.333%'}
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
            renderSlide={function (
              item: InfoButtonCarouselProps['infoButtonItems'][number],
              index: number,
            ): ReactNode {
              return renderButtonSlide(item, index);
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
                slideSize={isMobile ? '100%' : '33.333%'}
                align="start"
                draggable={true}
                getEmblaApi={setEmbla2}
                slides={bottomItems}
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
                renderSlide={function (
                  item: InfoButtonCarouselProps['infoButtonItems'][number],
                  index: number,
                ): ReactNode {
                  return renderButtonSlide(item, index);
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
                topPosition={-65}
                rightPosition={0}
              />
            )}
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default InfoButtonCarousel;
