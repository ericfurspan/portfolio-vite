import { Typography } from '@mui/material';

const SectionHeader = ({ title }: { title: string }) => (
  <Typography
    variant="caption"
    color="info.main"
    component="h2"
    fontWeight={600}
    sx={{ textTransform: 'uppercase' }}
  >
    {title}
  </Typography>
);

export default SectionHeader;
