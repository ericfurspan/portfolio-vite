import { Box, Typography } from '@mui/material';
import appConfig from '../config';

const About = () => (
  <Box>
    {appConfig.about.map((str) => (
      <Typography variant="subtitle1" component="p" fontSize={'1.125rem'} sx={{ mb: 2 }} key={str}>
        {str}
      </Typography>
    ))}
  </Box>
);

export default About;
