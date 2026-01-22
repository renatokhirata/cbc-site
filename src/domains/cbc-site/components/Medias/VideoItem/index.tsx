import { Box } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import CardOverlay from '../../ItemOverlay';
import videoPlayerIcon from '../../../../../assets/icons/videoPlayerIcon.svg';
import ReactPlayer from 'react-player';

interface VideoMediaProps {
  url: string;
  alt: string;
}

const mediaContainerStyle = {
  aspectRatio: '16/9',
  borderRadius: 1.2,
  overflow: 'hidden',
  position: 'relative',
  maxWidth: '467px',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const VideoMedia: React.FC<VideoMediaProps> = ({ url, alt }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <Box sx={mediaContainerStyle}>
      <ReactPlayer
        url={url}
        alt={alt}
        playing={playing}
        onPlay={handleStart}
        onPause={handlePause}
        controls={true}
      />

      {!playing && (
        <CardOverlay onClick={handleStart}>
          <img
            src={videoPlayerIcon}
            alt="Play"
            style={{ width: 48, height: 48 }}
          />
        </CardOverlay>
      )}
    </Box>
  );
};

export default VideoMedia;
