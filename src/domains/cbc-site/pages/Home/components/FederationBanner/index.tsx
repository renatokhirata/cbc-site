import { Box, Container, Stack } from '@mui/material';
import TextContent from '../../../../components/TextContent';
import federationBannerImg from '../../../../../../assets/images/pages/home/federationBannerImg.svg';
import brazilianMapImg from '../../../../../../assets/images/pages/home/brazilianMapImg.svg';
import ColoredTitle from '../../../../components/ColoredTitle';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import MainButton from '../../../../components/Buttons/MainButton';
import { useNavigate } from 'react-router-dom';

const FederationBanner = () => {
  const isMobile = useBreakpoint('md');
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <Stack
        py={4}
        sx={{
          width: 'auto',
          height: '100%',
          backgroundColor: 'customBackground.tertiary',
        }}
      >
        <Container maxWidth="xl">
          <Stack
            spacing={2}
            sx={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box
              component="img"
              src={brazilianMapImg}
              alt="Brazilian Map"
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <Stack spacing={1}>
              <ColoredTitle
                color="typeText.primary"
                title={'Federações <br />Estaduais'}
              />
              <TextContent
                color="typeText.primary"
                content="A CBC é composta por federações estaduais, veja aqui mais informações sobre cada uma."
              />
              <Box>
                <MainButton
                  label={'Ver mais'}
                  onClick={() => navigate('/federacoes')}
                  isDark={true}
                  sx={{}}
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    );
  }

  return (
    <Stack
      sx={{
        backgroundImage: `url(${federationBannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '348px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        pl: { md: '2%', lg: '20%', xl: '32%' },
      }}
    >
      <Stack
        spacing={8}
        direction={'row'}
        sx={{
          width: 'auto',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component="img"
          src={brazilianMapImg}
          alt="Brazilian Map"
          sx={{
            height: '136%',
            width: 'auto',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Stack maxWidth={280} spacing={1}>
          <ColoredTitle
            color="typeText.primary"
            title={'Federações <br />Estaduais'}
          />
          <TextContent
            color="typeText.primary"
            content="A CBC é composta por federações estaduais, veja aqui mais informações sobre cada uma."
          />
          <Box>
            <MainButton
              label={'Ver mais'}
              onClick={() => navigate('/federacoes')}
              isDark={true}
              sx={{}}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FederationBanner;
