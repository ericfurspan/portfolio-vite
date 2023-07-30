import { useContext } from 'react';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { IconButton, useTheme } from '@mui/material';
import { ColorModeContext } from '../../theme';

const ToggleColorMode = () => {
  const toggleColorMode = useContext(ColorModeContext);
  const {
    palette: { mode },
  } = useTheme();

  return (
    <IconButton aria-label="Toggle color mode" onClick={toggleColorMode} color="default">
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ToggleColorMode;
