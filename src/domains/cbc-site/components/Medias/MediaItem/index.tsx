import React, { useState } from 'react';
import { Box } from '@mui/material';
import imageMediaIcon from '../../../../../assets/icons/imageMediaIcon.svg';
import CardOverlay from '../../ItemOverlay';
import ImgMediaModal from '../components/ImgMediaModal';

const mediaContainerStyle = {
  aspectRatio: '16/9',
  borderRadius: 1.2,
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
};

interface PhotoMediaProps {
  media: {
    url: string;
    alt: string;
  };
}

const MediaItem: React.FC<PhotoMediaProps> = ({ media }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);

  return (
    <>
      <Box sx={mediaContainerStyle}>
        <Box
          component="img"
          src={media.url}
          alt={media.alt}
          sx={{
            maxWidth: '467px',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            objectFit: 'cover',
            display: 'block',
          }}
          aria-label={media.alt}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            (e.target as HTMLImageElement).src = '/fallback-image.png';
          }}
        />
        {!isImageModalOpen && (
          <CardOverlay handleOpenModal={openImageModal}>
            <Box
              component="img"
              src={imageMediaIcon}
              alt="Visualizar"
              style={{ width: 48, height: 48 }}
            />
          </CardOverlay>
        )}
      </Box>
      <ImgMediaModal
        openModal={isImageModalOpen}
        handleCloseModal={closeImageModal}
        media={media}
      />
    </>
  );
};

export default MediaItem;
