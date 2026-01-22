import { CircularProgress as MuiCircularProgress } from '@mui/material';

const CircularProgress: React.FC<{ color: string; size?: number }> = ({
  color,
  size,
}) => {
  return <MuiCircularProgress sx={{ color }} size={size} />;
};

export default CircularProgress;
