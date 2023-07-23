import { Typography } from '@mui/material';

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => (
  <Typography
    variant="subtitle2"
    component="h2"
    fontWeight={700}
    sx={{ textTransform: 'uppercase', mb: 3, alignSelf: 'center' }}
  >
    {title}
  </Typography>
);

export default SectionHeader;
