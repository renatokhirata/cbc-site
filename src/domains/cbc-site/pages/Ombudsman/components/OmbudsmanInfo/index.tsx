import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';
import OmbudsmanForm from '../OmbudsmanForm';

type Props = {
  isMobile: boolean;
};

const OmbudsmanInfo: React.FC<Props> = ({ isMobile }) => {
  return (
    <Container
      maxWidth={isMobile ? 'sm' : false}
      disableGutters={isMobile ? false : true}
    >
      <Stack
        bgcolor="#F1F1F1"
        sx={{ p: 6, borderRadius: 2, ml: { xs: 0, lg: -8 } }}
      >
        <Stack maxWidth={{ xs: '100%', xl: '70%' }} spacing={4}>
          <ColoredTitle
            title="1) A Ouvidoria da CBC "
            color="typeText.tertiary"
            lineHeight={1}
          />
          <TextContent
            content=" É o canal de comunicação e relacionamento direto com suas Federações Filiadas, Clubes, Associações,Atletas e toda a sociedade. Para informações, sugestões,elogios e reclamações sobre tudo que envolva a CBC,utilize o e-mail: **ouvidoria@cbc.esp.br** ou envie sua mensagem pelo formulário abaixo."
            strongColor="typeText.tertiary"
          />

          <Box display={{ xs: 'none', md: 'block' }}>
            <Stack spacing={1}>
              <ColoredTitle
                title="Entre em contato"
                fontSize="1em"
                color="typeText.tertiary"
              />
              <OmbudsmanForm />
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default OmbudsmanInfo;
