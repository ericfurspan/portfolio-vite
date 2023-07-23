import { Typography } from '@mui/material';

export interface ExpertiseProps {
  expertise: string[];
  title?: string;
}

const Expertise = ({ expertise }: ExpertiseProps) => (
  <>
    {expertise.map((expertise) => (
      <Typography key={expertise}>{expertise}</Typography>
    ))}
  </>
);

export default Expertise;
