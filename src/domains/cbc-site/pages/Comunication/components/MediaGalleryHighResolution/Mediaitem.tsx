import { Box, Stack } from '@mui/material';
import { Gallery } from '../../../../interfaces/Media/IMedia';
import cameraIcon from '../../../../../../assets/icons/camera.svg';
import TextContent from '../../../../components/TextContent';

interface MediaItemProps {
  item: Gallery;
  index: number;
  onClick: () => void;
  withDescription?: boolean;
}

const MediaItem = ({
  item,
  index,
  onClick,
  withDescription = false,
}: MediaItemProps) => {
  const photoCount = item.medias?.length || 0;
  const category = item.category || '';
  const date = item.date || '';

  return (
    <Stack
      key={item.id ?? index}
      spacing={1}
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    >
      <Box
        component="img"
        src={item.coverImage}
        alt={item.coverAlt}
        sx={{
          width: 427,
          maxWidth: 427,
          height: 260,
          borderRadius: 2,
          objectFit: 'cover',
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://via.placeholder.com/427x260?text=Imagem+n%C3%A3o+dispon%C3%ADvel';
        }}
      />
      {withDescription && (
        <Stack spacing={1}>
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={1}
          >
            <Box
              component="img"
              src={cameraIcon}
              alt="Fotos"
              sx={{ width: 24, height: 24, opacity: 1 }}
            />
            <TextContent
              content={`${photoCount} fotos`}
              color="typeText.tertiary"
              marginBottom={0}
              fontSize={'16px'}
            />
          </Stack>
          <TextContent
            content={`${category} (${date})`}
            color="typeText.tertiary"
            fontSize={'16px'}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default MediaItem;
