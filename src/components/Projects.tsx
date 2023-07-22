import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
  ButtonGroup,
} from '@mui/material';
import { Launch as LaunchIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { SectionHeader } from '.';

interface Props {
  projects: {
    title: string;
    subtitle?: string;
    liveUrl: string;
    sourceUrl: string;
    imageUrl: string;
    tools: string[];
  }[];
  title?: string;
}

const Projects = ({ projects = [], title }: Props) => {
  return (
    <Stack spacing={2}>
      {title && <SectionHeader title={title} />}

      <Grid container spacing={3}>
        {projects.map(({ title, subtitle, tools, imageUrl, liveUrl, sourceUrl }) => (
          <Grid item xs={12} md={6} key={title}>
            <Card variant="outlined" sx={{ p: 2, height: '100%' }}>
              <CardMedia
                component="img"
                height="80"
                sx={{ objectFit: 'contain' }}
                image={imageUrl}
                title={title}
              />
              <CardContent sx={{ height: 150 }}>
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>

                {subtitle && (
                  <Typography variant="body2" color="text.secondary">
                    {subtitle}
                  </Typography>
                )}

                <Grid container spacing={1} mt={1}>
                  {tools.map((tool) => (
                    <Grid item key={tool}>
                      <Chip size="small" color="default" variant="filled" label={tool} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>

              <CardActions sx={{ mt: 2 }}>
                <ButtonGroup
                  size="medium"
                  aria-label={`${title} project links`}
                  fullWidth
                  disableElevation
                >
                  <Button
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}
                  >
                    Open
                  </Button>
                  {sourceUrl && (
                    <Button
                      href={sourceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      endIcon={<GitHubIcon />}
                    >
                      View Source
                    </Button>
                  )}
                </ButtonGroup>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Projects;
