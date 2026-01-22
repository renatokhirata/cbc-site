import { Box } from '@mui/material';
import secondaryBanner from '../../../../../assets/images/banners/secondaryBanner.jpg';

export const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <Box
        component="img"
        src={secondaryBanner}
        alt="Banner secundário"
        loading="lazy"
        draggable={false}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: { md: 'left', lg: 'center' },
          display: 'block',
        }}
      />
    </Box>
  );
};
