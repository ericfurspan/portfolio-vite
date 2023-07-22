import { Container, Typography } from '@mui/material';
import appConfig from '../config';

const About = () => (
  <Container>
    {appConfig.about.map((str) => (
      <Typography key={str} sx={{ mb: 2 }}>
        {str}
      </Typography>
    ))}
  </Container>
);

export default About;
