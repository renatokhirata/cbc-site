import { Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VideoHeader from '../../components/Medias/VideoHeader';
import ModalitiesNavBar from '../../components/Navbars/ModalitiesNavBar';
import { useLocation } from 'react-router-dom';

const ModalitiesHeader = () => {
  const path = useLocation().pathname;
  const modalityRegex = /^\/modalidades\/[^/]+(?:\/)?$/;
  const isModalityPage = modalityRegex.test(path);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isModalityPage) return null;

  return (
    <Stack width="100%" height="100%">
      {!isMobile && (
        <Stack>
          <VideoHeader />
          <ModalitiesNavBar />
        </Stack>
      )}
    </Stack>
  );
};

export default ModalitiesHeader;
