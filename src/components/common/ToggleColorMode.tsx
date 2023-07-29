import { useContext } from 'react';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { IconButton, useTheme } from '@mui/material';
import { ColorModeContext } from '../../theme';
import { Tooltip } from '.';

const ToggleColorMode = () => {
  const toggleColorMode = useContext(ColorModeContext);
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Tooltip
      title={`${mode === 'dark' ? 'Light' : 'Dark'} mode`}
      placement="left"
      arrow
      describeChild
    >
      <IconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        size="large"
        sx={{ bgcolor: 'background.default' }}
        color="default"
      >
        {mode === 'light' ? (
          <DarkModeIcon fontSize="inherit" />
        ) : (
          <LightModeIcon fontSize="inherit" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleColorMode;
