import { useEffect, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

const TriangularArrow = ({ open }: { open: boolean }) => {
  const [arrowToggle, setArrowToggle] = useState(false);

  const handleArrowClick = () => {
    setArrowToggle(!arrowToggle);
  };

  useEffect(() => {
    setArrowToggle(open);
  }, [open]);

  return (
    <ExpandMore
      onClick={handleArrowClick}
      sx={{
        transform: arrowToggle ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    />
  );
};

export default TriangularArrow;
