import { Stack } from '@mui/material';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import MenuItems from '../../../DropDownPopper';
dayjs.locale('pt-br');

interface MonthNavigationProps {
  currentDate: Dayjs;
  onDateChange?: (newDate: Dayjs) => void;
}

const MonthTitle = ({ currentDate, onDateChange }: MonthNavigationProps) => {
  const handleYearSelect = (_item: string, year: string | undefined) => {
    if (onDateChange) {
      const newDate = currentDate.year(parseInt(year || '', 10));
      onDateChange(newDate);
    }
  };

  const handleMonthSelect = (_item: string, month: string | undefined) => {
    if (onDateChange) {
      const monthIndex = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ].indexOf(month || '');

      if (monthIndex !== -1) {
        const newDate = currentDate.month(monthIndex);
        onDateChange(newDate);
      }
    }
  };

  // Gerar anos (exemplo: 2020 a 2030)
  const years = Array.from({ length: 11 }, (_, i) => (2020 + i).toString());

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={2}
      bgcolor="button.default"
      sx={{ padding: { xs: 1, md: 2.8 }, px: { xs: 2 } }}
    >
      <MenuItems
        options={[
          {
            item: currentDate.format('YYYY'),
            subItems: years,
          },
        ]}
        onSelectItem={handleYearSelect}
        selectedItem={currentDate.format('YYYY')}
      />
      <MenuItems
        options={[
          {
            item: currentDate.format('MMMM').toUpperCase(),
            subItems: [
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ],
          },
        ]}
        onSelectItem={handleMonthSelect}
        selectedItem={currentDate.format('MMMM').toUpperCase()}
        isDark={false}
      />
    </Stack>
  );
};

export default MonthTitle;
