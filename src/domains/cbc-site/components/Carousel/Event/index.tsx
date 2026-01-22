import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import Carousel from '..';
import { Image } from '@mantine/core';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { EventResume } from '../../../interfaces/Events/IEvents';
import { eventItems } from '../../../../../shared/constants/events';
import MainButton from '../../Buttons/MainButton';

interface EventCarouselProps {
  events: EventResume[];
}

const EventCarousel = ({ events }: EventCarouselProps) => {
  const isMobile = useBreakpoint('sm');
  if (!isMobile) return null;
  const displayEvents = events && events.length > 0 ? events : eventItems;

  return (
    <Card>
      <Carousel
        loop
        align="start"
        slidesToScroll={1}
        controlsOffset={0}
        controlSize={35}
        withControls
        styles={{
          control: {
            backgroundColor: '#1976D2',
          },
        }}
        slides={displayEvents}
        renderSlide={({
          image,
          title,
          date,
          location,
          content,
          type,
          limitDate,
        }: EventResume) => (
          <Card sx={{ borderRadius: 4, boxShadow: 2 }}>
            <Box height={300} overflow="hidden">
              <CardMedia>
                <Image
                  src={image}
                  alt={title}
                  width="100%"
                  height="100%"
                  fit="contain"
                />
              </CardMedia>
            </Box>

            <Box p={2}>
              <CardContent>
                <Box>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography
                      variant="body2"
                      fontSize="1rem"
                      color="typeText.default"
                    >
                      {date}{' '}
                      <Box component="span" color="text.secondary">
                        -
                      </Box>{' '}
                      <Box
                        component="span"
                        fontWeight={600}
                        color="typeText.secondary"
                      >
                        {type}
                      </Box>
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h6"
                    fontWeight={800}
                    gutterBottom
                    sx={{ lineHeight: 1.2 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="typeText.default"
                    fontWeight={200}
                  >
                    INSCRIÇÕES ATÉ: {limitDate}
                  </Typography>
                  <Box overflow="hidden" position="relative">
                    <Typography variant="body2" color="typeText.default">
                      {content}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  bottom={0}
                  left={0}
                  sx={{
                    py: 2,
                    pt: 28,
                    position: 'absolute',
                    backgroundImage:
                      'linear-gradient(to top, #f5f5f5, transparent)',
                    zIndex: 1000,
                  }}
                >
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      mb: 2,
                    }}
                  >
                    <MainButton
                      label="Ver mais"
                      onClick={() => console.log('Ver mais clicked')}
                    />
                  </CardActions>
                </Box>
              </CardContent>
            </Box>
          </Card>
        )}
      />
    </Card>
  );
};

export default EventCarousel;
