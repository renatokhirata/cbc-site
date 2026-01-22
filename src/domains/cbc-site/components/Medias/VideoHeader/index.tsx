import { Box } from '@mui/material';
import { useRef, useEffect } from 'react';
import useBanner from '../../../hooks/useBanner';
import useBreakpoint from '../../../hooks/useBreakpoint';

const VideoHeader = () => {
  const { banners } = useBanner();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useBreakpoint('md');

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.loop = false;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    }
  }, [banners]);

  const handleEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    try {
      v.currentTime = Math.max(0, (v.duration || 0) - 0.001);
    } catch {
      /* empty */
    }
  };

  return (
    <Box
      component="video"
      ref={videoRef as unknown as React.Ref<HTMLVideoElement>}
      src={
        isMobile
          ? banners.mobileBanner
            ? banners.mobileBanner
            : banners.banner
          : banners.banner
      }
      autoPlay
      muted
      playsInline
      controls={false}
      onEnded={handleEnded}
      sx={{
        cursor: 'default',
        objectFit: 'cover',
        pointerEvents: 'none',
        width: '100%',
        height: { xs: '24vh', sm: '42vh', md: '50vh' },
        display: 'block',
      }}
      aria-label="banner-video"
    />
  );
};

export default VideoHeader;
