import { ReactNode, createContext, useCallback, useMemo, useState } from 'react';
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  Palette,
  useMediaQuery,
} from '@mui/material';
import palette from './palette';
import typography from './typography';
import components from './components';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext(() => {});

function ThemeProvider({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<Palette['mode']>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = useCallback(
    () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: palette[mode],
        typography,
        components,
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeProvider;
