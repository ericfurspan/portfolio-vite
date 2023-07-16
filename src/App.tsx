import { Container, Stack } from '@mui/material';
import { About, AppBar, Skills, SocialLinks } from './components';
import appConfig from './config';

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
      <AppBar />

      <Stack spacing={12} alignItems="center">
        <About />
        <Skills title="Technologies" skills={appConfig.skills} />
        <SocialLinks title="Contact" socialLinks={appConfig.links as any} />
      </Stack>
    </Container>
  );
};

export default App;
