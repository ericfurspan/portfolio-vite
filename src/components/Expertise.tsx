import { Container, Typography } from '@mui/material';

interface Props {
  expertise: string[];
  title?: string;
}

const Expertise = ({ expertise }: Props) => (
  <Container>
    {expertise.map((expertise) => (
      <Typography key={expertise}>{expertise}</Typography>
    ))}
  </Container>
);

export default Expertise;
