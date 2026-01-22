import { Container, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cardImage1 from '../../../../../assets/images/pages/ethicsOffice/card1.svg';
import cardImage2 from '../../../../../assets/images/pages/ethicsOffice/card2.svg';
import ColoredTitle from '../../../components/ColoredTitle';
import TextContent from '../../../components/TextContent';

const InfoEthicsCardGrid = () => {
  const Card1Sx = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 4,
    borderRadius: 4,
    cursor: 'default',
  } as const;

  const Card2Sx = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 4,
    borderRadius: 4,
    cursor: 'default',
  } as const;

  const action1Sx = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    mt: { xs: -4, md: -8 },
  } as const;

  const action2Sx = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  } as const;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={Card1Sx}>
          <Stack
            sx={{ ...action1Sx, flex: 1, py: 4 }}
            alignItems={'center'}
            spacing={2}
            justifyContent={'space-between'}
          >
            <CardMedia
              component="img"
              width="100%"
              image={cardImage1}
              sx={{ p: { xs: 6, md: 10 } }}
              alt="card image 1"
            />
            <CardContent>
              <Container maxWidth="md">
                <Stack spacing={2}>
                  <ColoredTitle
                    title={'Comitê de Ética e<br/> Integridade da CBC'}
                    color="typeText.tertiary"
                  />
                  <TextContent
                    content={
                      'Resolução de Diretoria 001/2016 da CBC. Comitê de Ética e Integridade da CBC para aplicação do seu Código de Ética, e o desenvolvimento de atividades educacionais, preventivas e repressivas relacionadas a temática de combate ao assédio, abuso, doping, manipulação de resultados, racismo e infrações em geral, em colaboração com o Ministério Público do Trabalho, ABCD, Ministério do Esporte e outras organizações de interesse público.'
                    }
                  />
                </Stack>
              </Container>
            </CardContent>
          </Stack>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
        <Card sx={Card2Sx}>
          <Stack
            sx={{ ...action2Sx, flex: 1 }}
            alignItems={'flex-start'}
            justifyContent={'space-around'}
            spacing={2}
          >
            <CardMedia
              component="img"
              width="100%"
              image={cardImage2}
              sx={{ px: { xs: 4, md: 6 }, pt: { xs: 4, md: 20 } }}
              alt="card image 2"
            />
            <CardContent sx={{ mt: -6 }}>
              <Container maxWidth="md">
                <Stack spacing={2}>
                  <ColoredTitle
                    title={'Organização <br />Antidoping da CBC'}
                    color="typeText.tertiary"
                  />
                  <TextContent
                    content={
                      'Resolução de Diretoria 001/2018 da CBC. Organização Antidoping da CBC, submetida ao Comitê de ètica e Integridade, para o desenvolvimento de atividades educacionais e preventivas relacionadas a temática de doping na esfera de atuação da CBC em colaboração com a ABCD, Ministério Público do Trabalho e outras organizações de interesse público.'
                    }
                  />
                </Stack>
              </Container>
            </CardContent>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoEthicsCardGrid;
