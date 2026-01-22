import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import Days from './Days';

interface EventDate {
  date: string;
  color: 'blue' | 'green' | 'orange';
}

interface CalendarGridProps {
  calendarDays: Dayjs[];
  value?: Dayjs[];
  currentDate: Dayjs;
  events: EventDate[];
}

const CalendarGrid = ({
  calendarDays,
  value,
  currentDate,
  events,
}: CalendarGridProps) => {
  const getEventColor = (date: Dayjs) => {
    const event = events.find((e) => e.date === date.format('DD-MM-YYYY'));
    return event?.color;
  };

  const weeks: Dayjs[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <Box width={'100%'} height={'100%'} flexGrow={1}>
      {weeks.map((week, weekIdx) => (
        <Box key={weekIdx}>
          <Box
            display="grid"
            gridTemplateColumns="repeat(7, 1fr)"
            gap={1}
            width="100%"
          >
            {week.map((day, dayIdx) => {
              const eventColor = getEventColor(day);
              const isCurrentMonth = day.month() === currentDate.month();
              const isSelected = value
                ? value.some((date) => date.isSame(day, 'day'))
                : false;
              return (
                <Days
                  key={dayIdx}
                  days={[day]}
                  isSelected={isSelected}
                  isCurrentMonth={isCurrentMonth}
                  eventColor={eventColor}
                />
              );
            })}
          </Box>
          {weekIdx < weeks.length - 1 && (
            <Box height="1px" width="100%" bgcolor="#E5E5E5" my={2.6} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CalendarGrid;
