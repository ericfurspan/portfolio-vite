import { useState } from 'react';
import { Box, Button, Link, Stack, Collapse } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import { SectionHeader } from './common';
import appConfig from '../config';

interface Props {
  title?: string;
}

const Resume = ({ title }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisible = () => setIsVisible(!isVisible);

  return (
    <Stack direction="column" alignSelf="center">
      {title && <SectionHeader title={title} />}

      <Stack direction="row" spacing={1} maxWidth={350}>
        <Button variant="contained" color="info" onClick={handleChangeVisible} fullWidth>
          {isVisible ? 'Hide' : 'View'}
        </Button>
        <Button
          href={appConfig.resumeDownloadUrl}
          target="_blank"
          rel="noreferrer noopener"
          endIcon={<DownloadIcon />}
          variant="outlined"
          color="inherit"
          fullWidth
        >
          Download
        </Button>
      </Stack>

      <Collapse in={isVisible}>
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
      </Collapse>
    </Stack>
  );
};

export default Resume;
