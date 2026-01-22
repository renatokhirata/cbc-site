import { Box, Container, Grid, Stack } from '@mui/material';
import DateFilter from '../../Filter/Date';
import { Modality } from '../../../interfaces/Modality/IModality';
import ColoredTitle from '../../ColoredTitle';
import { useEffect, useState } from 'react';
import { modalityService } from '../../../services';
import useBreakpoint from '../../../hooks/useBreakpoint';
import TextContent from '../../TextContent';
import ModalityInfoList from '../../../pages/Modalities/components/ModalityInfoList';
import { useSearch } from '../../../hooks/useSearch';

interface InfoModalContentProps {
  modalityId?: string;
}

const ModalityModalContent: React.FC<InfoModalContentProps> = ({
  modalityId,
}) => {
  const isMobile = useBreakpoint('md');
  const [modalityModalData, setModalityModalData] = useState<Modality | null>(
    null,
  );
  const { setSearchTerm, filteredItems } = useSearch(
    modalityModalData?.infos || [],
    ['title', 'description'],
  );

  let titles: string[] = [];

  if (
    modalityModalData?.modalityName &&
    modalityModalData.modalityName.includes(' de ')
  ) {
    const parts = modalityModalData.modalityName.split(' de ');
    titles = parts.map((part, idx) => (idx === 0 ? part : `de ${part}`));
  } else {
    const parts = modalityModalData?.modalityName.split(' ') || [];
    parts.map((part, index) => {
      titles[index] = part;
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      if (modalityId) {
        try {
          const response = await modalityService.getById(modalityId);
          setModalityModalData(response);
        } catch (error) {
          console.error('Error fetching modality data:', error);
        }
      }
    };
    fetchData();
  }, [modalityId]);

  return (
    <Stack
      spacing={0}
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        height: '100%',
        minHeight: 0,
      }}
    >
      <Stack
        sx={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          height: '100%',
          minHeight: 0,
        }}
      >
        <Box
          component="img"
          src={modalityModalData?.modalBanner}
          alt={`Banner da modalidade ${modalityModalData?.modalityName}`}
          sx={{
            width: '100%',
            height: 520,
            objectFit: 'cover',
            objectPosition: 'top',
            mb: 4,
            zIndex: 1,
          }}
        />
        <Container maxWidth="xl" sx={{ py: { xs: 0, md: 4 } }}>
          <Stack spacing={12} pr={{ xs: 0, md: '8%' }} pl={{ xs: 0, md: '2%' }}>
            <Grid container spacing={{ xs: 0, md: 4 }}>
              <Grid size={{ xs: 12, md: 5.5 }}>
                <Stack spacing={{ xs: -1, md: -2 }}>
                  <ColoredTitle
                    fontSize={{ xs: '18px', md: '24px', lg: '36px' }}
                    fontWeight={400}
                    color="typeText.default"
                    title={'Conheça a modalidade'}
                    marginBottom={0}
                  />

                  <Stack
                    direction={{ xs: 'row', md: 'column' }}
                    spacing={0}
                    flexWrap="wrap"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    {titles.map((part, index) => (
                      <ColoredTitle
                        key={index}
                        title={part}
                        fontSize={{ xs: '32px', md: '64px', lg: '92px' }}
                        lineHeight={1.2}
                        fontWeight={700}
                        color={'typeText.default'}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6.5 }} pt={2} pb={3}>
                <TextContent
                  content={modalityModalData?.modalityDescription || ''}
                />
              </Grid>
            </Grid>
            {modalityModalData?.modalityName === 'Resultados' && (
              <DateFilter
                setSearchTerm={(term) => {
                  setSearchTerm(term);
                }}
              />
            )}
            {!isMobile && <ModalityInfoList infoList={filteredItems || []} />}
          </Stack>
        </Container>
        {isMobile && <ModalityInfoList infoList={filteredItems || []} />}
      </Stack>
    </Stack>
  );
};

export default ModalityModalContent;
