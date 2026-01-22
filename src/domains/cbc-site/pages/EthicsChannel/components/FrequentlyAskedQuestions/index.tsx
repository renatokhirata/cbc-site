import { Box, Grid, Stack } from '@mui/material';

import faqEthicsImg from '../../../../../../assets/images/faqEthicsImg.svg';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';

const FrequentlyAskedQuestions = () => {
  return (
    <Grid container>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: -16 }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        pt={{ xs: 4, md: 8 }}
        sx={{ width: '100%' }}
      >
        <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
          <Stack>
            <Stack
              sx={{ borderRadius: 2, height: '100%' }}
              alignItems={'stretch'}
            >
              <Stack
                spacing={4}
                justifyContent={'space-between'}
                flexGrow={1}
                sx={{ height: '100%', width: '100%' }}
              >
                <ColoredTitle
                  title={'Dúvidas frequentes'}
                  color="typeText.tertiary"
                />
                <Stack spacing={6}>
                  <Box
                    sx={{
                      bgcolor: '#F1F1F1E5',
                      p: 3.6,
                      borderRadius: 2,
                      width: '100%',
                      zIndex: 1,
                    }}
                  >
                    <Stack spacing={2}>
                      <ColoredTitle
                        title={'Preciso me identificar?'}
                        fontSize={{ xs: 16, md: 20 }}
                      />
                      <TextContent
                        content={
                          'Não. O canal aceita denúncias anônimas.\n\n Caso opte por se identificar, garantimos o sigilo de seus dados.'
                        }
                        marginBottom={0}
                      />
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: '#F1F1F1E5',
                      p: 3.6,
                      borderRadius: 2,
                      width: '100%',
                      zIndex: 1,
                    }}
                  >
                    <Stack spacing={2}>
                      <ColoredTitle
                        title={'Serei informado do andamento?'}
                        fontSize={{ xs: 16, md: 20 }}
                      />
                      <TextContent
                        content={
                          'Sim. Se você deixar um meio de contato, \n\npoderá acompanhar o status da denúncia.'
                        }
                        marginBottom={0}
                      />
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: '#F1F1F1E5',
                      p: 3.6,
                      borderRadius: 2,
                      width: '100%',
                      zIndex: 1,
                    }}
                  >
                    <Stack spacing={2}>
                      <ColoredTitle
                        title={'Existe alguma retaliação por denunciar?'}
                        fontSize={{ xs: 16, md: 20 }}
                      />
                      <TextContent
                        content={
                          'Não. A CBC condena qualquer ato de retaliação\n\ncontra os denunciantes de boa-fé'
                        }
                        marginBottom={0}
                      />
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          size={{ xs: 12, md: 8, lg: 7 }}
          sx={{
            order: { xs: 1, md: 2 },
            display: { xs: 'none', md: 'flex' },
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            pr: { xs: 0, md: 0 },
          }}
        >
          <Box
            component="img"
            src={faqEthicsImg}
            alt="Dúvidas frequentes sobre o Canal de Ética"
            sx={{
              width: { xs: '64%', md: '100%' },
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Stack>
    </Grid>
  );
};

export default FrequentlyAskedQuestions;
