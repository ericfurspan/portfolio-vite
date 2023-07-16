import { Chip, Grid, Stack } from '@mui/material';
import SectionHeader from './common/SectionHeader';

const Skills = ({ skills = [], title }: { skills: string[]; title?: string }) => (
  <Stack alignItems="center" spacing={2} maxWidth="sm">
    {title && <SectionHeader title={title} />}

    <Grid container spacing={1} justifyContent="center">
      {skills.map((skill) => (
        <Grid item key={skill}>
          <Chip variant="outlined" color="default" size="small" label={skill} />
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default Skills;
