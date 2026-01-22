import { Box, Container, Stack } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';
import { AchievementsSection } from '../../../../interfaces/Modality/IModality';
import AchievementsTimeline from './AchievementsTimeline';
import AchievementsTimelineAccordion from '../../../../components/Accordion/AchievementsTimelineAccordion';

interface AchievementsSectionProps {
  data: AchievementsSection;
}

const AchievementsDisplay = ({ data }: AchievementsSectionProps) => {
  return (
    <Box bgcolor={'customBackground.secondary'} sx={{ py: 4 }}>
      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', pt: { xs: 3, md: 6 } }}
      >
        <Stack spacing={2}>
          <ColoredTitle
            title={data.title}
            color={'typeText.yellow'}
            fontWeight={700}
          />

          <TextContent
            content={
              'A CBC acumula resultados expressivos nas principais competições nacionais e internacionais, com atletas brasileiros marcando presença em Campeonatos Mundiais, Jogos Pan-Americanos e Jogos Olímpicos.'
            }
            color={'typeText.primary'}
          />

          <TextContent
            content={'Confira as conquistas mais recentes:'}
            color={'typeText.primary'}
            fontWeight={600}
          />
        </Stack>
        <Stack spacing={2}>
          <AchievementsTimeline modalities={data.modalities} />
          <AchievementsTimelineAccordion modalities={data.modalities} />
          {/* <MainButton
            label={'Ver mais conquistas'}
            onClick={() => {}}
            sx={{ color: 'typeText.primary', border: '1px solid #217EFD' }}
          /> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default AchievementsDisplay;
