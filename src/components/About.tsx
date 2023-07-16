import { Container, Typography } from '@mui/material';
import appConfig from '../config';

const About = () => (
  <Container maxWidth="md">
    <Typography>{appConfig.about}</Typography>
  </Container>
);

export default About;
