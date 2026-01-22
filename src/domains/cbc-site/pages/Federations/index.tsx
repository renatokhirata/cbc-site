import { Stack, Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { StateType } from '../../../../shared/constants/regions';
import { brazilianMap } from '../../../../shared/constants/regions';
import PageHeader from '../../components/PageHeader';
import federationsIcon from '../../../../assets/icons/federationsIcon.svg';
import BrazilianMap from '../../components/BrazilianMap';
import GenericSelect from '../../components/Select/GenericSelect';
import { federations } from '../../../../shared/constants/regions';
import { IFederation } from '../../interfaces/Federations/IFederation';
import FederationIntro from './components/FederationIntro';
import FederationDetails from './components/FederationDetails';

const Federations = () => {
  const defaultState = brazilianMap.find((s) => s.id === 'BR-AC') || null;
  const [stateData, setStateData] = useState<IFederation | null>(null);
  const [selectedState, setSelectedState] = useState<StateType | null>(
    defaultState,
  );

  const handleSelect = (name: string) => {
    const state = brazilianMap.find((s) => s.name === name);
    setSelectedState(state || null);
  };

  useEffect(() => {
    setStateData(
      federations.find((f: IFederation) => f.id === selectedState?.id) || null,
    );
  }, [selectedState]);

  return (
    <Stack>
      <PageHeader title={'Federações'} icon={federationsIcon} />
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ md: 8 }}>
          <Box
            flex={1}
            minWidth={300}
            maxWidth={{ lg: '100%', xl: 684 }}
            display={{ xs: 'none', md: 'block' }}
          >
            <BrazilianMap
              selectedState={selectedState}
              setSelectedState={setSelectedState}
            />
          </Box>
          <Stack
            flex={1}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            spacing={4}
          >
            <FederationIntro />
            <GenericSelect
              label={selectedState ? selectedState.name : ''}
              selectedItem={selectedState ? selectedState.name : ''}
              items={brazilianMap.map((state) => state.name)}
              onSelect={handleSelect}
              itemType={'Estado'}
            />
            {stateData && <FederationDetails stateData={stateData} />}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Federations;
