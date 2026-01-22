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
  onDayClick: (day: Dayjs) => void;
}

const CalendarGrid = ({
  calendarDays,
  value,
  currentDate,
  events,
  onDayClick,
}: CalendarGridProps) => {
  const getEventColor = (date: Dayjs) => {
    const event = events.find((e) => e.date === date.format('DD-MM-YYYY'));
    return event?.color;
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(7, 1fr)"
      gap={{ xs: 0.5, sm: 1 }}
    >
      {calendarDays.map((day, index) => {
        const eventColor = getEventColor(day);
        const isSelected = value
          ? value.some((date) => date.isSame(day, 'day'))
          : false;
        const isCurrentMonth = day.month() === currentDate.month();

        return (
          <Days
            key={index}
            days={[day]}
            isSelected={isSelected}
            isCurrentMonth={isCurrentMonth}
            eventColor={eventColor}
            onClick={() => onDayClick(day)}
          />
        );
      })}
    </Box>
  );
};

export default CalendarGrid;
