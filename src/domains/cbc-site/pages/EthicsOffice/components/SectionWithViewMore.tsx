import { ReactNode } from 'react';
import ColoredTitle from '../../../components/ColoredTitle';
import { Box, Stack } from '@mui/material';
import MainButton from '../../../components/Buttons/MainButton';

interface SectionWithViewMoreProps {
  title: string;
  mobileTitle?: string;
  children: ReactNode;
  onViewMore: () => void;
  gradientSpacing?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

const SectionWithViewMore = ({
  title,
  mobileTitle,
  children,
  onViewMore,
  gradientSpacing = { xs: 40, sm: 30, md: 50, lg: 20 },
}: SectionWithViewMoreProps) => {
  return (
    <Stack
      display={'flex'}
      alignItems="center"
      justifyContent={'center'}
      position="relative"
    >
      <Box textAlign={'left'} width="100%" py={8}>
        <ColoredTitle
          title={title}
          color="typeText.tertiary"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        />
        {mobileTitle && (
          <ColoredTitle
            title={mobileTitle}
            color="typeText.tertiary"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          />
        )}
      </Box>

      {children}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{
          pt: gradientSpacing,
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          backgroundImage: 'linear-gradient(to top, #f5f5f5, transparent)',
          zIndex: 1000,
        }}
      >
        <MainButton label={'Ver mais'} onClick={onViewMore} isDark fullWidth />
      </Box>
    </Stack>
  );
};

export default SectionWithViewMore;
