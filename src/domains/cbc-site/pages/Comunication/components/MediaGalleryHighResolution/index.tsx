import { Stack } from '@mui/material';
import CarouselHighResolution from './CarouselHighResolution';
import { Gallery } from '../../../../interfaces/Media/IMedia';
import MediaRighResolutionController from '../MediaController';

interface MediaGalleryHighDefinitionProps {
  galleryItems: Gallery[];
  onClick: () => void;
  slug: string;
}

const MediaGalleryHighDefinition = ({
  galleryItems,
  onClick,
  slug,
}: MediaGalleryHighDefinitionProps) => {
  return (
    <Stack spacing={2} sx={{ position: 'relative' }}>
      <MediaRighResolutionController slug={slug || ''} />
      <CarouselHighResolution galleryItems={galleryItems} onClick={onClick} />
    </Stack>
  );
};

export default MediaGalleryHighDefinition;
