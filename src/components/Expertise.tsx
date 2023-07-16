import { Container, Typography } from '@mui/material';
import appConfig from '../config';

const Expertise = () => (
  <Container>
    {appConfig.expertise.map((expertise) => (
      <Typography key={expertise}>{expertise}</Typography>
    ))}
  </Container>
);

export default Expertise;
