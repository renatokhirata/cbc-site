import { Box, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import infoButtonIcon1 from '../../../../assets/icons/infoButtonIcon1.svg';
import infoButtonIcon2 from '../../../../assets/icons/infoButtonIcon2.svg';
import infoButtonIcon3 from '../../../../assets/icons/infoButtonIcon3.svg';
import infoButtonIcon4 from '../../../../assets/icons/infoButtonIcon4.svg';

import InfoButton from '../Buttons/InfoButton';
import Modal from '../Modal';
import InfoModalContent from '../Modal/Infos/Index';
import { InfoResume } from '../../interfaces/Info/Info';
import { infoDataService } from '../../services';

const InfoButtonGrid = ({ slug }: { slug: string }) => {
  const [modalOpen, setModalOpen] = useState({
    open: false,
    type: '',
    icon: '',
  });
  const [infoList, setInfoList] = useState<InfoResume[]>([]);

  const handleOpenModal = (type: string, icon: string) => {
    setModalOpen({ open: true, type, icon });
  };

  const handleCloseModal = () => {
    setModalOpen({ open: false, type: '', icon: '' });
  };

  useEffect(() => {
    const fetchInfoData = async () => {
      try {
        if (modalOpen.open && modalOpen.type) {
          const response = await infoDataService.getByCategory(
            modalOpen.type.toLowerCase(),
          );
          setInfoList(response);
        } else {
          setInfoList([]);
        }
      } catch (error) {
        console.error('Error fetching info data:', error);
      }
    };

    fetchInfoData();
  }, [modalOpen]);

  const navigate = useNavigate();

  return (
    <Grid container spacing={{ xs: 2, md: 6 }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <Stack
          spacing={{ xs: 2, md: 6 }}
          sx={{ height: '100%', width: '100%' }}
          direction={{ xs: 'column', md: 'row' }}
        >
          <InfoButton
            title="Rankings"
            subtitle={
              'Desempenho e conquistas no \n\ncenário nacional e internacional.'
            }
            icon={
              <Box
                component="img"
                src={infoButtonIcon1}
                alt="Ícone de Troféu"
                sx={{
                  width: { xs: 20, md: 46 },
                  height: '100%',
                  maxHeight: 52,
                }}
              />
            }
            color="default"
            onClick={() => handleOpenModal('Rankings', infoButtonIcon1)}
          />
          <InfoButton
            title="Locais de Prática"
            subtitle={'Confira a lista das pistas \n\npara praticar Estrada.'}
            onClick={() => navigate('/locais-de-pratica')}
            icon={
              <Box
                component="img"
                src={infoButtonIcon2}
                alt="Ícone de Pista"
                sx={{
                  width: { xs: 26, md: 64 },
                  height: '100%',
                  maxHeight: 56,
                }}
              />
            }
            color="default"
          />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <Stack
          spacing={{ xs: 2, md: 6 }}
          sx={{ height: '100%', width: '100%' }}
          direction={{ xs: 'column', md: 'row' }}
        >
          <InfoButton
            title="Resultados"
            subtitle={
              'Confira e fique por dentro \n\ndos resultados da modalidade.'
            }
            icon={
              <Box
                component="img"
                src={infoButtonIcon3}
                alt="Ícone 2"
                sx={{
                  width: { xs: 20, md: 48 },
                  height: '100%',
                  maxHeight: 52,
                }}
              />
            }
            color="default"
            onClick={() => handleOpenModal('Resultados', infoButtonIcon3)}
          />
          <InfoButton
            title="Regulamento"
            subtitle={
              'Veja as regras que compõem \n\no regulamento da modalidade.'
            }
            icon={
              <Box
                component="img"
                src={infoButtonIcon4}
                alt="Ícone 2"
                sx={{
                  width: { xs: 20, md: 52 },
                  height: '100%',
                  maxHeight: 52,
                }}
              />
            }
            color="default"
            onClick={() => handleOpenModal('Regulamento', infoButtonIcon4)}
          />
        </Stack>
      </Grid>
      <Modal open={modalOpen.open} onClose={handleCloseModal}>
        <InfoModalContent
          infoList={infoList}
          title={modalOpen.type}
          icon={modalOpen.icon}
          slug={slug}
        />
      </Modal>
    </Grid>
  );
};

export default InfoButtonGrid;
