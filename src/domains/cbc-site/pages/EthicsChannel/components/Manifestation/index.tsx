import { Box, Container, Grid, Stack } from '@mui/material';

import ouvidoriaIcon from '../../../../../../assets/icons/ouvidoriaIcon.svg';
import celPhoto from '../../../../../../assets/images/Ombudsman/celPhoto.svg';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../../../components/Buttons/MainButton';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';

const Manifestation = () => {
  const navigate = useNavigate();

  return (
    <Box width="100%" bgcolor={'#F1F1F1'} pt={4}>
      <Container maxWidth="xl">
        <Grid container>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 10 }}
            pt={8}
          >
            <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Stack>
                <Stack
                  sx={{ borderRadius: 2, height: '100%' }}
                  alignItems={'stretch'}
                >
                  <Stack
                    spacing={2}
                    maxWidth={{ xs: '100%', lg: '80%' }}
                    justifyContent={'space-between'}
                    flexGrow={1}
                    sx={{ height: '100%' }}
                    py={{ xs: 4, md: 0 }}
                  >
                    <ColoredTitle
                      title={'Envie sua manifestação'}
                      color="typeText.tertiary"
                    />
                    <TextContent
                      content={
                        'Esse é um portal seguro e independente para registro de informações de violação de condutas éticas ou descumprimento das legislações. \n\nGarantimos o anonimato e segurança da identidade do denunciante.'
                      }
                    />
                    <Box>
                      <MainButton
                        sx={{
                          px: 2,
                          width: { xs: '100%', md: 'auto' },
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          whiteSpace: 'nowrap',
                        }}
                        label={'Clique aqui para acessar o canal'}
                        onClick={() => navigate('/canal-de-etica')}
                        startIcon={
                          <Box
                            component="img"
                            src={ouvidoriaIcon}
                            alt=""
                            sx={{ width: 32, height: 32, objectFit: 'contain' }}
                          />
                        }
                        isDark
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid
              size={{ xs: 12, md: 8, lg: 3 }}
              sx={{
                order: { xs: 1, md: 2 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={celPhoto}
                alt="Telefone"
                sx={{
                  width: { xs: '64%', md: '100%' },
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Manifestation;
