import { Box, Grid, Stack } from '@mui/material';

import eticaComiteImg from '../../../../../../assets/images/eticaComiteImg.svg';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../../../components/Buttons/MainButton';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';

const Committee = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 6 }}
        width="100%"
        sx={{ alignItems: 'stretch' }}
      >
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            order: 1,
          }}
        >
          <Box
            component="img"
            src={eticaComiteImg}
            alt="Comitê de Ética e Integridade"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: 2,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ order: 2 }}>
          <Stack sx={{ height: '100%' }}>
            <Stack
              sx={{ borderRadius: 2, height: '100%' }}
              alignItems={'stretch'}
            >
              <Stack
                spacing={2}
                maxWidth={{ xs: '100%', lg: '100%' }}
                justifyContent={'space-between'}
                flexGrow={1}
                sx={{ height: '100%' }}
              >
                <ColoredTitle
                  title={'Comitê de Ética e Integridade'}
                  color="typeText.tertiary"
                />
                <TextContent
                  content={
                    'As denúncias são recebidas e avaliadas por um Comitê independente, com autonomia para conduzir apurações e recomendar medidas corretivas ou disciplinares. Para saber mais sobre o funcionamento e composição do comitê, acesse:'
                  }
                />
                <Box>
                  <MainButton
                    sx={{
                      px: 8,
                      py: { xs: 2, md: 1 },
                      width: { xs: '100%', md: 'auto' },
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap',
                    }}
                    label={'Conheça o Comitê de Ética e Integridade'}
                    onClick={() => navigate('/central-de-etica')}
                    isDark
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default Committee;
