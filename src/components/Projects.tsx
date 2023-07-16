import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import { Launch as LaunchIcon, GitHub as GitHubIcon } from '@mui/icons-material';

interface Props {
  projects: {
    title: string;
    subtitle?: string;
    liveUrl: string;
    sourceUrl: string;
    imageUrl: string;
    tools: string[];
  }[];
}

const Projects = ({ projects = [] }: Props) => {
  return (
    <Grid container spacing={8} direction="column" alignItems="center">
      {projects.map((project) => (
        <Grid item key={project.title}>
          <Card sx={{ width: 400 }}>
            <CardMedia
              component="img"
              height="130"
              sx={{ objectFit: 'scale-down', py: 1 }}
              image={project.imageUrl}
              title={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                {project.title}
              </Typography>

              {project.subtitle && (
                <Typography variant="body2" color="text.secondary">
                  {project.subtitle}
                </Typography>
              )}

              <Grid container spacing={1} mt={1}>
                {project.tools.map((tool) => (
                  <Grid item key={tool}>
                    <Chip size="small" variant="outlined" label={tool} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>

            <CardActions>
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="text"
                size="small"
                color="primary"
                endIcon={<LaunchIcon />}
              >
                Open
              </Button>
              <Button
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="text"
                size="small"
                color="inherit"
                endIcon={<GitHubIcon />}
              >
                View Source
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
