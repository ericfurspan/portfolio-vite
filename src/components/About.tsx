import { Typography } from '@mui/material';
import appConfig from '../config';

const About = () => (
  <>
    {appConfig.about.map((str) => (
      <Typography key={str} sx={{ mb: 2 }}>
        {str}
      </Typography>
    ))}
  </>
);

export default About;
