import { Stack, Box, Container } from '@mui/material';
import { TextArea } from './TextArea';
import { Banner } from './Banner';

const GovernanceHeader = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      gap={0}
      sx={{
        width: '100%',
        bgcolor: { md: '#F5F5F5' },
        minHeight: { md: 400 },
      }}
    >
      <Box flex={1} display="flex" alignItems="center">
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 0 }, py: 4 }}>
          <TextArea />
        </Container>
      </Box>

      <Box flex={2} sx={{ width: '100%' }}>
        <Banner />
      </Box>
    </Stack>
  );
};

export default GovernanceHeader;
