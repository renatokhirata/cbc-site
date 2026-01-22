import { Box, Container, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { modalitiesCarouselData } from '../../../../shared/constants/navigation';
import NewsSnippetList from '../../components/News/NewsSnippetList';
import CircularProgress from '../../components/CircularProgress';
import ColoredTitle from '../../components/ColoredTitle';
import Calendar from '../../components/Calendar';
import EventSnippets from '../../components/Event/EventSnippets';
import MainButton from '../../components/Buttons/MainButton';
import useBreakpoint from '../../hooks/useBreakpoint';
import GalleryItemsCarousel from '../../components/Carousel/Gallery';
import CalendarHeader from '../../components/Calendar/Desktop/components/CalendarHeader';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import isoWeek from 'dayjs/plugin/isoWeek';
import CalendarTitle from '../../components/Calendar/CalendarTitle';
import ModalitiesCarousel from '../../components/Carousel/ModalitiesCarousel';
import FederationBanner from './components/FederationBanner';
import AboutCBC from './components/AboutCBC';
import BannerCarousel from './components/BannerCarousel';
import InfoButtonCarousel from './components/InfoButtonCarousel';
import infoButtonHome from '../../../../shared/constants/infoButtonHome';
import InfoButton from '../../components/Buttons/InfoButton';
import Dialog from '../Institutional/components/Dialog';
import { bannersCarousel } from '../../../../shared/constants/bannersCarousel';
import { useGetEvents } from '../../hooks/use-get-events';
import { useGetGallery } from '../../hooks/use-get-gallery';
import { calendarEvents } from '../../../../shared/constants/calendarEvents';

dayjs.extend(isoWeek);
dayjs.locale('pt-br');

export default function HomePage() {
  const isMobile = useBreakpoint('md');
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const navigate = useNavigate();
  const autoplayDelayDefault = 3000;
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    data: eventsData,
    isLoading: loadingEvents,
    isError: eventsError,
    error: eventsErrorDetails,
  } = useGetEvents();
  const {
    data: galleryData,
    isLoading: loadingGallery,
    isError: galleryError,
    error: galleryErrorDetails,
  } = useGetGallery();
  const isLoading = loadingEvents || loadingGallery;
  const isError = eventsError || galleryError;

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  if (isError)
    return (
      <div>
        Error loading data:{' '}
        {eventsErrorDetails?.message || galleryErrorDetails?.message}
      </div>
    );

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 200px)',
          width: '100%',
          py: 8,
        }}
      >
        <CircularProgress color="#1976d2" />
      </Box>
    );
  }

  return (
    <>
      <BannerCarousel
        banners={bannersCarousel}
        autoplayDelay={autoplayDelayDefault}
        height={{ xs: 458, md: 700 }}
      />
      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', pt: { xs: 3, md: 8 } }}
      >
        <Stack spacing={4}>
          <NewsSnippetList
            onClick={(id) => navigate(`/imprensa/noticias/${id}`)}
          />
          {isMobile && (
            <Box>
              <MainButton
                label={'Ver todas as notícias'}
                onClick={() => navigate('/imprensa/noticias')}
              />
            </Box>
          )}
        </Stack>
      </Container>
      <Box mt={{ xs: 6, md: 12 }}>
        <FederationBanner />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          overflow: 'hidden',
          py: { xs: 3, md: 8 },
        }}
      >
        <Stack spacing={{ xs: 6, md: 8 }}>
          <Stack
            spacing={{ xs: 2, md: 3 }}
            display={{ xs: 'none', md: 'block' }}
          >
            <CalendarTitle />
            <Grid container spacing={{ xs: 2, md: 6, xl: 6 }}>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Calendar.Desktop events={calendarEvents} value={[]} />
              </Grid>
              {!isMobile && (
                <Grid
                  size={{ xs: 12, lg: 6 }}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <EventSnippets events={eventsData || []} slice={3} />
                </Grid>
              )}
            </Grid>
          </Stack>
        </Stack>
      </Container>

      {isMobile && (
        <Stack py={3}>
          <Container maxWidth="xl">
            <CalendarTitle />
          </Container>
          <Stack sx={{ width: '100%' }}>
            <CalendarHeader
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
            />
            <Container maxWidth="xl">
              <EventSnippets events={eventsData || []} />
            </Container>
          </Stack>
        </Stack>
      )}

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', py: { xs: 3, md: 4 } }}
      >
        <ModalitiesCarousel modalityItems={modalitiesCarouselData} />
      </Container>

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', py: { xs: 3, md: 8 } }}
      >
        <Stack spacing={{ xs: 2, md: 3 }} sx={{ pt: { xs: 0, md: 2 } }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <ColoredTitle title="Galeria de Mídia" color="typeText.tertiary" />
            {!isMobile && (
              <MainButton label={'Ver todas as galerias'} onClick={() => {}} />
            )}
          </Stack>
          <GalleryItemsCarousel galleryItems={galleryData || []} />
        </Stack>
        {!isMobile ? (
          <InfoButtonCarousel
            infoButtonItems={infoButtonHome}
            onClick={(item) =>
              item.href ? navigate(item.href) : setDialogOpen(true)
            }
          />
        ) : (
          <Stack spacing={2} my={3}>
            {infoButtonHome.map((item, index) => (
              <InfoButton
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                onClick={() =>
                  item.href ? navigate(item.href) : setDialogOpen(true)
                }
                icon={
                  <Box
                    component={'img'}
                    src={item.icon}
                    width={'36px'}
                    height={'36px'}
                  />
                }
                color={item.color}
              />
            ))}
          </Stack>
        )}
      </Container>
      <Box pb={{ xs: 4, md: 6 }}>
        <AboutCBC />
      </Box>
      <Dialog open={dialogOpen} onClose={handleCloseDialog} />
    </>
  );
}
