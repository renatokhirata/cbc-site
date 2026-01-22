import { Box, Container, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsSnippetList from '../../components/News/NewsSnippetList';
import CircularProgress from '../../components/CircularProgress';
import ColoredTitle from '../../components/ColoredTitle';
import MediaKit from '../../components/Medias/MediaKit';
import LockedArea from './components/MediaGalleryHighResolution/LockedArea';
import ContactInfo from '../../components/Contact/ContactInfo';
import Header from '../../components/PageHeader';
import ComunicationIcon from '../../../../assets/icons/pressIcon.svg';
import PressRegistrationForm from './components/PressRegistrationForm';
// Arquivos removidos do Git (muito grandes)
// import BrandManualPDF from '../../../../assets/docs/MANUAL DE ID VISUAL CBC.pdf';
// import LogoKitZip from '../../../../assets/docs/logo-kit.zip';
import { useGetGallery } from '../../hooks/use-get-gallery';

const ComunicationPage = () => {
  const { isLoading: pageLoading } = useGetGallery();
  const navigate = useNavigate();
  // const { slug } = useParams<{ slug: string }>();
  const [locked, setLocked] = useState(false);
  // const { downloadFile } = useDownload();

  const handleDownloadBrandManual = () => {
    // TODO: Implementar download do manual (arquivo removido do Git)
    console.warn('Manual de ID Visual não disponível (arquivo removido do Git)');
  };

  const handleDownloadLogoKit = () => {
    // TODO: Implementar download do logo kit (arquivo removido do Git)
    console.warn('Logo Kit não disponível (arquivo removido do Git)');
  };

  if (pageLoading) {
    return (
      <Box
        sx={{
          my: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress color="loading.secondary" />
      </Box>
    );
  }

  return (
    <Stack sx={{ overflowX: 'hidden' }}>
      <Header title="Comunicação" icon={ComunicationIcon} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, py: 4 }}>
        <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
          <Stack spacing={4}>
            <NewsSnippetList
              onClick={(id) => navigate(`/imprensa/noticias/${id}`)}
            />
          </Stack>
        </Container>

        <Stack>
          {/* <Container maxWidth="xl" sx={{ mb: 1 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 0, md: 1 }}
              alignItems="baseline"
            >
              <ColoredTitle
                title="Galeria de Mídia"
                color="typeText.tertiary"
              />
              <ColoredTitle
                title="(alta resolução)"
                color="typeText.tertiary"
                fontSize="1.2rem"
              />
            </Stack>
          </Container> */}

          <LockedArea open={locked} onUnlock={() => setLocked(false)}>
            <Container maxWidth="xl">
              {/* <Stack>
                <MediaGalleryHighDefinition
                  slug={slug || ''}
                  galleryItems={gallery}
                  onClick={() => setLocked(true)}
                />
              </Stack> */}
            </Container>
          </LockedArea>
          <MediaKit
            onDownloadBrandManual={handleDownloadBrandManual}
            onDownloadLogoKit={handleDownloadLogoKit}
          />
        </Stack>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 } }}>
              <ContactInfo />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Stack spacing={4}>
                <ColoredTitle
                  title="Cadastro de Imprensa"
                  color="typeText.tertiary"
                />
                <Box>
                  <PressRegistrationForm />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
};

export default ComunicationPage;
