import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';

interface DaysProps {
  days: Dayjs[];
  isSelected?: boolean;
  isCurrentMonth?: boolean;
  eventColor?: string;
  onClick: () => void;
}

const Days = ({
  days,
  isSelected,
  isCurrentMonth = true,
  eventColor,
  onClick,
}: DaysProps) => {
  return (
    <Box
      width={'100%'}
      height={{ xs: 35, sm: 45, md: 50 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box
        width={{ xs: 35, sm: 45, md: 50 }}
        height={{ xs: 35, sm: 45, md: 50 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onClick}
        borderRadius={'50%'}
        fontSize={{ xs: '0.75rem', sm: '0.875rem', md: '1rem' }}
        color={
          eventColor
            ? '#fff'
            : isSelected
              ? '#fff'
              : isCurrentMonth
                ? '#000'
                : '#ccc'
        }
        bgcolor={isSelected && !eventColor ? '#217EFD' : 'transparent'}
        sx={{
          transition: 'background-color .2s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor:
              isSelected && !eventColor ? '#1565c0' : eventColor || '#bbb9b9ff',
          },
        }}
      >
        {days.map((day) => day.date())}
      </Box>
    </Box>
  );
};

export default Days;
