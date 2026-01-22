import { Backdrop, Box, Container, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import cyclist from '../../../../assets/images/banners/cyclist.svg';
import cyclist2 from '../../../../assets/images/banners/cyclist2.svg';
import CircularProgress from '../../components/CircularProgress';
import PreviewCard from '../../components/PreviewCard';
import TextContent from '../../components/TextContent';
import { formatModalityName } from '../../../../shared/utils/formatModalityName';
import { useGetEventById } from '../../hooks/use-get-events';

const EventDetails = () => {
  const { id, slug } = useParams<{ id: string; slug: string }>();
  const { data: event, isLoading: loading } = useGetEventById(id || '');
  const { image, title, date, type } = event || {};

  if (loading) {
    return (
      <Backdrop
        open={loading}
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <PreviewCard
          image={image || ''}
          EventTitle={title || ''}
          date={date}
          type={type || ''}
          slug={formatModalityName(slug || '')}
        />

        <Stack spacing={4} mb={5}>
          <TextContent
            margin={0}
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <TextContent
            margin={0}
            content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Box component="img" src={cyclist} alt="Cyclist" width="100%" />

          <TextContent
            margin={0}
            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
          />

          <Box component="img" src={cyclist2} alt="Cyclist" width="100%" />
        </Stack>
      </Container>
    </Box>
  );
};

export default EventDetails;
