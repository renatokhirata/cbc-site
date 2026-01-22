import { Box } from '@mui/material';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from '..';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { INavigation } from '../../../interfaces/Link/ILink';
import ArrowController from '../ArrowController';
import CarouselCard from '../CarouselCard';

interface CarouselItemType {
  id: number;
  label: string;
  href: string;
  image: string;
  icon: string;
}

interface ModalitiesCarouselProps {
  modalityItems?: INavigation[];
}

const ModalitiesCarousel: React.FC<ModalitiesCarouselProps> = ({
  modalityItems,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useBreakpoint('md');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [embla, setEmbla] = useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const SELECTED_ITEM_FILTER =
    'brightness(0) saturate(100%) invert(95%) sepia(74%) saturate(1168%) hue-rotate(357deg) brightness(102%) contrast(101%)';

  const modalitiesData = useMemo(() => {
    const modalitiesSection = modalityItems?.find(
      (section) => section.type === 'modalities',
    );
    return modalitiesSection?.navigationItems ? modalitiesSection : undefined;
  }, [modalityItems]);

  const carouselItems = useMemo(() => {
    return (
      modalitiesData?.navigationItems?.map((link, index) => ({
        id: index,
        label: link.label || '',
        href: link.href || '',
        image: link.bgImage || '',
        icon: link.icon || '',
      })) || []
    );
  }, [modalitiesData?.navigationItems]);

  useEffect(() => {
    if (!carouselItems || carouselItems.length === 0) return;
    const idx = carouselItems.findIndex(
      (it) =>
        location.pathname === it.href || location.pathname.startsWith(it.href),
    );
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  }, [location.pathname, carouselItems]);

  const updateScrollButtons = useCallback(() => {
    if (embla) {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    }
  }, [embla]);

  const handleCardClick = useCallback(
    (href: string, index?: number) => {
      if (typeof index === 'number' && embla) {
        embla.scrollTo(index);
        setSelectedIndex(index);
      }
      navigate(href);
    },
    [navigate, embla],
  );

  const scrollToNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const scrollToPrevious = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    embla.on('select', updateScrollButtons);
    embla.on('reInit', updateScrollButtons);
    updateScrollButtons();

    return () => {
      embla.off('select', updateScrollButtons);
      embla.off('reInit', updateScrollButtons);
    };
  }, [embla, updateScrollButtons]);

  useEffect(() => {
    if (embla && selectedIndex !== null) {
      embla.scrollTo(selectedIndex);
    }
  }, [embla, selectedIndex]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'visible',
      }}
    >
      <Carousel
        slideGap={15}
        slideSize="280px"
        height={420}
        withControls={false}
        withIndicators={false}
        align="center"
        draggable={true}
        slidesToScroll={1}
        getEmblaApi={setEmbla}
        slides={carouselItems}
        sx={{
          width: '100%',
          '& .mantine-Carousel-viewport': {
            overflow: 'visible !important',
          },
          '& .mantine-Carousel-container': {
            overflow: 'visible !important',
          },
          '& .mantine-Carousel-slide': {
            paddingRight: '6px',
          },
        }}
        renderSlide={(item: CarouselItemType) => (
          <CarouselCard
            filter={SELECTED_ITEM_FILTER}
            item={item}
            onCardClick={() => handleCardClick(item.href, item.id)}
            clicked={selectedIndex === item.id}
          />
        )}
      />

      {!isMobile && (
        <ArrowController
          handleScrollRight={scrollToNext}
          handleScrollLeft={scrollToPrevious}
          isAtStart={!canScrollPrev}
          isAtEnd={!canScrollNext}
          color="typeText.default"
          boxShadow="none"
          topPosition={-40}
          rightPosition={0}
        />
      )}
    </Box>
  );
};

export default ModalitiesCarousel;
