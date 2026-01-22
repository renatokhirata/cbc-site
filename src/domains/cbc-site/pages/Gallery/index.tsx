import {
  Box,
  Container,
  Stack,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
} from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Gallery, MediaResume } from '../../interfaces/Media/IMedia';
import PreviewCard from '../../components/PreviewCard';
import ImgMediaModal from '../../components/Medias/components/ImgMediaModal';
import {
  getYouTubeThumbnail,
  isYouTubeUrl,
} from '../../../../shared/utils/videoUtils';
import MediaControllerDesktop from '../../components/Medias/MediaController/Desktop';
import { useGetGalleryById } from '../../hooks/use-get-gallery';

const GalleryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: selectedGallery, isLoading: loading } = useGetGalleryById(
    id || '',
  );
  const [filteredMedias, setFilteredMedias] = useState<MediaResume[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaResume | null>(null);

  const medias = selectedGallery?.medias || [];
  const mediasToDisplay = filteredMedias.length > 0 ? filteredMedias : medias;

  const getSyncedGallery = (gallery: Gallery): Gallery => {
    return {
      ...gallery,
      photoCount: gallery.medias?.length ?? 0,
    };
  };

  const handleOpenModal = (media: MediaResume) => {
    setSelectedMedia(media);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMedia(null);
  };

  const handleFilterSelect = (filter: string) => {
    if (!selectedGallery) return;

    const source = selectedGallery.medias || [];

    if (!filter) {
      setFilteredMedias([]);
      return;
    }

    if (filter === 'Fotos') {
      const filtered = source.filter(
        (media) => media.type?.toLowerCase() === 'image',
      );
      setFilteredMedias(filtered);
      return;
    }

    if (filter === 'Vídeos') {
      const filtered = source.filter(
        (media) => media.type?.toLowerCase() === 'video',
      );
      setFilteredMedias(filtered);
      return;
    }

    setFilteredMedias([]);
  };

  if (loading) {
    return (
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              my: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '60vh',
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Container maxWidth="xl">
        <Stack spacing={4} mb={4}>
          {selectedGallery && (
            <PreviewCard galleryData={getSyncedGallery(selectedGallery)} />
          )}

          <MediaControllerDesktop
            onSelectFilter={(filter) => {
              handleFilterSelect(filter);
            }}
            isModalityPage={false}
            isGalleryPage={true}
          />

          {selectedGallery &&
            (filteredMedias.length > 0 || medias.length > 0) && (
              <Stack spacing={4}>
                <Grid container spacing={2}>
                  {mediasToDisplay.map((media, index) => {
                    const isVideo = isYouTubeUrl(media.url);
                    const imageUrl = isVideo
                      ? getYouTubeThumbnail(media.url) || media.url
                      : media.url;

                    return (
                      <Grid
                        size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
                        key={`${media.url}-${index}`}
                      >
                        <Card
                          onClick={() => handleOpenModal(media)}
                          sx={{
                            padding: 0,
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.02)',
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            alt={media.alt || 'Mídia da galeria'}
                            height="200"
                            width="100%"
                            image={imageUrl}
                            title={media.alt || selectedGallery.coverAlt}
                          />
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            )}
        </Stack>
      </Container>
      {selectedMedia && (
        <ImgMediaModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          media={selectedMedia}
        />
      )}
    </Box>
  );
};

export default GalleryPage;
