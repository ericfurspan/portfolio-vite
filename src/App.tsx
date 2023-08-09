import { Container, Divider, Stack } from '@mui/material';
import { HeadingBar, About, Chips, Contact, Projects, Expertise, Footer } from './components';
import { ContactProps } from './components/Contact';
import { ProjectsProps } from './components/Projects';
import { ChipsProps } from './components/Chips';
import { ExpertiseProps } from './components/Expertise';
import appConfig from './config';

interface AppProps {
  name: string;
  email: string;
  links: ContactProps['socialLinks'];
  projects: ProjectsProps['projects'];
  skills: ChipsProps['chips'];
  expertise: ExpertiseProps['expertise'];
}

const App = () => {
  const { name, email, links, projects, skills, expertise } = appConfig as AppProps;

  return (
    <>
      <Container maxWidth="md" sx={{ paddingTop: 8, paddingBottom: 16 }}>
        <HeadingBar />

        <Stack spacing={12}>
          <Container>
            <About />
            <Expertise expertise={expertise} />
          </Container>

          <Chips chips={skills} justifyCenter />
          <Divider variant="fullWidth" light />

          <Projects title="Projects & Open Source" projects={projects} />
          <Divider variant="fullWidth" light />

          <Contact title="Contact" socialLinks={links} email={email} />
        </Stack>
      </Container>

      <Footer name={name} />
    </>
  );
};

export default App;
