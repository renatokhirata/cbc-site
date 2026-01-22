import { Stack } from '@mui/material';
import { Gallery } from '../../../../interfaces/Media/IMedia';
import CarouselSection from './CarouselSection';

interface CarouselHighResolutionProps {
  galleryItems: Gallery[];
  onClick: () => void;
}

const CarouselHighResolution = ({
  galleryItems,
  onClick,
}: CarouselHighResolutionProps) => {
  return (
    <Stack sx={{ position: 'relative' }}>
      <CarouselSection
        title="Fotos"
        galleryItems={galleryItems}
        onClick={onClick}
      />

      <CarouselSection
        title="Vídeos"
        galleryItems={galleryItems}
        onClick={onClick}
      />
    </Stack>
  );
};

export default CarouselHighResolution;
