import { Container, Stack } from '@mui/material';
import { HeadingBar, About, Skills, SocialLinks, Projects } from './components';
import appConfig from './config';

const App = () => (
  <Container maxWidth="md" sx={{ paddingTop: 2 }}>
    <HeadingBar />

    <Stack spacing={8} alignItems="center">
      <SocialLinks socialLinks={appConfig.links as any} />
      <About />
      <Skills title="Technologies" skills={appConfig.skills} />
      <Projects title="Projects" projects={appConfig.projects} />
    </Stack>
  </Container>
);

export default App;
