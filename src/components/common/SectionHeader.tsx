import { Divider, Stack, Typography } from '@mui/material';

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => (
  <Stack spacing={1.5} mb={6} alignItems="center" id={title}>
    <Typography variant="subtitle2" component="h2" sx={{ textTransform: 'uppercase' }}>
      {title}
    </Typography>

    <Divider sx={{ maxWidth: 70, width: '100%', borderColor: 'info.dark', borderWidth: '1px' }} />
  </Stack>
);

export default SectionHeader;
