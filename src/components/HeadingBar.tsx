import { AppBar as MuiAppBar, Toolbar, Typography, Stack, Box, Button, Link } from '@mui/material';
import appConfig from '../config';

const navItems = ['Projects', 'Contact'];

const HeadingBar = () => (
  <MuiAppBar position="static" color="transparent" elevation={0} sx={{ marginBottom: 4 }}>
    <Toolbar>
      <Stack direction="column" sx={{ flexGrow: 1 }}>
        <Link href="/" color="inherit" underline="none">
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontFamily: 'fontFamilyRaleway',
              textTransform: 'uppercase',
            }}
          >
            {appConfig.name}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'fontFamilyRaleway',
            textTransform: 'uppercase',
          }}
        >
          {appConfig.title}
        </Typography>
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
