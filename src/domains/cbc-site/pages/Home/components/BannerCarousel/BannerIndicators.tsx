import { Box, Stack } from '@mui/material';
import TextContent from '../../../../components/TextContent';
import { Banner } from '../../type/Banner';
interface BannerIndicatorsProps {
  banners: Banner[];
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
}

const BannerIndicators: React.FC<BannerIndicatorsProps> = ({
  banners,
  currentIndex,
  onIndicatorClick,
}) => {
  return (
    <Box display="flex" gap={3} py={2} sx={{ overflowX: 'auto' }}>
      {banners.map((banner, index) => {
        const isActive = index === currentIndex;
        return (
          <Stack
            key={banner.id}
            spacing={1}
            onClick={() => onIndicatorClick(index)}
            width={{ xs: '60px', sm: 'auto' }}
            sx={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Barra indicadora */}
            <Box
              height={isActive ? 8 : 4}
              width="100%"
              bgcolor={isActive ? 'typeText.primary' : 'typeText.tertiary'}
              borderRadius={isActive ? 0 : 2}
              position="relative"
              overflow="hidden"
              sx={{
                transition: 'background-color 0.3s ease',
              }}
            />
            {/* Título do slide */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <TextContent
                content={banner.nameIndicator}
                color="typeText.primary"
                fontSize="1rem"
              />
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default BannerIndicators;
