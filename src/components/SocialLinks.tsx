import { createElement } from 'react';
import { Grid, IconButton, Stack, createSvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faLinkedinIn,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SectionHeader } from '.';

const DailyDevIcon = createSvgIcon(
  <svg viewBox="0 0 256 144" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <title>daily.dev</title>
    <g>
      <path d="M219.832837,71.6995129 L191.573071,43.3805814 L205.69559,15.0714884 L251.612188,61.0842182 C257.462604,66.9468836 257.462604,76.4521422 251.612188,82.3148081 L195.097565,138.947752 C189.247148,144.810417 179.761748,144.810417 173.911332,138.947752 C168.060915,133.085086 168.060915,123.579827 173.911332,117.717162 L219.832837,71.6995129 Z"></path>
      <path d="M173.921862,4.39576953 C179.772279,-1.46689601 189.260133,-1.46443637 195.11055,4.39822916 L205.706121,15.0159838 L82.0886685,138.892247 C76.238252,144.754913 66.7503974,144.752453 60.8999803,138.889788 L50.3044093,128.272033 L173.921862,4.39576953 Z M120.941551,43.3299961 L99.7504086,64.5655051 L71.4906426,36.2465737 L36.167163,71.6440084 L64.4269285,99.96294 L50.3044093,128.272033 L4.38781264,82.2593032 C-1.46260421,76.3966377 -1.46260421,66.8913792 4.38781264,61.0287132 L60.8999803,4.39822916 C66.7503974,-1.46443637 76.238252,-1.46689601 82.0886685,4.39576953 L120.941551,43.3299961 Z"></path>
    </g>
  </svg>,
  'DailyDev',
);

const faIconMap = {
  email: faEnvelope,
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  codepen: faCodepen,
};

const customIconMap = {
  dailydev: DailyDevIcon,
};

type SocialLinks =
  | {
      name: keyof typeof faIconMap;
      url: string;
      customIcon?: never;
    }[]
  | {
      name: keyof typeof customIconMap;
      url: string;
      customIcon: true;
    }[];

interface Props {
  socialLinks: SocialLinks;
  title?: string;
}

const SocialLinks = ({ socialLinks = [], title }: Props) => (
  <Stack direction="column" alignSelf="center">
    {title && <SectionHeader title={title} />}

    <Grid container spacing={2}>
      {socialLinks.map(({ name, url, customIcon }) => (
        <Grid item key={name}>
          <IconButton
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Link to ${name}`}
            color="inherit"
            size="large"
            disableRipple
            sx={{
              transition: 'transform 300ms ease',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            {customIcon ? (
              createElement(customIconMap[name])
            ) : (
              <FontAwesomeIcon icon={faIconMap[name]} />
            )}
          </IconButton>
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default SocialLinks;
