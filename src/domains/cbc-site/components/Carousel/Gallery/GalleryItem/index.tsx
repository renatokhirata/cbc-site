import React from 'react';
import { Box, Stack } from '@mui/material';
import imageMediaIcon from '../../../../../../assets/icons/imageMediaIcon.svg';
import cameraIcon from '../../../../../../assets/icons/camera.svg';
import CardOverlay from '../../../ItemOverlay';
import { Gallery } from '../../../../interfaces/Media/IMedia';
import TextContent from '../../../TextContent';

interface GalleryItemProps {
  galleryItem: Gallery;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  galleryItem: {
    title = 'Volta Ciclística Internacional do Paraná 2015 - 3ª Etapa',
    category = 'Estrada',
    date = '29/05/2015',
    coverImage,
    coverAlt,
    medias = [],
  },
  onClick,
}) => {
  const syncedPhotoCount = medias.length;
  return (
    <Stack
      spacing={1}
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        width: { xs: '100%', md: '100%' },
        maxWidth: { xs: '320px', md: 'none' },
        alignItems: { md: 'stretch' },
        minHeight: { md: 180 },
      }}
    >
      <Box
        position="relative"
        overflow="hidden"
        borderRadius={1.2}
        sx={{
          aspectRatio: '16/9',
        }}
        onClick={onClick}
      >
        <Box
          component="img"
          src={coverImage}
          alt={coverAlt}
          sx={{
            width: '100%',
            minWidth: { xs: '100%', md: '320px' },
            height: { xs: 200, md: '100%' },
            maxHeight: { xs: 200, md: 'none' },
            objectFit: 'cover',
            alignSelf: { xs: 'center', md: 'stretch' },
          }}
          aria-label={coverAlt}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            (e.target as HTMLImageElement).src = '/fallback-image.png';
          }}
        />
        <CardOverlay>
          <Box
            component="img"
            src={imageMediaIcon}
            alt="Visualizar"
            style={{ width: 48, height: 48 }}
          />
        </CardOverlay>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            bgcolor: 'customBackground.tertiary',
            position: 'absolute',
            bottom: 14,
            left: 14,
          }}
        >
          <TextContent
            content={category}
            fontWeight={100}
            color="typeText.primary"
            marginBottom={0}
          />
        </Box>
      </Box>

      <TextContent
        content={title}
        fontSize={{ xs: '16px', md: '24px' }}
        fontWeight={700}
        marginBottom={0}
        sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 2,
        }}
      />
      <Stack spacing={1}>
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="center"
          spacing={1}
        >
          <Box
            component="img"
            src={cameraIcon}
            alt="Fotos"
            sx={{ width: 24, height: 24, opacity: 1 }}
          />
          <TextContent
            content={`${syncedPhotoCount} fotos`}
            color="typeText.tertiary"
            marginBottom={0}
            fontSize={'16px'}
          />
        </Stack>
        <TextContent
          content={`${category} (${date})`}
          color="typeText.tertiary"
          fontSize={'16px'}
        />
      </Stack>
    </Stack>
  );
};

export default GalleryItem;
