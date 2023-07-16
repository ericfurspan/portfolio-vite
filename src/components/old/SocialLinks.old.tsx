import { AnchorHTMLAttributes } from 'react';
import { Grid, Button, IconButton, Stack, ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faLinkedinIn,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './common/SectionHeader';

const iconMap = {
  email: faEnvelope,
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  codepen: faCodepen,
};

const SocialLinks = ({
  socialLinks = [],
  title,
  iconOnly = false,
}: {
  socialLinks: { name: keyof typeof iconMap; url: string }[];
  title?: string;
  iconOnly?: boolean;
}) => (
  <Stack alignItems="center" spacing={2}>
    {/* {title && <SectionHeader title={title} />} */}

    <Grid container spacing={1} justifyContent="center">
      {socialLinks.map(({ name, url }) => {
        const icon = <FontAwesomeIcon icon={iconMap[name]} />;

        const buttonProps: ButtonProps & AnchorHTMLAttributes<'button'> = {
          href: url,
          target: '_blank',
          rel: 'noreferrer noopener',
          color: 'inherit',
          sx: {
            transition: 'transform 300ms ease',
            '&:hover': { transform: 'scale(1.1)' },
          },
        };

        return (
          <Grid item key={name}>
            {iconOnly ? (
              <IconButton {...buttonProps} size="small" disableRipple>
                {icon}
              </IconButton>
            ) : (
              <Button {...buttonProps} variant="text" startIcon={icon}>
                {name}
              </Button>
            )}
          </Grid>
        );
      })}
    </Grid>
  </Stack>
);

export default SocialLinks;
