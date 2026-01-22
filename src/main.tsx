import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from './routes/routes.tsx';
import { ThemeProvider } from '@mui/material';
import { themeDefault } from './theme/default.ts';
import { MantineProvider } from '@mantine/core';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';
import './global.css';
import { AppProvider } from './domains/cbc-site/contexts/AppContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { TanStackDevtools } from '@tanstack/react-devtools'

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <TanStackDevtools /> */}
      <AppProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <ThemeProvider theme={themeDefault}>
            <MantineProvider>
              <AppRoutes />
            </MantineProvider>
          </ThemeProvider>
        </LocalizationProvider>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
);
