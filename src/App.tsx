import { Box, Container, Divider, Stack } from '@mui/material';
import { HeadingBar, About, Skills, SocialLinks, Projects, Resume, Expertise } from './components';
import { SocialLinksProps } from './components/SocialLinks';
import { ProjectsProps } from './components/Projects';
import { SkillsProps } from './components/Skills';
import { ExpertiseProps } from './components/Expertise';
import appConfig from './config';
import { ToggleColorMode } from './components/common';

interface AppProps {
  links: SocialLinksProps['socialLinks'];
  projects: ProjectsProps['projects'];
  skills: SkillsProps['skills'];
  expertise: ExpertiseProps['expertise'];
}

const App = () => {
  const { links, projects, skills, expertise } = appConfig as AppProps;

  return (
    <Container maxWidth="md" sx={{ paddingTop: 8, paddingBottom: 16 }}>
      <HeadingBar />

      <Stack spacing={12} width="100%">
        <Container>
          <About />
          <Expertise expertise={expertise} />
        </Container>

        <Skills skills={skills} />
        <Divider variant="fullWidth" light />

        <Projects title="Projects" projects={projects} />
        <Divider variant="fullWidth" light />

        <Resume title="Résumé" />

        <SocialLinks title="Contact" socialLinks={links} />
      </Stack>

      <Box position="fixed" top={{ xs: '0.5rem', md: '1rem' }} right={{ xs: '0.5rem', md: '1rem' }}>
        <ToggleColorMode />
      </Box>
    </Container>
  );
};

export default App;
