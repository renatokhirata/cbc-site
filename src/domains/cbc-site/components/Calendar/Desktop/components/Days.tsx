import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';

interface DaysProps {
  days: Dayjs[];
  isSelected?: boolean;
  isCurrentMonth?: boolean;
  eventColor?: string;
  onClick?: () => void;
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
      height={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box
        width={60}
        onClick={onClick}
        borderRadius={2}
        fontSize="2rem"
        color={
          eventColor
            ? '#fff'
            : isSelected
              ? '#fff'
              : isCurrentMonth
                ? '#979797'
                : '#ccc'
        }
        bgcolor={
          isSelected && !eventColor ? 'typeText.tertiary' : 'transparent'
        }
        sx={{
          p: 0.8,
          transition: 'background-color .2s ease-in-out',
          cursor: onClick ? 'pointer' : 'default',
          '&:hover': onClick
            ? {
                backgroundColor:
                  isSelected && !eventColor
                    ? '#61cfc8ff'
                    : eventColor || '#bbb9b9ff',
              }
            : {},
        }}
      >
        {days.map((day) => day.date())}
      </Box>
    </Box>
  );
};

export default Days;
