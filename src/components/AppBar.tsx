import { AppBar as MuiAppBar, Toolbar, Typography, Stack } from '@mui/material';
import ToggleColorMode from './common/ToggleColorMode';
import appConfig from '../config';

const AppBar = () => (
  <MuiAppBar position="static" color="transparent" elevation={0} sx={{ marginBottom: 6 }}>
    <Toolbar>
      <Stack sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="h1"
          noWrap
          sx={{
            mr: 2,
            fontFamily: "'Raleway Variable', sans-serif",
            fontWeight: 800,
            letterSpacing: '0.1rem',
            textTransform: 'uppercase',
          }}
        >
          {appConfig.name}
        </Typography>
      </Stack>
      <ToggleColorMode />
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
