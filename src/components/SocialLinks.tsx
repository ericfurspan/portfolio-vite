import { Grid, IconButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faLinkedinIn,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SectionHeader } from '.';

const iconMap = {
  email: faEnvelope,
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  codepen: faCodepen,
};

interface Props {
  socialLinks: { name: keyof typeof iconMap; url: string }[];
  title?: string;
}

const SocialLinks = ({ socialLinks = [], title }: Props) => (
  <Stack spacing={2}>
    {title && <SectionHeader title={title} />}

    <Grid container spacing={1}>
      {socialLinks.map(({ name, url }) => (
        <Grid item key={name}>
          <IconButton
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            color="inherit"
            size="large"
            sx={{
              transition: 'transform 300ms ease',
              '&:hover': { transform: 'scale(1.1)' },
            }}
            disableRipple
          >
            <FontAwesomeIcon icon={iconMap[name]} />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default SocialLinks;
