import { Button, Link, Stack } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import { SectionHeader } from '.';
import appConfig from '../config';

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
      sx={{ alignSelf: 'end', mr: 3 }}
    >
      Download PDF
    </Button>

    <object
      data={appConfig.resumeViewUrl}
      title={`${appConfig.name} Résumé`}
      width="100%"
      height="1000px"
    >
      Unable to load this document. Please try the&nbsp;
      <Link href={appConfig.resumeDownloadUrl}>download link</Link>
      &nbsp;instead.
    </object>
  </Stack>
);

export default Resume;
