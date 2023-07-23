import { Chip, Grid, Stack } from '@mui/material';
import SectionHeader from './common/SectionHeader';

export interface SkillsProps {
  skills: string[];
  title?: string;
}

const Skills = ({ skills = [], title }: SkillsProps) => (
  <Stack direction="column">
    {title && <SectionHeader title={title} />}

    <Grid container spacing={1} justifyContent="center">
      {skills.map((skill) => (
        <Grid item key={skill}>
          <Chip variant="filled" color="default" size="small" label={skill} />
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default Skills;
