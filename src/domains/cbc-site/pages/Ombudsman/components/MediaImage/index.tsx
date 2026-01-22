import React from 'react';
import { Box, SxProps, Theme, BoxProps } from '@mui/material';

type Props = {
  src: string;
  alt?: string;
  sx?: SxProps<Theme>;
  wrapperProps?: BoxProps;
};

const OmbudsmanImage: React.FC<Props> = ({ src, alt = '', sx }) => {
  return <Box component="img" src={src} alt={alt} width="100%" sx={sx} />;
};

export default OmbudsmanImage;
