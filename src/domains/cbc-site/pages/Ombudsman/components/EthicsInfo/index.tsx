import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';
import MainButton from '../../../../components/Buttons/MainButton';
import { useNavigate } from 'react-router-dom';

type Props = {
  isMobile: boolean;
  title: string;
  content: string;
  subContent?: string;
  ouvidoriaIcon: string | React.ReactNode;
};

const EthicsInfo: React.FC<Props> = ({
  isMobile,
  title,
  content,
  subContent,
  ouvidoriaIcon,
}) => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={isMobile ? 'sm' : false}
      disableGutters={isMobile ? false : true}
    >
      <Stack
        bgcolor="#F1F1F1"
        sx={{ p: { xs: 4, md: 6 }, borderRadius: 2 }}
        alignItems={'center'}
      >
        <Stack spacing={4} maxWidth={{ xs: '100%', md: '70%' }}>
          <ColoredTitle title={title} color="typeText.tertiary" />
          <TextContent content={content} />
          <Box>
            {subContent && (
              <TextContent content={subContent} marginBottom={2} />
            )}
            <MainButton
              label="Clique aqui para acessar o canal"
              onClick={() => navigate('/canal-de-etica')}
              startIcon={
                <Box
                  component="img"
                  src={
                    typeof ouvidoriaIcon === 'string'
                      ? ouvidoriaIcon
                      : undefined
                  }
                />
              }
              isDark
              sx={{ px: 4, py: 1 }}
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default EthicsInfo;
