import { Container, Divider, Stack } from '@mui/material';
import { HeadingBar, About, Chips, Contact, Projects, Footer } from './components';
import { ContactProps } from './components/Contact';
import { ProjectsProps } from './components/Projects';
import { ChipsProps } from './components/Chips';
import { ExpertiseProps } from './components/Expertise';
import appConfig from './config';

interface AppProps {
  name: string;
  email: string;
  socialLinks: ContactProps['socialLinks'];
  projects: ProjectsProps['projects'];
  skills: ChipsProps['chips'];
  expertise: ExpertiseProps['expertise'];
}

const App = () => {
  const { name, email, socialLinks, projects, skills } = appConfig as AppProps;

  return (
    <>
      <Container maxWidth="md" sx={{ paddingTop: 8, paddingBottom: 16 }}>
        <HeadingBar />

        <Stack spacing={12}>
          <Container>
            <About />
          </Container>

          <Projects title="Projects & Open Source" projects={projects} />
          <Divider variant="fullWidth" light />

          <Chips title="Skills" chips={skills} justifyCenter />
          <Divider variant="fullWidth" light />

          <Contact title="Contact" socialLinks={socialLinks} email={email} />
        </Stack>
      </Container>

      <Footer name={name} />
    </>
  );
};

export default App;
