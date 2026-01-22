import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

const MonthNavigation = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: {
  currentDate: Dayjs;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={{ xs: 1, sm: 2 }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
        }}
      >
        {currentDate.format('MMMM YYYY')}
      </Typography>
      <Box>
        <IconButton
          onClick={onPrevMonth}
          size={isSmallScreen ? 'medium' : 'large'}
        >
          <ChevronLeft sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
        </IconButton>
        <IconButton
          onClick={onNextMonth}
          size={isSmallScreen ? 'medium' : 'large'}
        >
          <ChevronRight sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default MonthNavigation;
