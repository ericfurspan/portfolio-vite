import { Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export interface ExpertiseProps {
  expertise: string[];
  title?: string;
}

const Expertise = ({ expertise = [] }: ExpertiseProps) => (
  <Container>
    {expertise.map((expertise) => (
      <Typography key={expertise} variant="body2" gutterBottom>
        <FontAwesomeIcon icon={faAngleRight} /> &nbsp; {`${expertise}`}
      </Typography>
    ))}
  </Container>
);

export default Expertise;
