import { Box, Divider, Grid, Stack } from '@mui/material';
import ColoredTitle from '../../../../../../components/ColoredTitle';
import TextContent from '../../../../../../components/TextContent';
import useBreakpoint from '../../../../../../hooks/useBreakpoint';
import { ModalityInfo } from '../../../../../../interfaces/Modality/IModality';

const ModalityInfoItem: React.FC<{ info: ModalityInfo }> = ({ info }) => {
  const isMobile = useBreakpoint('md');
  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid size={{ xs: 12, md: 5.5 }}>
        <Box
          component="img"
          src={info.coverImage}
          alt={info.title}
          sx={{
            width: { xs: '100%', md: '98%' },
            height: 'auto',
            objectFit: 'cover',
            flexShrink: 0,
            boxShadow: { xs: 2, md: 4 },
            mb: { xs: 2, md: 0 },
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6.5 }}>
        {!isMobile && <Divider sx={{ mb: { xs: 2, md: 4 } }} />}
        <Box sx={{ px: { xs: 2, md: 0 }, py: { xs: 1, md: 0 } }}>
          <Stack>
            <ColoredTitle
              title={info.title}
              color={'typeText.default'}
              fontSize={{ xs: '16px', md: '20px' }}
              fontWeight={700}
            />
            <TextContent content={info.description} />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ModalityInfoItem;
