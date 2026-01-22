import { Box, Container, Stack } from '@mui/material';

import ethicsBanner from '../../../../../../assets/images/banners/desktop/ethicsBanner.svg';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';

const IntroSection = () => {
  return (
    <>
      <Box
        component={'img'}
        src={ethicsBanner}
        alt="Banner do Canal de Ética"
        sx={{ objectFit: 'contain' }}
      />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Stack spacing={2}>
          <ColoredTitle
            title={'Central de Ética CBC'}
            color="typeText.tertiary"
          />
          <TextContent
            content={
              'Espaço seguro, sigiloso e acessível para denúncias e manifestações.'
            }
          />
        </Stack>
      </Container>
    </>
  );
};

export default IntroSection;
