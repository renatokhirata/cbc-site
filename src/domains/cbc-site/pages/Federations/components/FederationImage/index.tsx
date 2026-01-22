import { Stack, Box } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';

interface FederationImageProps {
  imageUrl: string;
  stateName: string;
  federationName: string;
}

const FederationImage = ({
  imageUrl,
  stateName,
  federationName,
}: FederationImageProps) => {
  return (
    <Stack spacing={3} width={{ xs: '100%', md: 240 }}>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          height: '100%',
          minHeight: 204,
          width: { xs: '100%', md: 204 },
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
          p: 1,
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt="Federações do Ciclismo Brasileiro"
          sx={{ objectFit: 'cover', width: '100%' }}
        />
      </Stack>
      <Stack spacing={0.5} alignItems="flex-start">
        <ColoredTitle
          pt={0.5}
          title={stateName}
          fontSize={'16px'}
          color="typeText.tertiary"
        />
        <ColoredTitle
          pt={0.5}
          title={federationName.toUpperCase()}
          lineHeight={'36px'}
          fontSize={'28px'}
        />
      </Stack>
    </Stack>
  );
};

export default FederationImage;
