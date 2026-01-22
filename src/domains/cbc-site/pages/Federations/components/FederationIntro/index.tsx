import { Stack } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';

const FederationIntro = () => {
  return (
    <Stack spacing={1}>
      <ColoredTitle
        title={'Federações do Ciclismo Brasileiro'}
        color="typeText.tertiary"
      />
      <TextContent
        content={
          'Escolha o Estado e descubra as federações que representam e organizam o ciclismo em todo o Brasil.'
        }
        marginBottom={0}
      />
    </Stack>
  );
};

export default FederationIntro;
