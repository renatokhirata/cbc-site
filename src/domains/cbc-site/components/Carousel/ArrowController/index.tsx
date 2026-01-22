import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ArrowControllerProps {
  handleScrollRight: () => void;
  handleScrollLeft: () => void;
  isAtStart: boolean;
  isAtEnd: boolean;
  color?: string;
  boxShadow?: number | string;
  topPosition?: number;
  rightPosition?: number | { md: number; lg: number };
}

const ArrowController = ({
  handleScrollRight,
  handleScrollLeft,
  isAtStart,
  isAtEnd,
  color = '#1C2142',
  boxShadow = 2,
  topPosition = 30,
  rightPosition = 60,
}: ArrowControllerProps) => {
  return (
    <Box
      position={'absolute'}
      top={topPosition}
      right={rightPosition}
      width="100%"
    >
      <IconButton
        aria-label="scroll right"
        onClick={handleScrollRight}
        sx={{
          position: 'absolute',
          right: 15,
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'white',
          boxShadow: boxShadow,
        }}
      >
        <ArrowForwardIcon sx={{ color: isAtEnd ? 'grey.300' : color }} />
      </IconButton>
      <IconButton
        aria-label="scroll left"
        onClick={handleScrollLeft}
        sx={{
          position: 'absolute',
          right: 60,
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'white',
          boxShadow: boxShadow,
        }}
      >
        <ArrowBackIcon sx={{ color: isAtStart ? 'grey.300' : color }} />
      </IconButton>
    </Box>
  );
};

export default ArrowController;
