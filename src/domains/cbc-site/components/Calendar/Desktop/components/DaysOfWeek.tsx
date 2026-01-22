import { Box } from '@mui/material';
import TextContent from '../../../TextContent';

interface DaysOfWeekProps {
  days: string[];
}

const DaysOfWeek = ({ days }: DaysOfWeekProps) => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1} mb={1}>
      {days.map((day) => (
        <TextContent
          content={day}
          key={day}
          variant="caption"
          textAlign="center"
          fontSize="1.5rem"
        />
      ))}
    </Box>
  );
};

export default DaysOfWeek;
