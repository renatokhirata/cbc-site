import { Stack } from '@mui/material';
import MainNavBar from '../../../../components/Navbars/MainNavBar';
import SupportNavBar from '../../../../components/Navbars/SupportNavBar';
import MobileHeader from '../../../../components/MobileHeader';

const EventDetailsHeader = () => {
  return (
    <Stack mb={4}>
      <MobileHeader>
        <SupportNavBar />
        <MainNavBar />
      </MobileHeader>
    </Stack>
  );
};

export default EventDetailsHeader;
