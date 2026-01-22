import { Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import CircularProgress from '../../components/CircularProgress';
import Hero from './components/Hero';
import Body from './components/Body';
import { useGetNewsById } from '../../hooks/use-get-news';

const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: news, isLoading, isError, error } = useGetNewsById(id || '');

  if (isError) return <div>Error: {error.message}</div>;

  if (isLoading) {
    return (
      <Box
        sx={{
          my: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress color="loading.secondary" />
      </Box>
    );
  }

  return (
    <Stack height={'100%'} spacing={20} width={'100%'} alignItems={'center'}>
      <Hero news={news || null} />
      <Body news={news || null} id={id || ''} />
    </Stack>
  );
};

export default NewsDetails;
