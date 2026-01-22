import { Box, Stack } from '@mui/material';
import TextContent from '../../../../components/TextContent';
import formatNewsDate from '../../../../../../shared/utils/formatNewsDate';

interface NewsSnippetProps {
  title: string;
  date: string;
  image: { url: string }[];
  onClick: () => void;
  category: string;
}

const NewsCard: React.FC<NewsSnippetProps> = ({
  title,
  date,
  image,
  onClick,
  category,
}) => {
  return (
    <Stack
      width="100%"
      onClick={onClick}
      spacing={1}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Box
        component="img"
        src={image[0].url}
        alt={title}
        borderRadius={2}
        sx={{
          width: '100%',
          height: '100%',
          aspectRatio: '16/9',
          objectFit: 'cover',
        }}
      />
      <Stack
        justifyContent="space-between"
        flex={1}
        alignItems="flex-start"
        spacing={1}
        pt={1}
      >
        <Box height={{ xs: 70, sm: 80, md: 90 }} width="100%">
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
            }}
          />
        </Box>

        <Stack direction="row" alignItems={'center'} maxWidth={'100%'} pr={1}>
          <TextContent
            content={`${category} ${date ? formatNewsDate(date) : ''}`}
            color="typeText.secondary"
            fontWeight={400}
            mt={1}
            fontSize={{ xs: '0.875rem', md: '1rem' }}
            textTransform="none"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewsCard;
