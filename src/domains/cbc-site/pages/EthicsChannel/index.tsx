import { Container, Stack } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import canalDeEticaIcon from '../../../../assets/icons/canalDeEticaIcon.svg';
import IntroSection from './components/IntroSection';
import WhatCanBeReported from './components/WhatCanBeReported';
import Manifestation from './components/Manifestation';
import Committee from './components/Committee';

import AboutEthics from './components/AboutEthics';
import AboutProcess from './components/AboutProcess';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';

const EthicsChannel = () => {
  return (
    <Stack>
      <PageHeader title={'Canal de Ética'} icon={canalDeEticaIcon} />
      <IntroSection />

      <AboutEthics />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <WhatCanBeReported />

        <AboutProcess />
      </Container>

      <Manifestation />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Committee />
        <FrequentlyAskedQuestions />
      </Container>
    </Stack>
  );
};

export default EthicsChannel;
