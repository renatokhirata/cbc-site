import { Box, Container, Stack } from '@mui/material';
import CircularProgress from '../../components/CircularProgress';
import NewsGrid from './components/NewsGrid';
import PageHeader from '../../components/PageHeader';
import NewsSubHeader from './components/SubHeader/NewsSubHeader';
import pressIcon from '../../../../assets/icons/pressIcon.svg';
import { useGetNews } from '../../hooks/use-get-news';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';

const News = () => {
  const { data, isPending, error, isError } = useGetNews();
  const navigate = useNavigate();
  const { setSearchTerm, filteredItems } = useSearch(data || [], [
    'date',
    'title',
    'subtitle',
    'category',
  ]);

  if (isError) {
    return (
      <div>
        Erro ao carregar notícias:{' '}
        {error instanceof Error ? error.message : 'Erro desconhecido'}
      </div>
    );
  }

  if (isPending) {
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
    <Stack minHeight={'72vh'}>
      <PageHeader title={'Notícias'} icon={pressIcon} />
      <NewsSubHeader
        onSelectFilter={(filter) => setSearchTerm(filter)}
        onSearch={(searchTerm) => setSearchTerm(searchTerm)}
      />
      <Container maxWidth="xl" sx={{ py: 4, height: '100%' }}>
        <NewsGrid
          news={filteredItems}
          onClick={(id) => navigate(`/imprensa/noticias/${id}`)}
        />
      </Container>
    </Stack>
  );
};

export default News;
