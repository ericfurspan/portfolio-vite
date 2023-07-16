import { Container, Typography } from '@mui/material';
import appConfig from '../config';

const About = () => (
  <Container>
    {appConfig.about.map((str) => (
      <Typography key={str} gutterBottom>
        {str}
      </Typography>
    ))}
  </Container>
);

export default About;
