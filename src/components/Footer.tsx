import { Typography } from '@mui/material';

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => (
  <Typography variant="overline" display="flex" justifyContent="center" p={1}>
    Copyright {new Date().getFullYear()} © {name}
  </Typography>
);

export default Footer;
