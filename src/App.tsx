import { Container, Stack } from '@mui/material';
import { AppBar, About, Skills, SocialLinks } from './components';
import appConfig from './config';

const App = () => (
  <Container maxWidth="md" sx={{ paddingTop: 2 }}>
    <AppBar />

    <Stack spacing={8} alignItems="center">
      <About />
      <Skills title="Technologies" skills={appConfig.skills} />
      <SocialLinks title="Contact" socialLinks={appConfig.links as any} />
    </Stack>
  </Container>
);

export default App;
