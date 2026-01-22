import { Box, Stack } from '@mui/material';
import ColoredTitle from '../../ColoredTitle';
import TextContent from '../../TextContent';
import bigArrow from '../../../../../assets/icons/bigArrow.svg';
import useBreakpoint from '../../../hooks/useBreakpoint';

interface InfoButtonProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'tertiary' | 'default';
  onClick?: () => void;
  isCarouselItem?: boolean;
}

const InfoButton = ({
  title,
  subtitle,
  icon,
  color,
  onClick,
  isCarouselItem,
}: InfoButtonProps) => {
  const isMobile = useBreakpoint('lg');
  const Title = (
    <>
      <Box textTransform={'uppercase'}>
        <ColoredTitle
          title={title}
          color="typeText.primary"
          fontSize={{ xs: '1.5rem', md: '2rem' }}
          noWrap
        />
      </Box>
    </>
  );

  const Subtitle = (
    <>
      <Box sx={{ '& p': { m: 0 } }}>
        <TextContent
          color="typeText.primary"
          content={subtitle}
          marginBottom={0}
        />
      </Box>
    </>
  );

  return (
    <Stack
      onClick={onClick}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        backgroundColor: `button.${color}`,
        borderRadius: 4,
        width: '100%',
        py: 1.6,
        minHeight: { xs: 120, lg: 180 },
        minWidth: isCarouselItem ? { xs: 'auto', md: 700 } : 'auto',
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.01)',
          transition: 'transform 0.3s',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        alignItems={{ xs: 'flex-start', lg: 'center' }}
        justifyContent={{ xs: 'center', lg: 'space-between' }}
        px={4}
        width={'100%'}
        spacing={{ xs: 0, lg: 4 }}
      >
        <Stack
          direction={'row'}
          spacing={{ xs: 1, md: 2 }}
          alignItems={'center'}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
          {isMobile ? Title : null}
        </Stack>
        <Stack
          sx={{
            textAlign: { xs: 'left', lg: 'left' },
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {!isMobile ? (
            <Box
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {Title}
            </Box>
          ) : null}
          <Box
            sx={{
              '& p': {
                m: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              },
            }}
          >
            {Subtitle}
          </Box>
        </Stack>
        <Box
          component={'img'}
          src={bigArrow}
          sx={{
            display: { xs: 'none', lg: 'block' },
            ml: { lg: -5 },
            pr: { lg: 5 },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default InfoButton;
