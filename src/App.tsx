import { Container, Stack } from '@mui/material';
import { HeadingBar, About, Skills, SocialLinks, Projects, Resume } from './components';
import appConfig from './config';

const App = () => (
  <Container maxWidth="md" sx={{ paddingTop: 2 }}>
    <HeadingBar />

    <Stack spacing={10} width="100%">
      <About />
      <SocialLinks socialLinks={appConfig.links as any} />
      <Skills title="Technologies" skills={appConfig.skills} />
      <Projects title="Projects" projects={appConfig.projects} />
      <Resume title="Résumé" />
    </Stack>
  </Container>
);

export default App;
