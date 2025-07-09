import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { ReactNode } from 'react';

interface AppThemeProviderProps {
  children: ReactNode;
}

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
