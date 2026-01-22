import { Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import MonthNavigation from './components/MonthNavigation';
import useBreakpoint from '../../../hooks/useBreakpoint';
import DaysOfWeek from './components/DaysOfWeek';
import CalendarGrid from './components/CalendarGrid';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

interface EventDate {
  date: string;
  color: 'blue' | 'green' | 'orange';
}

interface CalendarProps {
  events?: EventDate[];
  value?: Dayjs[];
  onChange?: (value: Dayjs[]) => void;
}

const MobileCalendar = ({ events = [], value, onChange }: CalendarProps) => {
  const isMobile = useBreakpoint('md');
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startOfCalendar = startOfMonth.startOf('week');
  const endOfCalendar = endOfMonth.endOf('week');

  const calendarDays = [];
  let day = startOfCalendar;

  while (day.isBefore(endOfCalendar) || day.isSame(endOfCalendar, 'day')) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  const handlePrevMonth = () => {
    setCurrentDate((prev) => prev.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => prev.add(1, 'month'));
  };

  const handleDayClick = (day: Dayjs) => {
    if (day.month() !== currentDate.month()) {
      setCurrentDate(day);
    }

    if (!value || !onChange) {
      onChange?.([day]);
      return;
    }

    const existingIndex = value.findIndex((date) => date.isSame(day, 'day'));

    if (existingIndex >= 0) {
      const newValue = value.filter((_, index) => index !== existingIndex);
      onChange(newValue);
    } else {
      onChange([...value, day]);
    }
  };

  if (!isMobile) return null;

  return (
    <Box
      width={{ xs: '95%', sm: '90%', md: '37.5rem' }}
      maxWidth="37.5rem"
      mx="auto"
      p={{ xs: '0.75rem', sm: '1.25rem', md: '1.875rem' }}
      bgcolor="#F5F5F5"
      borderRadius="0.25rem"
    >
      <MonthNavigation
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <DaysOfWeek days={daysOfWeek} />

      <CalendarGrid
        calendarDays={calendarDays}
        value={value}
        currentDate={currentDate}
        events={events}
        onDayClick={handleDayClick}
      />
    </Box>
  );
};

export default MobileCalendar;
