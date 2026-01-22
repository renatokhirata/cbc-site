import { Box, Stack } from '@mui/material';
import TextContent from '../../TextContent';
import formatNewsDate from '../../../../../shared/utils/formatNewsDate';
import { MediaResume } from '../../../interfaces/Media/IMedia';

interface NewsSnippetProps {
  title: string;
  category: string;
  date: string;
  coverImage: MediaResume;
  onClick: () => void;
}

const NewsSnippet: React.FC<NewsSnippetProps> = ({
  title,
  category,
  date,
  coverImage,
  onClick,
}) => {
  return (
    <Stack
      sx={{
        cursor: 'pointer',
        width: 'auto',
        height: '100%',
        boxSizing: 'border-box',
        maxWidth: { xs: 350, md: 440 },
      }}
      onClick={onClick}
    >
      <Box
        component="img"
        src={coverImage?.url}
        alt={title}
        borderRadius={2}
        sx={{
          width: '100%',
          height: { xs: 220, md: 260 },
          objectFit: 'cover',
        }}
      />

      <Stack
        spacing={0.5}
        sx={{
          justifyContent: 'space-between',
        }}
        flex={1}
        pt={1}
      >
        <Box sx={{ minHeight: 60, width: '100%' }}>
          <TextContent
            content={title}
            fontSize={{ xs: '1em', md: '1.2em' }}
            fontWeight={400}
            fontStyle={'regular'}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 3,
              wordBreak: 'break-word',
            }}
            component="span"
          />
        </Box>
        <Box sx={{ minHeight: 24, maxHeight: 24, width: '100%' }}>
          <TextContent
            content={`${category} ${date ? formatNewsDate(date) : ''}`}
            variant="body2"
            color="typeText.tertiary"
            marginBottom={0}
            fontSize={{ xs: '1rem', md: '1rem' }}
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default NewsSnippet;
