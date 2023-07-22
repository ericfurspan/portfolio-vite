import { alpha } from '@mui/material';

const PRIMARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#1660E9',
  dark: '#1939B7',
  darker: '#091A7A',
};

const SECONDARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#13A300',
  dark: '#007B55',
  darker: '#005249',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#0f0f0f',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const COMMON = {
  common: { black: GREY[900], white: GREY[0] },
  primary: { ...PRIMARY, contrastText: GREY[0] },
  secondary: { ...SECONDARY, contrastText: GREY[0] },
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: GREY[0], default: GREY[100], neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: GREY[0], secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[500_8], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const;

export default palette;
