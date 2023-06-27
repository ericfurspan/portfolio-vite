import { Card, CardMedia, CardContent, CardActions, Grid, Typography, Button } from '@mui/material';

interface Props {
  projects: { name: string }[];
}

const Projects = ({ projects = [] }: Props) => {
  return (
    <>
      <Typography variant="overline">Skills</Typography>
      <Grid container spacing={1}>
        {projects.map((project) => (
          <Grid item key={project.name}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
