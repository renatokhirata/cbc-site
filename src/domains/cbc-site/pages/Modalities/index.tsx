import { Box, Container, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { modalitiesCarouselData } from '../../../../shared/constants/navigation';
import { serviceButtonData } from '../../../../shared/constants/buttonIcons';
import NewsSnippetList from '../../components/News/NewsSnippetList';
import CircularProgress from '../../components/CircularProgress';
import InfoButtonGrid from '../../components/InfoButtonGrid';
import ColoredTitle from '../../components/ColoredTitle';
import Calendar from '../../components/Calendar';
import EventSnippets from '../../components/Event/EventSnippets';
import MainButton from '../../components/Buttons/MainButton';
import ServiceButton from '../../components/Buttons/ServiceButton';
import useBreakpoint from '../../hooks/useBreakpoint';
import AboutModality from './components/AboutModality';
import GalleryItemsCarousel from '../../components/Carousel/Gallery';
import CalendarHeader from '../../components/Calendar/Desktop/components/CalendarHeader';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import isoWeek from 'dayjs/plugin/isoWeek';
import DropdownHeader from './components/DropdownHeader';
import CalendarTitle from '../../components/Calendar/CalendarTitle';
import ModalitiesCarousel from '../../components/Carousel/ModalitiesCarousel';
import { useGetModalityById } from '../../hooks/use-get-modality';
import { useGetEventsBySlug } from '../../hooks/use-get-events';
import { useGetGallery } from '../../hooks/use-get-gallery';
import { calendarEvents } from '../../../../shared/constants/calendarEvents';

dayjs.extend(isoWeek);
dayjs.locale('pt-br');

export default function ModalityContent() {
  const { slug } = useParams<{ slug: string }>();
  const { data: modality = null, isLoading: loadingModality } =
    useGetModalityById(slug || '');
  const { data: eventsData, isLoading: loadingEvents } = useGetEventsBySlug(
    slug || '',
  );
  const { data: gallery = [], isLoading: loadingGallery } = useGetGallery();
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const isMobile = useBreakpoint('md');
  const navigate = useNavigate();

  const events = eventsData || [];
  const isLoading = loadingModality || loadingEvents || loadingGallery;

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
      {isMobile && slug && (
        <>
          <DropdownHeader slug={slug} />
          <AboutModality data={modality} />
        </>
      )}

      {!isMobile && slug && (
        <Container maxWidth="xl" sx={{ overflow: 'hidden', pt: 6 }}>
          <AboutModality data={modality} />
        </Container>
      )}

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', pt: { xs: 3, md: 6 } }}
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

      {slug && (
        <Container
          maxWidth="xl"
          sx={{
            overflow: 'hidden',
            py: { xs: 3, md: 6 },
          }}
        >
          <Stack spacing={{ xs: 6, md: 8 }}>
            <Stack spacing={3}>
              <ColoredTitle title={'Confira'} color={'typeText.tertiary'} />
              <InfoButtonGrid slug={slug} />
            </Stack>
            <Stack spacing={3} display={{ xs: 'none', md: 'block' }}>
              <CalendarTitle slug={slug} />
              <Grid container spacing={{ md: 6, xl: 3 }}>
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
                    <EventSnippets events={events} slug={slug} slice={3} />
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Stack>
        </Container>
      )}

      {slug && isMobile && (
        <Stack py={3}>
          <Container maxWidth="xl">
            <CalendarTitle slug={slug} />
          </Container>
          <Stack sx={{ width: '100%' }}>
            <CalendarHeader
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
            />
            <Container maxWidth="xl">
              <EventSnippets events={events} slug={slug} />
            </Container>
          </Stack>
        </Stack>
      )}

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', py: { xs: 3, md: 8 } }}
      >
        <ModalitiesCarousel modalityItems={modalitiesCarouselData} />
      </Container>

      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', py: { xs: 3, md: 6 } }}
      >
        <Stack sx={{ pt: { xs: 0, md: 1 } }}>
          <Stack spacing={6}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <ColoredTitle
                  title="Galeria de Mídia"
                  color="typeText.tertiary"
                />
                {!isMobile && (
                  <MainButton
                    label={'Ver todas as galerias'}
                    onClick={() => {}}
                  />
                )}
              </Stack>
              <GalleryItemsCarousel galleryItems={gallery} />
            </Stack>
            <Stack spacing={3}>
              <ColoredTitle title={'Links Úteis'} color={'typeText.tertiary'} />
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, md: 1 }}
              >
                {serviceButtonData.map((button, index) => (
                  <ServiceButton
                    key={index}
                    button={button}
                    onClick={() => navigate(button.href)}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
