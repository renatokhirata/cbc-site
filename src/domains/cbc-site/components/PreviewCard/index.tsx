import { Stack, Box, Typography } from '@mui/material';
import { Gallery } from '../../interfaces/Media/IMedia';
import DateBlock from './DateBlock';
import TypeBlock from './TypeBlock';

interface PreviewCardProps {
  image?: string;
  EventTitle?: string;
  date?: string;
  type?: string;
  slug?: string;
  galleryData?: Gallery;
}

const PreviewCard = ({
  image,
  EventTitle,
  date,
  type,
  slug,
  galleryData,
}: PreviewCardProps) => {
  const displayData = galleryData
    ? {
        image: galleryData.coverImage,
        EventTitle: galleryData.title,
        date: galleryData.date,
        type: galleryData.category,
        slug: `${galleryData.photoCount} fotos`,
      }
    : {
        image: image || '',
        EventTitle: EventTitle || '',
        date: date || '',
        type: type || '',
        slug: slug || '',
      };
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      mb={{ xs: 0, md: 10 }}
    >
      <Box
        component={'img'}
        src={displayData.image}
        alt={displayData.EventTitle}
        width={{ xs: '100%', md: 1800 }}
        height={{ xs: 230, md: 500 }}
        sx={{
          objectFit: 'cover',
          borderRadius: 0.5,
        }}
      />
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        justifyContent="space-between"
        height="100%"
        width="100%"
        spacing={{ xs: 2, md: 4 }}
      >
        {/* DateBlock */}
        <DateBlock date={displayData.date} />

        <Stack spacing={{ xs: 1, md: 2 }} justifyContent={'end'}>
          <TypeBlock
            isGallery={Boolean(galleryData)}
            type={displayData.type}
            slug={displayData.slug}
          />

          <Stack width={{ sx: 10, md: 500 }} justifyContent={'end'}>
            <Typography
              fontSize={{
                xs: '1.5rem',
                md: '2.25rem',
              }}
              color="typeText.default"
              fontWeight={'bold'}
              sx={{ lineHeight: 1.2 }}
            >
              {displayData.EventTitle}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PreviewCard;
