import { Chip, Grid, Typography } from '@mui/material';

interface Props {
  skills: string[];
}

const Skills = ({ skills = [] }: Props) => {
  return (
    <>
      <Typography variant="overline">Skills</Typography>
      <Grid container spacing={1}>
        {skills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Skills;
