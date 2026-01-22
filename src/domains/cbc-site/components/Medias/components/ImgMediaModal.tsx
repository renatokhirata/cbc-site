import { Box, Modal } from '@mui/material';
import { MediaResume } from '../../../interfaces/Media/IMedia';
import ReactPlayer from 'react-player';
import { isYouTubeUrl } from '../../../../../shared/utils/videoUtils';

interface ImgMediaModalProps {
  openModal: boolean;
  handleCloseModal: () => void;
  media: MediaResume;
}

const ImgMediaModal: React.FC<ImgMediaModalProps> = ({
  openModal,
  handleCloseModal,
  media,
}) => {
  const isVideo = isYouTubeUrl(media.url);

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        maxWidth="90vw"
        maxHeight="90vh"
        borderRadius={2}
        sx={{
          outline: 'none',
        }}
      >
        {isVideo ? (
          <ReactPlayer
            url={media.url}
            controls={true}
            width="100%"
            height="auto"
            maxWidth="90vw"
            maxHeight="90vh"
          />
        ) : (
          <Box
            component="img"
            src={media.url}
            alt={media?.alt}
            maxWidth="90vw"
            maxHeight="90vh"
            borderRadius={2}
          />
        )}
      </Box>
    </Modal>
  );
};

export default ImgMediaModal;
