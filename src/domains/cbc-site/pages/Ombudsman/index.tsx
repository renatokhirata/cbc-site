import { Grid, Stack } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import ouvidoriaHeaderIcon from '../../../../assets/icons/ouvidoriaHeaderIcon.svg';
import ouvidoriaIcon from '../../../../assets/icons/ouvidoriaIcon.svg';
import womanPhoto from '../../../../assets/images/Ombudsman/womanPhoto.svg';
import celPhoto from '../../../../assets/images/Ombudsman/celPhoto.svg';
import womanPhotoMobile from '../../../../assets/images/Ombudsman/womanPhotoMobile.svg';
import useBreakpoint from '../../hooks/useBreakpoint';
import OmbudsmanImage from './components/MediaImage';
import OmbudsmanIntro from './components/OmbudsmanIntro';
import EthicsInfo from './components/EthicsInfo';
import OmbudsmanInfo from './components/OmbudsmanInfo';

const Ombudsman = () => {
  const isMobile = useBreakpoint('md');

  return (
    <>
      <PageHeader title="Ouvidoria" icon={ouvidoriaHeaderIcon} />
      <Stack width="100%" spacing={8} mb={8}>
        <Grid container alignItems="flex-start" spacing={0}>
          <Stack direction={{ xs: 'column', md: 'row' }} width="100%">
            <Grid
              size={{ xs: 12, lg: 5.5 }}
              sx={{
                order: { xs: 2, md: 1 },
                display: { xs: 'none', md: 'block' },
              }}
            >
              <OmbudsmanImage src={womanPhoto} alt="Woman" />
            </Grid>

            <Grid size={{ xs: 12, lg: 6.5 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Stack
                width="100%"
                alignItems={'center'}
                justifyContent={'center'}
              >
                <OmbudsmanIntro
                  isMobile={isMobile}
                  womanPhoto={womanPhoto}
                  womanPhotoMobile={womanPhotoMobile}
                />
                <OmbudsmanInfo isMobile={isMobile} />
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid container>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 10 }}
            width="100%"
          >
            <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <EthicsInfo
                title='"2) O Canal de Ética (Denúncias)"'
                content='"O Canal de Ética da CBC é um espaço para denúncias de forma independente, sigilosa e imparcial. Um ambiente seguro que está disponível para os públicos externo e interno da CBC, e funciona 24 horas por dia, 7 dias da semana."'
                isMobile={isMobile}
                ouvidoriaIcon={ouvidoriaIcon}
                subContent='"Acesse o nosso Canal de Ética/Denúncias!"'
              />
            </Grid>

            <Grid
              size={{ xs: 12, md: 8, lg: 3 }}
              sx={{
                order: { xs: 1, md: 2 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <OmbudsmanImage
                src={celPhoto}
                alt="Telephone"
                sx={{
                  width: { xs: '64%', md: '100%' },
                  objectFit: 'contain',
                }}
              />
            </Grid>
          </Stack>
        </Grid>
      </Stack>
    </>
  );
};

export default Ombudsman;
