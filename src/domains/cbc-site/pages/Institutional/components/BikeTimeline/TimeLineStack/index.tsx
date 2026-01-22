import { Stack, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { TimelineData } from '../../../../../interfaces/Timeline/TimeLine';
import { forwardRef } from 'react';

const TimeLineStack = forwardRef<
  HTMLDivElement,
  { timeLineData: TimelineData[] }
>(({ timeLineData }, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      ref={ref}
      spacing={16}
      direction="row"
      alignItems="flex-end"
      sx={{
        overflowX: isMobile ? 'hidden' : 'auto',
        width: '100%',
        scrollbarWidth: 'none',
        userSelect: 'none',
        WebkitOverflowScrolling: isMobile ? 'auto' : 'touch',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {timeLineData.map((item) => (
        <Box
          key={item.year}
          data-year={item.year}
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#f5f5f5',
            borderRadius: 2,
            position: 'relative',
            minHeight: 180,
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            borderLeft={4}
            borderColor="typeText.tertiary"
            ml={4}
            width="100%"
            pb={20}
          >
            <Stack spacing={-4} width="100%">
              <Box width="100%" pb={6} pt={4} px={4} bgcolor="#ffffff">
                <Typography
                  fontSize={18}
                  fontWeight={100}
                  color="typeText.default"
                >
                  {item.description}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    color: 'typeText.tertiary',
                    fontSize: 81,
                    lineHeight: 1,
                    ml: 3,
                    zIndex: 1,
                  }}
                >
                  {item.year}
                </Typography>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '220px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: 1,
                    boxShadow: 1,
                    ml: -12,
                    mb: -16,
                    border: '2px solid #fff',
                    zIndex: 0,
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
});

export default TimeLineStack;
