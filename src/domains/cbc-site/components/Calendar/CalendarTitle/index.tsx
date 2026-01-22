import { Stack, StackProps } from '@mui/material';
import { formatModalityName } from '../../../../../shared/utils/formatModalityName';
import ColoredTitle from '../../ColoredTitle';

interface CalendarTitleProps extends StackProps {
  slug?: string;
}

const CalendarTitle = ({ slug, ...stackProps }: CalendarTitleProps) => {
  if (!slug?.length) {
    return (
      <Stack
        direction={'row'}
        spacing={{ xs: 1, md: 2 }}
        alignItems="baseline"
        {...stackProps}
        mb={{ xs: 2, md: 0 }}
      >
        <ColoredTitle
          color="typeText.tertiary"
          title={'Calendários de eventos'}
          fontSize={{ xs: '1.4rem', md: '2rem' }}
        />
      </Stack>
    );
  }

  return (
    <Stack
      direction={'row'}
      spacing={{ xs: 1, md: 2 }}
      alignItems="baseline"
      {...stackProps}
      mb={{ xs: 2, md: 0 }}
    >
      <ColoredTitle
        color="typeText.tertiary"
        title={'Calendário'}
        fontSize={{ xs: '1.4rem', md: '2rem' }}
      />
      <ColoredTitle fontWeight={600} color="typeText.tertiary" title={' | '} />
      <ColoredTitle
        fontWeight={500}
        fontSize={{ xs: '1.4rem', md: '2rem' }}
        title={formatModalityName(slug || '')}
        color="typeText.tertiary"
      />
    </Stack>
  );
};

export default CalendarTitle;
