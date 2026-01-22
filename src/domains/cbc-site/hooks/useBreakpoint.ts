import { useTheme, useMediaQuery } from '@mui/material';

const useBreakpoint = (
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  mode: 'down' | 'up' | 'only' = 'down',
) => {
  const theme = useTheme();

  // down('xs') gera max-width negativo e nunca bate — use only('xs') nesse caso
  let query: string;
  if (breakpoint === 'xs' && mode === 'down') {
    query = theme.breakpoints.only('xs');
  } else if (mode === 'down') {
    query = theme.breakpoints.down(breakpoint);
  } else if (mode === 'up') {
    query = theme.breakpoints.up(breakpoint);
  } else {
    query = theme.breakpoints.only(breakpoint);
  }

  return useMediaQuery(query);
};

export default useBreakpoint;
