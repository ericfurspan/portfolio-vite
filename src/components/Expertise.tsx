import { Container, Typography } from '@mui/material';

export interface ExpertiseProps {
  expertise: string[];
  title?: string;
}

const Expertise = ({ expertise }: ExpertiseProps) => (
  <Container>
    {expertise.map((expertise) => (
      <Typography key={expertise} variant="subtitle2" fontWeight={300}>
        {`- ${expertise}`}
      </Typography>
    ))}
  </Container>
);

export default Expertise;
