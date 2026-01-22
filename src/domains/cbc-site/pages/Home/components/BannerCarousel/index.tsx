/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container } from '@mui/material';
import { useRef, useState, useCallback, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel as MantineCarousel, CarouselSlide } from '@mantine/carousel';
import bannerCarousel from '../../../../../../assets/images/pages/home/carousel/bannerCarousel.svg';
import ContentBanner from './ContentBanner';
import BannerIndicators from './BannerIndicators';
import { Banner } from '../../type/Banner';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../../../components/Buttons/MainButton';

interface BannerCarouselProps {
  banners: Banner[];
  height?: { xs?: number | string; md?: number | string; lg?: number | string };
  autoplayDelay?: number;
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  banners,
  height = 360,
  autoplayDelay,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const autoplay = useRef(Autoplay({ delay: autoplayDelay }));

  // Atualiza o índice atual quando o slide muda
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Configura os event listeners do Embla
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Handler para clique nos indicadores
  const handleIndicatorClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      autoplay.current.reset();
    },
    [emblaApi],
  );

  const renderSlide = (banner: Banner) => {
    return (
      <Box
        display="flex"
        alignItems="flex-end"
        position="relative"
        sx={{
          height,
          backgroundImage: `url(${bannerCarousel})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ContentBanner banner={banner} />
      </Box>
    );
  };

  return (
    <Box position="relative">
      <MantineCarousel
        getEmblaApi={setEmblaApi}
        withIndicators={false}
        withControls={false}
        height="100%"
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
        slideSize="100%"
        slideGap={0}
      >
        {banners.map((banner) => (
          <CarouselSlide key={banner.id}>{renderSlide(banner)}</CarouselSlide>
        ))}
      </MantineCarousel>

      {/* Indicadores fixos posicionados sobre o carrossel */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        zIndex={2}
        sx={{
          pointerEvents: 'none',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: 4,
            pointerEvents: 'auto',
          }}
        >
          <BannerIndicators
            banners={banners}
            currentIndex={currentIndex}
            onIndicatorClick={handleIndicatorClick}
          />

          <MainButton
            label="Ver todas as notícias"
            sx={{
              fontWeight: 700,
              display: { xs: 'block', md: 'none' },
              mt: 2,
            }}
            isDark
            onClick={() => navigate('imprensa/noticias')}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default BannerCarousel;
