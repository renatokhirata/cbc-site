import { Stack, Box } from '@mui/material';
import { IFederation } from '../../../../interfaces/Federations/IFederation';
import FederationImage from '../FederationImage';
import FederationInfoRow from '../FederationInfoRow';
import SocialIcons from '../../../../components/SocialIcons';
import TextContent from '../../../../components/TextContent';
import ColoredTitle from '../../../../components/ColoredTitle';

interface FederationDetailsProps {
  stateData: IFederation;
}

const FederationDetails = ({ stateData }: FederationDetailsProps) => {
  const renderChannelsRow = () => {
    const renderChannels = () => {
      if (Array.isArray(stateData?.channels)) {
        return (
          <Stack spacing={0.5}>
            {stateData.channels.map((channel, index) => (
              <TextContent
                marginBottom={0}
                key={index}
                content={` ${channel}`}
              />
            ))}
          </Stack>
        );
      }

      if (typeof stateData?.channels === 'string' && stateData.channels) {
        return (
          <TextContent marginBottom={0} content={` ${stateData.channels}`} />
        );
      }

      return null;
    };

    return (
      <Stack direction={'row'} spacing={1} alignItems="flex-start">
        <Box sx={{ minWidth: 120 }}>
          <Stack direction={'row'} spacing={1} alignItems="flex-start">
            <Box sx={{ minWidth: 120 }}>
              <ColoredTitle
                title={'Canais'}
                fontSize={'16px'}
                color="typeText.tertiary"
              />
            </Box>
            <SocialIcons isFederation />
          </Stack>
        </Box>
        {renderChannels()}
      </Stack>
    );
  };

  return (
    <Stack
      alignItems="flex-start"
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      sx={{ width: '100%' }}
    >
      <FederationImage
        imageUrl={stateData.image_url}
        stateName={stateData.state}
        federationName={stateData.name}
      />

      <Stack
        spacing={1}
        alignItems="flex-start"
        justifyContent={'space-between'}
        flex={1}
        minWidth={0}
        height={'100%'}
        sx={{
          width: '100%',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        <FederationInfoRow label="Presidente" content={stateData.president} />
        <FederationInfoRow label="Endereço" content={stateData.address} />
        <FederationInfoRow label="CEP" content={stateData.cep} />
        <FederationInfoRow label="Cidade/UF" content={stateData.cityUf} />
        <FederationInfoRow label="Telefone" content={stateData.phone} />
        <FederationInfoRow label="Email" content={stateData.email} />
        <FederationInfoRow label="Site" content={stateData.website} />
        {renderChannelsRow()}
      </Stack>
    </Stack>
  );
};

export default FederationDetails;
