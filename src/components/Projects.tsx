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
  Divider,
} from '@mui/material';
import { Launch as LaunchIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { SectionHeader } from './common';

export interface ProjectsProps {
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

const Projects = ({ projects = [], title }: ProjectsProps) => (
  <Stack direction="column">
    {title && <SectionHeader title={title} />}

    <Grid container spacing={3}>
      {projects.map(({ title, subtitle, tools, imageUrl, liveUrl, sourceUrl }) => (
        <Grid item xs={12} md={6} key={title}>
          <Card variant="outlined" sx={{ p: 2, height: '100%' }}>
            <CardMedia
              component="img"
              height="110"
              sx={{ objectFit: 'contain', objectPosition: 'center top' }}
              image={new URL(imageUrl, import.meta.url).href}
              title={title}
            />

            <Divider variant="middle" light sx={{ my: 2 }} />

            <CardContent>
              <Typography gutterBottom variant="h6" component="h3" fontWeight={400}>
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
                    <Chip size="small" color="default" variant="outlined" label={tool} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>

            <CardActions sx={{ mt: 2 }}>
              <Button
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="contained"
                color="primary"
                size="small"
                endIcon={<LaunchIcon />}
                fullWidth
                disableElevation
              >
                Open
              </Button>

              {sourceUrl && (
                <Button
                  href={sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="outlined"
                  color="inherit"
                  size="small"
                  endIcon={<GitHubIcon />}
                  fullWidth
                  disableElevation
                >
                  View Source
                </Button>
              )}
              {/* </ButtonGroup> */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default Projects;
