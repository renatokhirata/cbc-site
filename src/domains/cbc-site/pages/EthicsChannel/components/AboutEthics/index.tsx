import { Box, Stack, Container, Grid } from '@mui/material';
import aboutEthics from '../../../../../../assets/images/aboutEthics.svg';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import TextContent from '../../../../components/TextContent';
import ColoredTitle from '../../../../components/ColoredTitle';

const AboutEthics = () => {
  const isMobile = useBreakpoint('md');
  return (
    <Grid container sx={{ minHeight: 400 }}>
      <Grid
        size={{ xs: 12, md: 5.5 }}
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        <Box
          component="img"
          src={aboutEthics}
          alt="Sobre o Canal de Ética"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6.5 }}
        sx={{ display: 'flex', alignItems: 'stretch', width: '100%' }}
      >
        <Container
          maxWidth={!isMobile ? 'xl' : false}
          disableGutters={isMobile}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            pl: { md: 2, xl: 6 },
            bgcolor: '#F5F5F5',
          }}
        >
          <Stack
            width={'100%'}
            height={'100%'}
            spacing={{ xs: 2, md: 3 }}
            sx={{ justifyContent: 'center' }}
            pl={{ xs: 2, xl: 0 }}
            pr={{ xs: 0, md: 16 }}
            py={{ xs: 4, xl: 0 }}
          >
            <ColoredTitle
              title={'O que é o Canal de Ética?'}
              color="typeText.tertiary"
            />
            <TextContent
              content={
                'O Canal de Ética da Confederação Brasileira de Ciclismo (CBC) é um espaço exclusivo e confidencial, criado para receber denúncias, reclamações ou relatos sobre condutas que violem os princípios éticos e legais que regem nossa atuação.\n\n Este canal está disponível para atletas, comissões técnicas, árbitros, colaboradores, dirigentes, patrocinadores e o público em geral e pode ser utilizado de forma anônima ou identificada. \n\nNosso objetivo é promover um ambiente íntegro, seguro e transparente dentro e fora das competições.'
              }
              marginBottom={3}
            />
          </Stack>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AboutEthics;
