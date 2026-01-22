import { Box, Stack } from '@mui/material';
import React from 'react';
import calendarIcon from '../../../../../assets/icons/calendar.svg';
import bikeIcon from '../../../../../assets/icons/bike.svg';
import useBreakpoint from '../../../hooks/useBreakpoint';

interface DateFilterProps {
  setSearchTerm: (term: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ setSearchTerm }) => {
  const isMobile = useBreakpoint('md');

  return (
    <Box width="100%" bgcolor="#2176ae" py={2} pl={{ xs: 0, md: '16%' }}>
      {!isMobile ? (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'stretch', md: 'center' }}
          spacing={4}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            flexWrap="wrap"
          >
            <Box display="flex" alignItems="center" gap={1} mr={2}>
              <Box
                component="img"
                src={calendarIcon}
                alt="Calendar"
                width={30}
              />
              <Box
                component="span"
                sx={{ color: '#fff', fontSize: 18, marginX: 0.5 }}
              >
                De
              </Box>
              <Box
                component="input"
                type="date"
                sx={{
                  padding: '6px 12px',
                  borderRadius: 2,
                  border: '1px solid #fff',
                  fontSize: 16,
                  background: 'transparent',
                  color: '#fff',
                  minWidth: 120,
                  outline: 'none',
                  fontWeight: 'bold',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#5CB5AF')}
                onBlur={(e) => (e.target.style.borderColor = '#fff')}
              />
              <Box
                component="span"
                sx={{
                  color: '#fff',
                  fontSize: 18,
                  marginX: 0.5,
                }}
              >
                até
              </Box>
              <Box
                component="input"
                type="date"
                sx={{
                  padding: '6px 12px',
                  borderRadius: 2,
                  border: '1px solid #fff',
                  fontSize: 16,
                  background: 'transparent',
                  color: '#fff',
                  minWidth: 120,
                  outline: 'none',
                  fontWeight: 'bold',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#5CB5AF')}
                onBlur={(e) => (e.target.style.borderColor = '#fff')}
              />
            </Box>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            flexWrap="wrap"
          >
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src={bikeIcon}
                alt="Bike"
                width={38}
                mr={2}
              />
              <Box
                component="input"
                type="text"
                sx={{
                  padding: '6px 12px',
                  borderRadius: 2,
                  border: '1px solid #fff',
                  fontSize: 16,
                  background: 'transparent',
                  color: '#fff',
                  minWidth: 120,
                  outline: 'none',
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquise"
                onFocus={(e) => (e.target.style.borderColor = '#5CB5AF')}
                onBlur={(e) => (e.target.style.borderColor = '#fff')}
              />
            </Box>
          </Stack>
        </Stack>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          flexWrap="wrap"
          px={2}
        >
          <Box display="flex" alignItems="center">
            <Box component="img" src={bikeIcon} alt="Bike" width={38} mr={2} />
            <Box
              component="input"
              type="text"
              sx={{
                padding: '6px 12px',
                borderRadius: 2,
                border: '1px solid #fff',
                fontSize: 16,
                background: 'transparent',
                color: '#fff',
                minWidth: 120,
                outline: 'none',
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquise"
              onFocus={(e) => (e.target.style.borderColor = '#5CB5AF')}
              onBlur={(e) => (e.target.style.borderColor = '#fff')}
            />
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default DateFilter;
