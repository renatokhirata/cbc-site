import React from 'react';
import { Box, Container } from '@mui/material';
import TextContent from '../../../../components/TextContent';

type Props = {
  isMobile: boolean;
  womanPhoto: string;
  womanPhotoMobile: string;
};

const OmbudsmanIntro: React.FC<Props> = ({ isMobile, womanPhotoMobile }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ p: 4, ml: { xs: 0, md: 2 } }}>
        <TextContent
          content={
            'Olá, temos dois caminhos para que todos \n\npossam se comunicar com a **CBC**:'
          }
        />
      </Container>

      <Box display={{ xs: 'block', md: 'none' }} sx={{ px: { md: 2 } }}>
        <Box
          component="img"
          src={isMobile ? womanPhotoMobile : undefined}
          alt="Woman"
          width="100%"
          mb={-0.5}
        />
      </Box>
    </>
  );
};

export default OmbudsmanIntro;
