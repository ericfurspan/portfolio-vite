import { AppBar as MuiAppBar, Toolbar, Typography, Stack } from '@mui/material';
import ToggleColorMode from './common/ToggleColorMode';
import appConfig from '../config';

const StyledTypography = ({ text }: { text: string }) => (
  <Typography
    variant="h5"
    component="h1"
    noWrap
    sx={{
      fontFamily: 'fontFamilyRaleway',
      fontWeight: 800,
      letterSpacing: '0.1rem',
      textTransform: 'uppercase',
    }}
  >
    {text}
  </Typography>
);

const HeadingBar = () => (
  <MuiAppBar position="static" color="transparent" elevation={0} sx={{ marginBottom: 6 }}>
    <Toolbar>
      <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
        <StyledTypography text={appConfig.name} />
      </Stack>
      <ToggleColorMode />
    </Toolbar>
  </MuiAppBar>
);

export default HeadingBar;
