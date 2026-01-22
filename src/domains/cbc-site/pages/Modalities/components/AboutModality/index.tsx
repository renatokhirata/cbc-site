import { useState } from 'react';
import MainButton from '../../../../components/Buttons/MainButton';
import ColoredTitle from '../../../../components/ColoredTitle';
import { Stack, Box } from '@mui/material';
import ModalityModalContent from '../../../../components/Modal/Modalities';
import Modal from '../../../../components/Modal';
import { Modality } from '../../../../interfaces/Modality/IModality';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import TextContent from '../../../../components/TextContent';
import { formatModalityName } from '../../../../../../shared/utils/formatModalityName';

export default function AboutModality({ data }: { data: Modality | null }) {
  const isMobile = useBreakpoint('md');
  const [openModal, setOpenModal] = useState({ open: false, modalityId: '' });

  const handleLearnMore = (id: string) => {
    setOpenModal({ open: true, modalityId: id });
  };

  if (!data?.modalityName) {
    return <></>;
  }

  if (isMobile) {
    return (
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            height: 'auto',
            width: '100%',
            py: 4,
            px: 2,
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
            spacing={-0.5}
          >
            <TextContent
              content={'Conheça a modalidade'}
              color="typeText.primary"
              marginBottom={0}
            />
            <ColoredTitle
              title={
                formatModalityName(
                  data?.modalityName,
                  data?.modalityName,
                  true,
                ) || ''
              }
              color={'typeText.primary'}
              fontSize={'32px'}
              fontWeight={700}
            />

            <Box pt={1.4}>
              <MainButton
                isDark={true}
                label={'Quero conhecer'}
                onClick={() => handleLearnMore(data.modalityId)}
              />
            </Box>
          </Stack>

          {data?.aboutBanner && (
            <>
              <Box
                component="img"
                src={data.aboutBanner}
                alt={`Imagem da modalidade ${data.modalityName}`}
                sx={{
                  position: 'absolute',
                  right: -10,
                  top: 0,
                  bottom: 0,
                  height: '100%',
                  width: 'auto',
                  objectFit: 'fill',
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
                    'linear-gradient(to right, rgba(92,181,175,0.85) 0%, rgba(92,181,175,0.85) 100%)',
                  zIndex: 1,
                }}
              />
            </>
          )}
        </Box>
        <Modal
          open={openModal.open}
          onClose={() => setOpenModal({ open: false, modalityId: '' })}
        >
          <ModalityModalContent modalityId={openModal.modalityId} />
        </Modal>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          background:
            'linear-gradient(to right, #5CB5AF 100%, rgba(255,255,255,0) 0%)',
          height: 'auto',
          width: '100%',
          borderRadius: 4,
          py: 4,
          px: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Stack
          height={'100%'}
          alignItems={'flex-start'}
          sx={{ zIndex: 2 }}
          spacing={-0.5}
        >
          <TextContent
            content={'Conheça a modalidade'}
            color="typeText.primary"
            marginBottom={0}
          />
          <ColoredTitle
            title={
              formatModalityName(
                data?.modalityName,
                data?.modalityName,
                true,
              ) || ''
            }
            color={'typeText.primary'}
            fontWeight={700}
          />
          <Box pt={1.4}>
            <MainButton
              isDark={true}
              label={'Quero conhecer'}
              onClick={() => handleLearnMore(data.modalityId)}
            />
          </Box>
        </Stack>

        {data?.aboutBanner && (
          <Box
            component={'img'}
            src={data.aboutBanner}
            alt={`Imagem da modalidade ${data.modalityName}`}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              height: '100%',
              width: 'auto',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Modal
        open={openModal.open}
        onClose={() => setOpenModal({ open: false, modalityId: '' })}
      >
        <ModalityModalContent modalityId={openModal.modalityId} />
      </Modal>
    </Box>
  );
}
