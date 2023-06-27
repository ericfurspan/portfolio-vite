import { Grid, IconButton } from '@mui/material';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const iconMap = {
  email: <EmailIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
};

interface Props {
  socialLinks: { name: string; url: string }[];
}

const SocialLinks = ({ socialLinks = [] }: Props) => {
  return (
    <>
      <Grid container spacing={1}>
        {socialLinks.map((social) => (
          <IconButton>{iconMap[social.name]}</IconButton>
        ))}
      </Grid>
    </>
  );
};

export default SocialLinks;
