import React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import MVVItem from './components/MVVItem';
import { mvvData } from '../../../../../../shared/constants/mvv';

const MVV: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      width="100%"
      justifyContent="space-between"
      sx={{
        pb: 4,
        columnGap: { xs: 0, md: 12 },
      }}
      component="section"
      aria-label="Missão, Visão e Valores da CBC"
      spacing={isMobile ? 0 : 4}
    >
      {mvvData.map((item) => (
        <Stack
          key={item.title}
          direction="column"
          alignItems="flex-start"
          sx={{
            flex: item.items ? 1.5 : 0.8,
            width: isMobile ? '100%' : undefined,
          }}
        >
          <MVVItem item={item} />
        </Stack>
      ))}
    </Stack>
  );
};

export default MVV;
