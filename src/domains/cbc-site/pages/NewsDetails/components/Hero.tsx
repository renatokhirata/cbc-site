import { Box, Container, Stack } from '@mui/material';
import ColoredTitle from '../../../components/ColoredTitle';
import { NewsResume } from '../../../interfaces/News/INews';
import useBreakpoint from '../../../hooks/useBreakpoint';
import pressIcon from '../../../../../assets/icons/pressIcon.svg';

const Hero = ({ news }: { news: NewsResume | null }) => {
  const isMobile = useBreakpoint('md');
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        minHeight: '72vh',
        backgroundImage: `url(${news?.coverImage?.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: 2,
        pb: { xs: 4, md: 6 },
        gap: 6,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(28, 33, 66, 0.78)',
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <ColoredTitle
            color="typeText.primary"
            title={'Notícias'}
            fontWeight={400}
          />
          {!isMobile && (
            <Box
              component="img"
              src={pressIcon}
              alt={news?.title}
              sx={{ width: 60, height: 60 }}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
