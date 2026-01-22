import { Box } from '@mui/material';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { INavigation } from '../../../../interfaces/Link/ILink';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from '../../../../components/Carousel';
import CarouselCard from '../../../../components/Carousel/CarouselCard';

interface CarouselItemType {
  id: number;
  label: string;
  href: string;
  image: string;
  icon: string;
}

interface CarouselProps {
  carouselItems?: INavigation[];
}

const EthicsCarousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [embla, setEmbla] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const itemsData = useMemo(() => {
    const ethicsSection = carouselItems?.find(
      (section) => section.type === 'companies',
    );
    return ethicsSection?.navigationItems ? ethicsSection : undefined;
  }, [carouselItems]);

  const handleCardClick = useCallback(
    (href: string, index?: number) => {
      if (typeof index === 'number' && embla) {
        embla.scrollTo(index);
        setSelectedIndex(index);
      }
      if (href.length > 0) navigate(href);
    },
    [navigate, embla],
  );

  const slides = useMemo(() => {
    return (
      itemsData?.navigationItems?.map((link, index) => ({
        id: index,
        label: link.label || '',
        href: link.href || '',
        image: link.bgImage || '',
        icon: link.icon || '',
      })) || []
    );
  }, [itemsData?.navigationItems]);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const idx = slides.findIndex(
      (it) =>
        it.href &&
        it.href.length > 0 &&
        (location.pathname === it.href ||
          location.pathname.startsWith(it.href)),
    );
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  }, [location.pathname, slides]);

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
        slides={slides}
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
            item={item}
            onCardClick={() => handleCardClick(item.href, item.id)}
            clicked={selectedIndex === item.id}
            sx={{ border: '1px solid #5CB5AF', borderRadius: 2 }}
          />
        )}
      />
    </Box>
  );
};

export default EthicsCarousel;
