import { Box, Typography } from '@mui/material';

interface DaysOfWeekProps {
  days: string[];
}

const DaysOfWeek = ({ days }: DaysOfWeekProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(7, 1fr)"
      gap={{ xs: 0.5, sm: 1 }}
      mb={1}
    >
      {days.map((day) => (
        <Typography
          key={day}
          variant="body1"
          textAlign="center"
          color="#666"
          fontSize={{ xs: '0.75rem', sm: '0.875rem', md: '1rem' }}
        >
          {day}
        </Typography>
      ))}
    </Box>
  );
};

export default DaysOfWeek;
