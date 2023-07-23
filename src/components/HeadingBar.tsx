import { AppBar as MuiAppBar, Toolbar, Typography, Stack, Box, Button } from '@mui/material';
import appConfig from '../config';

const navItems = ['Projects', 'Contact'];

const StyledTypography = ({ text }: { text: string }) => (
  <Typography
    variant="h5"
    component="h1"
    noWrap
    sx={{
      fontFamily: 'fontFamilyRaleway',
      textTransform: 'uppercase',
    }}
  >
    {text}
  </Typography>
);

const HeadingBar = () => (
  <MuiAppBar position="static" color="transparent" elevation={0} sx={{ marginBottom: 4 }}>
    <Toolbar>
      <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
        <StyledTypography text={appConfig.name} />
      </Stack>

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <Button key={item} href={`#${item}`} color="inherit" sx={{ ml: 2 }}>
            {item}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </MuiAppBar>
);

export default HeadingBar;
