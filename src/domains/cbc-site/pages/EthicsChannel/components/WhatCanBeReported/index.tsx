import { Grid, Stack } from '@mui/material';
import ethicsInfoData from '../../../../../../shared/constants/ethicsInfoData';
import EthicsAccordion from '../../../../components/Accordion/EthicsAccordion';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';

const WhatCanBeReported = () => {
  return (
    <Stack spacing={3}>
      <ColoredTitle
        title={'O que pode ser denunciado?'}
        color="typeText.tertiary"
      />
      <Stack spacing={1}>
        <TextContent content={'Você pode relatar situações como:'} />
        <Grid container columnSpacing={4} rowSpacing={2}>
          {ethicsInfoData.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }}>
              <EthicsAccordion
                summaryName={item.title}
                details={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default WhatCanBeReported;
