import { Container, Stack, Typography } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';
import EventSnippets from '../../Event/EventSnippets';
import { EventResume } from '../../../interfaces/Events/IEvents';

interface EventModalContentProps {
  date: string;
  slug: string;
  eventList: EventResume[];
  onClose: () => void;
}

const EventModalContent: React.FC<EventModalContentProps> = ({
  date,
  slug,
  eventList,
}) => {
  return (
    <Stack
      spacing={0}
      width="100%"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        height: '100%',
        minHeight: 0,
      }}
    >
      <Stack
        sx={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          minHeight: 0,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ height: '100%', minHeight: 0, py: 8 }}>
            <Stack spacing={-0.5} py={4}>
              <ColoredTitle
                title="Eventos"
                color="typeText.black"
                fontSize="64px"
              />
              <Typography variant="h2" fontWeight={100} color="typeText.black">
                {date}
              </Typography>
            </Stack>
            <EventSnippets events={eventList} isModal={true} slug={slug} />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default EventModalContent;
