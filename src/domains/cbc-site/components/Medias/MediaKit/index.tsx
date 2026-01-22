import { Box, Container, Stack, Typography } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';
import DownloadButton from '../../Buttons/DownloadButton';

interface MediaKitProps {
  onDownloadBrandManual: () => void;
  onDownloadLogoKit: () => void;
}

const MediaKit = ({
  onDownloadBrandManual,
  onDownloadLogoKit,
}: MediaKitProps) => {
  return (
    <Box sx={{ backgroundColor: 'customBackground.secondary' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 6 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={{ xs: 4, md: 8 }}
        >
          <Stack spacing={2} maxWidth={{ xs: '100%', md: 360 }}>
            <ColoredTitle title="Mídia Kit" color="typeText.primary" />
            <Typography
              color="typeText.primary"
              fontSize={{ xs: 18, md: 20 }}
              fontWeight={300}
              lineHeight={{ xs: 1.4, md: 1.5 }}
            >
              Baixe aqui os materiais <br />
              de marca da CBC.
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 3, md: 6 }}
            alignItems={{ xs: 'stretch', md: 'flex-start' }}
            justifyContent={{ xs: 'flex-start', md: 'flex-start' }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Stack spacing={2} sx={{ width: { xs: '100%', md: 272 } }}>
              <Typography
                color="typeText.primary"
                fontSize={{ xs: 20, md: 22 }}
                fontWeight={600}
                textAlign="left"
              >
                Logo
              </Typography>
              <DownloadButton
                label={'Baixar Kit de Logos'}
                onClick={onDownloadLogoKit}
              />
            </Stack>
            <Stack spacing={2} sx={{ width: { xs: '100%', md: 272 } }}>
              <Typography
                color="typeText.primary"
                fontSize={{ xs: 20, md: 22 }}
                fontWeight={600}
                textAlign="left"
              >
                Manual de marca
              </Typography>
              <DownloadButton
                label={'Baixar Manual'}
                onClick={onDownloadBrandManual}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MediaKit;
