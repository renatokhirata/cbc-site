import { Box, Button, Stack } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import { Gallery } from '../../../../interfaces/Media/IMedia';
import MediaItem from './Mediaitem';
import Carousel from '../../../../components/Carousel';
import downloadGalleryIcon from '../../../../../../assets/icons/downloadIGallery.svg';
import useBreakpoint from '../../../../hooks/useBreakpoint';

interface CarouselSectionProps {
  title: string;
  galleryItems: Gallery[];
  onClick: () => void;
  isDownloadable?: boolean;
  isRightResolution?: boolean;
  withDescription?: boolean;
}

const CarouselSection = ({
  title,
  galleryItems,
  onClick,
  isRightResolution = false,
  isDownloadable = false,
  withDescription = false,
}: CarouselSectionProps) => {
  const isMobile = useBreakpoint('md');

  return (
    <Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="flex-end"
        my={4}
        justifyContent={{ xs: 'space-between', md: 'flex-start' }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={'center'}
          alignItems={{ xs: 'flex-start', md: 'baseline' }}
          spacing={{ sx: 0, md: 1 }}
        >
          <ColoredTitle title={title} color="typeText.tertiary" />
          {isRightResolution && (
            <ColoredTitle
              title="(alta resolução)"
              color="typeText.tertiary"
              fontSize="1.2rem"
            />
          )}
        </Stack>
        {isDownloadable && (
          <Button
            startIcon={
              !isMobile ? (
                <Box component="img" src={downloadGalleryIcon} alt="Baixar" />
              ) : undefined
            }
            sx={{
              bgcolor: 'button.default',
              color: 'typeText.primary',
              fontWeight: 400,
              fontSize: '1rem',
              borderRadius: { xs: 2, md: 1 },
              width: { xs: 45, md: 155 },
              height: { xs: 60, md: 50 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& .MuiButton-startIcon': {
                margin: { xs: 0, md: '0 8px 0 0' },
              },
            }}
            onClick={() => {}}
          >
            {isMobile ? (
              <Box component="img" src={downloadGalleryIcon} alt="Baixar" />
            ) : (
              'Baixar tudo'
            )}
          </Button>
        )}
      </Stack>

      <Carousel
        slides={galleryItems}
        renderSlide={(item: Gallery, index: number) => (
          <MediaItem
            item={item}
            index={index}
            onClick={onClick}
            withDescription={withDescription}
          />
        )}
        slideGap={20}
        withControls={false}
        withIndicators={false}
        slideSize="auto"
        align="start"
        draggable={true}
        sx={{
          width: 'calc(100% + 64px)',
          marginLeft: 0,
          marginRight: '-64px',
          paddingRight: '64px',
          '& .mantine-Carousel-container': {
            overflow: 'visible !important',
          },
        }}
      />
    </Stack>
  );
};

export default CarouselSection;
