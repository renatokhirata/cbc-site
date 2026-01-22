import { Stack, Box } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';
import processImage1 from '../../../../../../assets/icons/ethcisIcon1.svg';
import processImage2 from '../../../../../../assets/icons/ethcisIcon2.svg';
import processImage3 from '../../../../../../assets/icons/ethcisIcon3.svg';
import processImage4 from '../../../../../../assets/icons/ethcisIcon4.svg';

const AboutProcess = () => {
  return (
    <Stack
      sx={{
        py: 8,
      }}
    >
      <Stack spacing={6}>
        <ColoredTitle
          title={'Como funciona o processo?'}
          color="typeText.tertiary"
        />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ position: 'relative' }}
        >
          <Stack flex={1} spacing={4} direction={'row'} alignItems="center">
            <Box
              component={'img'}
              src={processImage2}
              alt="Process Image"
              width={72}
            />
            <TextContent
              content={
                'Envio da denúncia \n\n(anônima ou identificada) \n\npor meio do canal abaixo.'
              }
              marginBottom={0}
            />
          </Stack>
          <Stack flex={1} spacing={4} direction={'row'} alignItems="center">
            <Box
              component={'img'}
              src={processImage4}
              alt="Process Image"
              width={72}
            />
            <TextContent
              content={
                'Análise do Comitê de Ética\n\n e Integridade, de forma \n\nindependente e imparcial.'
              }
              marginBottom={0}
            />
          </Stack>
          <Stack flex={1} spacing={4} direction={'row'} alignItems="center">
            <Box
              component={'img'}
              src={processImage3}
              alt="Process Image"
              width={76}
            />
            <TextContent
              content={
                'Apuração dos fatos e medidas\n\n cabíveis, com sigilo e \n\nrespeitando as partes.'
              }
              marginBottom={0}
            />
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          width={'100%'}
          justifyContent="center"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          mt={{ xs: 4, md: 40 }}
          p={{ xs: 2, md: 6 }}
          sx={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)', borderRadius: 2 }}
        >
          <Box
            component={'img'}
            src={processImage1}
            alt="Process Image"
            width={{ xs: 100, md: 164 }}
          />
          <Stack spacing={2} pl={{ xs: 0, md: 4 }} justifyContent="center">
            <ColoredTitle
              title={'Compromisso com a confidencialidade'}
              color="typeText.tertiary"
            />
            <TextContent
              content={
                'Todas as manifestações são tratadas com estrito sigilo. A identidade do \n\ndenunciante, quando informada, é protegida em todas as etapas do processo. \n\nNenhuma retaliação será tolerada contra quem usar este canal de boa fé.'
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutProcess;
