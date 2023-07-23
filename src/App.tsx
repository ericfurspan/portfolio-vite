import { Container, Divider, Stack } from '@mui/material';
import { HeadingBar, About, Skills, SocialLinks, Projects, Resume, Expertise } from './components';
import { ToggleColorMode } from './components/common';
import { SocialLinksProps } from './components/SocialLinks';
import { ProjectsProps } from './components/Projects';
import { SkillsProps } from './components/Skills';
import { ExpertiseProps } from './components/Expertise';
import appConfig from './config';

interface AppProps {
  links: SocialLinksProps['socialLinks'];
  projects: ProjectsProps['projects'];
  skills: SkillsProps['skills'];
  expertise: ExpertiseProps['expertise'];
}

const App = () => {
  const { links, projects, skills, expertise } = appConfig as AppProps;

  return (
    <Container maxWidth="md" sx={{ paddingTop: 3 }}>
      <HeadingBar />

      <Stack spacing={10} width="100%">
        <Container>
          <About />
          <Expertise expertise={expertise} />
        </Container>

        <SocialLinks socialLinks={links} />
        <Divider variant="fullWidth" light sx={{ my: 2 }} />

        <Skills title="Toolset" skills={skills} />
        <Divider variant="fullWidth" light sx={{ my: 2 }} />

        <Projects title="Projects" projects={projects} />
        <Divider variant="fullWidth" light sx={{ my: 2 }} />

        <Resume title="Résumé" />
      </Stack>

      <ToggleColorMode />
    </Container>
  );
};
export default App;
