import { Stack } from '@mui/material';
import TextContent from '../TextContent';
import { getDateParts, getShortMonth } from '../../../../shared/utils/date';

interface DateBlockProps {
  date?: string;
  day?: string;
  month?: string;
  year?: string;
}

const DateBlock = ({ date, day, month, year }: DateBlockProps) => {
  const parsedDate = getDateParts(date);

  const displayDay = day || parsedDate.day || '--';
  const displayMonth = month || parsedDate.month || '';
  const displayYear = year || parsedDate.year || '----';

  return (
    <Stack
      height={{ xs: 180, md: 250 }}
      width={{ xs: 100, md: 130 }}
      bgcolor={'customBackground.tertiary'}
      alignItems="center"
      justifyContent={{ xs: 'center', md: 'flex-end' }}
      spacing={-2}
      py={{ xs: 1.5, md: 2 }}
      px={{ xs: 1, md: 3 }}
    >
      <TextContent
        content={displayDay || '--'}
        color="typeText.primary"
        fontSize={{ xs: '3rem', md: '5rem' }}
        fontWeight={700}
      />
      <TextContent
        content={getShortMonth(displayMonth)}
        color="typeText.primary"
        fontSize={{ xs: '1.75rem', md: '2.813rem' }}
        fontWeight={100}
      />
      <TextContent
        content={displayYear || '----'}
        color="typeText.primary"
        fontSize={{ xs: '1.5rem', md: '2.5rem' }}
        fontWeight={700}
      />
    </Stack>
  );
};

export default DateBlock;
