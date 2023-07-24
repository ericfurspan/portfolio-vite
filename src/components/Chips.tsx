import { Chip, Grid, Stack } from '@mui/material';
import SectionHeader from './common/SectionHeader';

export interface ChipsProps {
  chips: string[];
  title?: string;
  justifyCenter?: boolean;
}

const Chips = ({ chips = [], title, justifyCenter }: ChipsProps) => (
  <Stack direction="column">
    {title && <SectionHeader title={title} />}

    <Grid container spacing={1.5} justifyContent={justifyCenter ? 'center' : 'initial'}>
      {chips.map((chip) => (
        <Grid item key={chip}>
          <Chip variant="filled" color="default" size="medium" label={chip} />
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default Chips;
