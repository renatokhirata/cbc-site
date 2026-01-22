import { Stack } from '@mui/material';
import { EventResume } from '../../../interfaces/Events/IEvents';
import { eventItems } from '../../../../../shared/constants/events';
import MainButton from '../../Buttons/MainButton';
import EventModalContent from '../../Modal/Events';
import { useState } from 'react';
import Modal from '../../Modal';
import EventSnippet from './EventSnippet';
import useBreakpoint from '../../../hooks/useBreakpoint';

interface EventSnippetsProps {
  events: EventResume[];
  slug?: string;
  isModal?: boolean;
  slice?: number;
}

const EventSnippets = ({
  events,
  isModal = false,
  slice,
  slug,
}: EventSnippetsProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const displayEvents = events && events.length > 0 ? events : eventItems;
  const isMobile = useBreakpoint('md');

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Stack
        spacing={2}
        width="100%"
        height={'100%'}
        alignContent={{ xs: 'flex-start' }}
        justifyContent={{ xs: 'space-between', md: 'space-between' }}
        sx={{
          overflowY: isMobile ? 'hidden' : 'auto',
          '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <Stack spacing={2} width="100%" direction={{ xs: 'row', md: 'column' }}>
          {displayEvents.slice(0, slice).map((event) => (
            <EventSnippet
              key={event.id}
              event={event}
              slug={slug || event.modalitySlug || ''}
            />
          ))}
        </Stack>

        {!isModal && !isMobile && (
          <MainButton
            label="Ver todos os eventos"
            onClick={() => handleOpenModal()}
            fullWidth
          />
        )}
      </Stack>
      <Modal open={modalOpen} onClose={handleCloseModal} withBorder={true}>
        <EventModalContent
          onClose={handleCloseModal}
          date={'Setembro 2025'}
          slug={slug || ''}
          eventList={events}
        />
      </Modal>
    </>
  );
};

export default EventSnippets;
