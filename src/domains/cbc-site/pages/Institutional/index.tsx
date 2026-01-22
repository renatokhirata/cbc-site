import { Stack, Container, Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import PresidentSection from './components/PresidentSection';
import ColoredTitle from '../../components/ColoredTitle';
import TextContent from '../../components/TextContent';
import partnershipsImage from '../../../../assets/images/partnerships.svg';
import MVV from './components/MVV';
import achievementsData from '../../../../shared/constants/achievements';
import AchievementsDisplay from './components/Achievements';
import BrazilianMap from '../../components/BrazilianMap';
import Dialog from './components/Dialog';
import MainButton from '../../components/Buttons/MainButton';
import AboutCBC from './components/AboutCBC';
import { timeLineData } from '../../../../shared/constants/timeline';
import { BikeTimeline } from './components/BikeTimeline';
import Header from '../../components/PageHeader';
import BannerInstitutional from './components/Header/BannerInstitutional';
import institutionalPageIcon from '../../../../assets/icons/institutionalPageIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useGetPageData } from '../../hooks/use-get-page';

const Institutional = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { data: institutionalData, isLoading: loading } =
    useGetPageData('/institucional');
  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  if (loading) {
    return (
      <Box
        sx={{
          my: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Header title={'Institucional'} icon={institutionalPageIcon} />
      <BannerInstitutional
        institutionalBanner={institutionalData?.banner || ''}
      />

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', py: { xs: 3, md: 6 } }}
      >
        <Stack spacing={6}>
          <AboutCBC institucionalData={institutionalData || undefined} />
        </Stack>
      </Container>

      <PresidentSection subContent={institutionalData?.subContent} />

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', pt: { xs: 3, md: 6 } }}
      >
        <MVV />
      </Container>

      <AchievementsDisplay data={achievementsData} />

      <BikeTimeline data={timeLineData} />

      <Container maxWidth="xl" sx={{ overflow: 'hidden', py: 6 }}>
        <Stack spacing={{ xs: 6, md: 4 }}>
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            width="100%"
            justifyContent="center"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={{ xs: -2, md: -18 }}
          >
            <Stack
              pt={{ xs: 4, md: 46 }}
              zIndex={1}
              spacing={{ xs: 2, md: 1 }}
              width={{ xs: '100%', md: '36%' }}
            >
              <ColoredTitle
                color="typeText.tertiary"
                title="Federações Estaduais"
                fontWeight={700}
              />
              <TextContent
                sx={{ width: '100%' }}
                content={
                  'A base do ciclismo brasileiro está espalhada por todo o país. Atualmente, a CBC é composta por federações estaduais, que são responsáveis por organizar eventos regionais, promover o esporte em nível local e descobrir talentos que futuramente representam o Brasil no cenário internacional.'
                }
              />
              <Box width={{ xs: '100%', lg: 'fit-content' }}>
                <MainButton
                  label="Ver mais"
                  onClick={() => navigate('/federacoes')}
                  isDark={true}
                  fullWidth
                  sx={{ width: { xs: '100%', lg: 'auto' } }}
                />
              </Box>
            </Stack>

            <Box width={{ xs: '100%', md: '50%' }} zIndex={1}>
              <BrazilianMap />
            </Box>
          </Stack>

          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent={'flex-start'}
            spacing={{ xs: 4, md: 8 }}
            pr={{ md: '0%', xl: '12%' }}
            height={'100%'}
            minHeight={356}
          >
            <Box
              component="img"
              src={partnershipsImage}
              alt="Parcerias do Brasil"
              sx={{
                objectFit: 'cover',
                width: '100%',
                minHeight: '356px',
                borderRadius: 2,
              }}
            />
            <Box>
              <Stack
                height="100%"
                justifyContent={'flex-start'}
                alignItems={'flex-start'}
                spacing={{ xs: 2, md: 1 }}
              >
                <Stack spacing={2} flexGrow={1}>
                  <ColoredTitle
                    color="typeText.tertiary"
                    title="Parcerias e Patrocínios"
                    fontWeight={700}
                  />
                  <TextContent
                    content={
                      'A CBC busca empresas e instituições que compartilhem nossa missão de desenvolver o ciclismo no Brasil, do alto rendimento a projetos sociais. \n\nSe sua marca quer gerar impacto, ganhar visibilidade e apoiar o esporte, fale com nossa equipe e faça parte dessa rede.'
                    }
                  />
                </Stack>
                <MainButton
                  label="Seja um parceiro CBC"
                  onClick={() => handleOpenDialog()}
                  isDark={true}
                  fullWidth
                />
              </Stack>
            </Box>
          </Stack>
          <Dialog open={dialogOpen} onClose={handleCloseDialog} />
        </Stack>
      </Container>
    </>
  );
};

export default Institutional;
