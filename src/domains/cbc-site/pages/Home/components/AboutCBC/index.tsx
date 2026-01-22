import MainButton from '../../../../components/Buttons/MainButton';
import ColoredTitle from '../../../../components/ColoredTitle';
import { Stack, Box, Container } from '@mui/material';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import TextContent from '../../../../components/TextContent';
import aboutCbcBanner from '../../../../../../assets/images/pages/home/aboutCbcBanner.svg';
import { useNavigate } from 'react-router-dom';

export default function AboutCBC() {
  const isMobile = useBreakpoint('md');
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <Box
        aria-label="Seção: O que é a CBC"
        sx={{
          height: 'auto',
          width: '100%',
          py: 4,
          px: { xs: 3, md: 6 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 200,
          zIndex: 2,
        }}
      >
        <Stack
          height={'100%'}
          alignItems={'flex-start'}
          sx={{ zIndex: 2 }}
          spacing={2}
          maxWidth={{ xs: '60%', md: '50%' }}
        >
          <ColoredTitle title={'O que é a CBC?'} color={'typeText.primary'} />

          <MainButton
            isDark={true}
            label={'Saiba mais!'}
            sx={{ px: 4 }}
            onClick={() => navigate('/institucional')}
          />
        </Stack>

        <>
          <Box
            component="img"
            src={aboutCbcBanner}
            alt={`Imagem de ciclistas`}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background:
                'linear-gradient(to right, rgba(92,181,175,1) 0%, rgba(92,181,175,0.10) 100%)',
              zIndex: 1,
            }}
          />
        </>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box
        aria-label="Seção: O que é a CBC"
        sx={{
          height: 'auto',
          width: '100%',
          py: 4,
          px: 6,
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 200,
          zIndex: 2,
        }}
      >
        <Stack
          height={'100%'}
          alignItems={'flex-start'}
          sx={{ zIndex: 2 }}
          spacing={2}
          maxWidth={'50%'}
        >
          <ColoredTitle title={'O que é a CBC?'} color={'typeText.primary'} />

          <TextContent
            content={
              'A CBC busca empresas e instituições que compartilhem nossa missão de desenvolver o ciclismo no Brasil, do alto rendimento a projetos sociais. Se sua marca quer gerar impacto, ganhar visibilidade e apoiar o esporte, fale com nossa equipe e faça parte dessa rede.'
            }
            color="typeText.primary"
            marginBottom={0}
          />

          <MainButton
            isDark={true}
            label={'Saiba mais!'}
            sx={{ px: 4 }}
            onClick={() => navigate('/institucional')}
          />
        </Stack>

        <>
          <Box
            component="img"
            src={aboutCbcBanner}
            alt={`Imagem de ciclistas`}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background:
                'linear-gradient(to right, rgba(92,181,175,1) 0%, rgba(92,181,175,0.10) 60%)',
              zIndex: 1,
            }}
          />
        </>
      </Box>
    </Container>
  );
}
