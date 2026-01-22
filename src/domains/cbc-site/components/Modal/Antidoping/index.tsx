import { Container, Stack, Box } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';
import docModalIcon from '../../../../../assets/icons/pages/antidoping/docModalIcon.svg';

interface AntidopingModalContentProps {
  summary?: React.ReactNode;
  details?: React.ReactNode;
  onClose?: () => void;
}

const AntidopingModalContent: React.FC<AntidopingModalContentProps> = ({
  summary,
  details,
}) => {
  return (
    <Stack
      spacing={0}
      width="100%"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        minHeight: 0,
        flex: 1,
        height: '100%',
        py: 8,
      }}
    >
      <Stack
        sx={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={'row'}
            spacing={4}
            mb={4}
            alignItems={'center'}
            pl={4}
          >
            <Box component={'img'} src={docModalIcon} width={120} />
            <ColoredTitle
              title="Documentos <br /> Oficiais"
              color="typeText.tertiary"
            />
          </Stack>
        </Container>
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ height: '100%', minHeight: 0 }}>
            <Box>{summary}</Box>
            <Box>{details}</Box>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default AntidopingModalContent;
