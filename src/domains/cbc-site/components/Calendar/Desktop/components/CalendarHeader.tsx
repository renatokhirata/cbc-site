import MonthTitle from './MonthNavigation';
import { Dayjs } from 'dayjs';

const CalendarHeader = ({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Dayjs;
  setCurrentDate: (date: Dayjs) => void;
}) => {
  return <MonthTitle currentDate={currentDate} onDateChange={setCurrentDate} />;
};

export default CalendarHeader;
