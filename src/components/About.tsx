import { Typography } from '@mui/material';
import appConfig from '../config';

const About = () => (
  <>
    {appConfig.about.map((str) => (
      <Typography key={str} variant="subtitle1" sx={{ mb: 2 }}>
        {str}
      </Typography>
    ))}
  </>
);

export default About;
