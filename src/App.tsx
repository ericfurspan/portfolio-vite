import { Container } from '@mui/material';
import AppBar from './components/AppBar';
import Skills from './components/Skills';
import Projects from './components/Projects';

const projects = [{ name: 'Foo' }];
const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React-Native'];

const App = () => {
  return (
    <>
      <AppBar />

      <Container sx={{ padding: 4 }}>
        <Projects projects={projects} />
        <Skills skills={skills} />
      </Container>
    </>
  );
};

export default App;
