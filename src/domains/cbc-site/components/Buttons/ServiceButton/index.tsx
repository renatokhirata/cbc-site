import React from 'react';
import { Box, ButtonBase, useTheme, Stack } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';

interface ServiceButtonData {
  icon: string;
  title: string;
  backgroundColor: string;
  href?: string;
}

interface ServiceButtonProps {
  button: ServiceButtonData;
  onClick: () => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ button, onClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <ButtonBase
        onClick={() => onClick()}
        sx={{
          position: 'relative',
          height: { xs: 240, md: 300 },
          width: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: button.backgroundColor,
          backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1px, transparent 1px)`,
          backgroundSize: '10px 10px',
          transition: theme.transitions.create(['transform', 'box-shadow'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[8],
            '& .card-backdrop': {
              opacity: 0.1,
            },
            '& .card-content': {
              '& .MuiTypography-root': {
                transform: 'scale(1.05)',
              },
            },
          },
          '&:active': {
            transform: 'translateY(-2px)',
          },
        }}
      >
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: 4,
            gap: 2,
            width: '100%',
          }}
        >
          <Box component="img" width={{ xs: 80, md: 120 }} src={button.icon} />
          <ColoredTitle
            title={button.title}
            color="typeText.primary"
            sx={{ fontSize: { xs: '1em', md: '1.2em', lg: '2.5em' } }}
          />
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default ServiceButton;
