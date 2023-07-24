import { Box, Button, Link, Stack } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import { SectionHeader } from './common';
import appConfig from '../config';
// import ResumeDownloadBtn from './ResumeDownloadBtn';

interface Props {
  title?: string;
}

const Resume = ({ title }: Props) => (
  <Stack direction="column">
    {title && <SectionHeader title={title} />}

    <Button
      href={appConfig.resumeDownloadUrl}
      target="_blank"
      rel="noreferrer noopener"
      variant="text"
      color="info"
      size="medium"
      endIcon={<DownloadIcon />}
      sx={{ alignSelf: { xs: 'flex-start', sm: 'flex-end' }, mr: { xs: 0, sm: 3 }, mb: 1 }}
    >
      Download PDF
    </Button>

    {/* <ResumeDownloadBtn /> */}

    <Box
      component="object"
      data={appConfig.resumeViewUrl}
      title={`${appConfig.name} Résumé`}
      width="100%"
      height={{ xs: '2000px', sm: '1000px' }}
    >
      Unable to load this document. Please try the&nbsp;
      <Link href={appConfig.resumeDownloadUrl}>download link</Link>
      &nbsp;instead.
    </Box>
  </Stack>
);

export default Resume;
