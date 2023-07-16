import { ReactNode, createContext, useMemo, useState } from 'react';
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  Palette,
} from '@mui/material';
import palette from './palette';
import typography from './typography';

const DEFAULT_MODE: Palette['mode'] = 'light';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState(DEFAULT_MODE);

  // todo: better done as useCallback i.e toggleColorMode ?
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography,
        palette: palette[mode],
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeProvider;
