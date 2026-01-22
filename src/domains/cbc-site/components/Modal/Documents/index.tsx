import { Modal as MuiModal, Box, Stack, Backdrop } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';
import TextContent from '../../TextContent';
import { PeopleSection } from './PeopleSection';

interface ModalProps {
  title: string;
  description: string;
  icon: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  members?: string;
  representative?: string;
  council?: string;
}

export const DocumentModal: React.FC<ModalProps> = ({
  open,
  title,
  description,
  icon,
  children,
  onClose,
  members,
  representative,
  council,
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        },
      }}
    >
      <Stack
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '80%', sm: '90%', md: '80%', lg: '55%' },
          maxHeight: { xs: '95vh', s: '90vh', md: '85vh', lg: '90vh' },
          bgcolor: 'background.paper',
          borderRadius: 2,
          outline: 'none',
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#D9D9D9',
            borderRadius: '8px',
          },
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="flex-start"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          px={{ xs: 2, sm: 4, md: 6, lg: 8 }}
          py={{ xs: 2, sm: 3, md: 4 }}
        >
          <Box
            component="img"
            src={icon}
            alt="Document Icon"
            height={{ xs: 40, sm: 80, md: 100 }}
            width={{ xs: 40, sm: 80, md: 100 }}
            sx={{
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />

          <Stack spacing={2} flex={1} minWidth={0} sx={{ overflow: 'visible' }}>
            <ColoredTitle
              title={title}
              fontSize={{
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2rem',
              }}
              color="typeText.tertiary"
            />

            <TextContent
              content={description}
              fontWeight={600}
              color="typeText.default"
              fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.5rem' }}
            />

            {representative && (
              <PeopleSection title="Representante" names={representative} />
            )}

            {members && <PeopleSection title="Membros" names={members} />}

            {council && <PeopleSection title="Conselho" names={council} />}

            {children && (
              <Box mt={2} sx={{ overflow: 'visible' }}>
                <TextContent
                  content="Documentos"
                  fontWeight={700}
                  color="typeText.tertiary"
                />
                {children}
              </Box>
            )}
          </Stack>
        </Stack>
      </Stack>
    </MuiModal>
  );
};
