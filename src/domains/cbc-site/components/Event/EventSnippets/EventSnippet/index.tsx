import { Stack, Box } from '@mui/material';
import { EventResume } from '../../../../interfaces/Events/IEvents';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../../Buttons/MainButton';
import TextContent from '../../../TextContent';

const EventSnippet: React.FC<{ event: EventResume; slug: string }> = ({
  event,
  slug,
}) => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 2, md: 4 }}
      py={{ xs: 4, md: 0 }}
      sx={{
        width: '100%',
        maxWidth: { xs: '320px', md: '100%' },
        alignItems: { md: 'stretch' },
        height: { xs: 'auto', md: 158 },
      }}
    >
      <Box
        component="img"
        src={event.image}
        alt={event.title}
        sx={{
          width: { xs: '100%', md: '240px' },
          minWidth: { xs: '100%', md: '240px' },
          height: { xs: 200, md: '100%' },
          maxHeight: { xs: 200, md: 'none' },
          objectFit: 'cover',
          alignSelf: { xs: 'center', md: 'stretch' },
        }}
      />

      <Stack
        spacing={2}
        justifyContent={'center'}
        width={{ xs: '100vw', md: '100%' }}
        flex={1}
        sx={{
          minHeight: { md: '100%' },
          height: { md: '100%' },
        }}
      >
        <Stack
          maxWidth={{ xs: '340px', md: '100%' }}
          sx={{
            justifyContent: 'space-between',
            height: '100%',
          }}
          spacing={{ xs: 2, md: 0 }}
        >
          <Stack spacing={{ xs: 0.2, md: 0 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <TextContent
                marginBottom={0}
                sx={{
                  color: 'typeText.tertiary',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
                content={event.type}
              />

              <TextContent
                marginBottom={0}
                sx={{
                  color: 'typeText.tertiary',
                  fontWeight: '400',
                  fontSize: '16px',
                }}
                content={' | '}
              />

              <TextContent
                marginBottom={0}
                sx={{
                  color: 'typeText.tertiary',
                  fontWeight: '400',
                  fontSize: '16px',
                }}
                content={event.dateRange || event.date}
              />
            </Box>
            <Box maxWidth={{ xs: '340px', md: '54%' }}>
              <TextContent
                content={event.title}
                fontWeight={700}
                marginBottom={0}
                sx={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitLineClamp: 2,
                }}
              />
            </Box>
          </Stack>
          <Box>
            <MainButton
              label={'Ver mais'}
              isDark={true}
              onClick={() =>
                navigate(`/modalidades/${slug}/eventos/${event.id}`)
              }
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventSnippet;
