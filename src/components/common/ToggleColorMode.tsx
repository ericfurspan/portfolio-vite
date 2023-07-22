import { LightMode as LightModeIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ColorModeContext } from '../../theme';
import { useContext } from 'react';

const ToggleColorMode = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} aria-label="Toggle color mode">
      <LightModeIcon />
    </IconButton>
  );
};

export default ToggleColorMode;
