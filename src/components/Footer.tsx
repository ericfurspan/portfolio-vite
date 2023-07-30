import { Stack, Typography } from '@mui/material';
import { ToggleColorMode } from './common';

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => (
  <Stack direction="row" alignItems="center" justifyContent="center" spacing={4} p={1}>
    <Typography variant="overline" display="flex" justifyContent="center">
      Copyright {new Date().getFullYear()} © {name}
    </Typography>

    <ToggleColorMode />
  </Stack>
);

export default Footer;
