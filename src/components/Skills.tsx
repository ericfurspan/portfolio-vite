import { Chip, Grid, Stack } from '@mui/material';
import SectionHeader from './common/SectionHeader';

const Skills = ({ skills = [], title }: { skills: string[]; title?: string }) => (
  <Stack spacing={2}>
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
