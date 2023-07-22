import { Typography } from '@mui/material';

const SectionHeader = ({ title }: { title: string }) => (
  <Typography
    variant="subtitle2"
    color="info.dark"
    component="h2"
    fontWeight={600}
    sx={{ textTransform: 'uppercase', mb: 2 }}
  >
    {title}
  </Typography>
);

export default SectionHeader;
