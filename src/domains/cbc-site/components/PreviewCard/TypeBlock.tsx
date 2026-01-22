import { Stack, Box } from '@mui/material';
import TextContent from '../TextContent';
import cameraIcon from '../../../../assets/icons/camera.svg';

interface TypeBlockProps {
  isGallery?: boolean;
  type?: string;
  slug?: string;
}

const TypeBlock = ({ isGallery, type, slug }: TypeBlockProps) => {
  const showTypeContent = isGallery || !!type;

  return (
    <Stack
      direction={'row'}
      spacing={{ xs: 0.5, sm: 1 }}
      flexWrap="wrap"
      sx={{ rowGap: { xs: 0.5, sm: 0.75 } }}
    >
      {showTypeContent && (
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 0.75 }}
        >
          {isGallery ? (
            <Box
              component="img"
              src={cameraIcon}
              alt="Ícone de câmera"
              sx={{
                width: { xs: 24, sm: 26, md: 30 },
                height: { xs: 24, sm: 26, md: 30 },
              }}
            />
          ) : (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 0.5, sm: 0.75 }}
            >
              <TextContent
                content={type || ''}
                color="typeText.tertiary"
                fontWeight="bold"
                fontSize={{
                  xs: '1.125rem',
                  md: '1.5rem',
                }}
                marginBottom={0}
              />
              <TextContent
                content="•"
                color="typeText.tertiary"
                fontWeight={800}
                fontSize={{
                  xs: '1.125rem',
                  md: '1.5rem',
                }}
                marginBottom={0}
              />
            </Stack>
          )}
        </Stack>
      )}

      {slug && (
        <TextContent
          content={slug}
          color="typeText.tertiary"
          fontWeight={100}
          fontSize={{
            xs: '0.875rem',
            sm: '1.125rem',
            md: '1.375rem',
            lg: '1.875rem',
          }}
          sx={{ wordBreak: 'break-word', flex: '1 1 auto', minWidth: 0 }}
          marginBottom={0}
        />
      )}
    </Stack>
  );
};

export default TypeBlock;
