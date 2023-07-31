import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
  Box,
} from '@mui/material';
import { Launch as LaunchIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { SectionHeader, Tooltip } from './common';
import { Chips } from '.';

export interface ProjectsProps {
  projects: {
    title: string;
    subtitle?: string;
    liveUrl: string;
    sourceUrl: string;
    imgUrl: string;
    tools: string[];
  }[];
  title?: string;
}

const missingImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

const Projects = ({ projects = [], title }: ProjectsProps) => (
  <Stack direction="column">
    {title && <SectionHeader title={title} />}

    <Grid container spacing={4}>
      {projects.map(({ title, subtitle, tools, imgUrl, liveUrl, sourceUrl }) => (
        <Grid item xs={12} md={6} key={title}>
          <Card
            component={Stack}
            justifyContent="space-between"
            variant="outlined"
            sx={{ px: 0.75, py: 2 }}
          >
            <Box>
              <CardMedia
                component="img"
                height="125"
                sx={{ objectFit: 'contain', objectPosition: '50% 50%', opacity: !imgUrl ? 0.5 : 1 }}
                image={imgUrl || missingImageUrl}
                title={title}
              />
              <Divider variant="middle" light sx={{ mt: 2 }} />
            </Box>

            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">
                {title}
              </Typography>

              {subtitle && (
                <Typography variant="body2" color="text.secondary">
                  {subtitle}
                </Typography>
              )}

              <Box height={100} overflow="auto" mt={3}>
                {tools.length ? <Chips chips={tools} /> : null}
              </Box>
            </CardContent>

            <CardActions>
              {liveUrl && (
                <Tooltip title={liveUrl} placement="top" arrow describeChild>
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
                </Tooltip>
              )}

              {sourceUrl && (
                <Tooltip title={sourceUrl} placement="top" arrow describeChild>
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
                </Tooltip>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default Projects;
