import { Divider, Stack, Typography } from '@mui/material';

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => (
  <Stack spacing={2} mb={4} alignItems="center" id={title}>
    <Typography
      variant="subtitle2"
      component="h2"
      fontWeight={700}
      sx={{ textTransform: 'uppercase' }}
    >
      {title}
    </Typography>

    <Divider sx={{ maxWidth: 75, width: '100%', borderColor: 'info.dark', borderWidth: '2px' }} />
  </Stack>
);

export default SectionHeader;
