import { Box, Skeleton } from '@mui/material';
import { useState } from 'react';

const BannerInstitutional = ({
  institutionalBanner,
}: {
  institutionalBanner: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 180, md: 320 },
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      )}

      {institutionalBanner ? (
        <Box
          component="img"
          src={institutionalBanner}
          alt="Banner Institucional"
          width="100%"
          onLoad={() => setLoaded(true)}
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            transition: 'opacity 300ms ease',
            opacity: loaded ? 1 : 0,
          }}
        />
      ) : null}
    </Box>
  );
};

export default BannerInstitutional;
