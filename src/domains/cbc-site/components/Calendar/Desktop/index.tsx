import { Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import CalendarGrid from './components/CalendarGrid';
import 'dayjs/locale/pt-br';
import isoWeek from 'dayjs/plugin/isoWeek';
import CalendarHeader from './components/CalendarHeader';
import DaysOfWeek from './components/DaysOfWeek';

dayjs.extend(isoWeek);
dayjs.locale('pt-br');

interface EventDate {
  date: string;
  color: 'blue' | 'green' | 'orange';
}

interface CalendarProps {
  events?: EventDate[];
  value?: Dayjs[];
}

const DesktopCalendar = ({ events = [], value }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const isMobile = useBreakpoint('md');
  const daysOfWeek = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];
  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startOfCalendar = startOfMonth.startOf('isoWeek');
  const endOfCalendar = endOfMonth.endOf('isoWeek');

  const calendarDays = [];
  let day = startOfCalendar;

  while (day.isBefore(endOfCalendar) || day.isSame(endOfCalendar, 'day')) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  // Calendar days are display-only (non-interactive) for Desktop.

  if (isMobile) return null;

  return (
    <Stack
      spacing={2}
      width={'100%'}
      mx="auto"
      justifyContent="center"
      height={'100%'}
    >
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

      <DaysOfWeek days={daysOfWeek} />

      <CalendarGrid
        calendarDays={calendarDays}
        value={value}
        currentDate={currentDate}
        events={events}
      />
    </Stack>
  );
};

export default DesktopCalendar;
