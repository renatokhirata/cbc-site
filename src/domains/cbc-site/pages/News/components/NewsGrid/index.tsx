import { Box, Grid, Stack } from '@mui/material';
import { NewsResume } from '../../../../interfaces/News/INews';
import NewsCard from './NewsCard';
import HeroCard from './HeroCard';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import NewsPagination from './NewsPagination';
import TextContent from '../../../../components/TextContent';

type News = {
  news: NewsResume[];
  onClick: (id: string) => void;
};

const NewsGrid: React.FC<News> = ({ news, onClick }) => {
  const hero = news[0];
  const side = news[1];
  const isDesktop = useBreakpoint('lg');
  const others = news.slice(2);

  if (news.length === 0) {
    return (
      <Stack
        flex={1}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '60vh' }}
      >
        <TextContent content="Nenhuma noticia encontrada." />
      </Stack>
    );
  }

  return (
    <Stack flex={1} justifyContent={'space-between'} spacing={20}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, lg: 8, xl: 8 }}>
          <HeroCard item={hero} onClick={() => onClick(hero.id)} />
        </Grid>
        {!isDesktop && side && (
          <Grid container spacing={3} size={{ xs: 12, lg: 4 }}>
            <Grid key={side.id} size={{ xs: 12 }}>
              <Box width={'100%'} height={290} maxHeight={290} maxWidth={500}>
                <NewsCard
                  title={side.title}
                  date={side.date}
                  image={side.imageContent}
                  onClick={() => onClick(side.id)}
                  category={side.category}
                />
              </Box>
            </Grid>
          </Grid>
        )}

        <Grid container spacing={{ xs: 2, md: 4, lg: 3 }} size={{ xs: 12 }}>
          {others.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                width={'100%'}
                height={'100%'}
                maxHeight={260}
                mb={{ xs: 10, md: 8, lg: 18 }}
                mt={{ xs: 0, md: 2, lg: 3 }}
              >
                <NewsCard
                  title={item.title}
                  date={item.date}
                  image={item.imageContent}
                  onClick={() => onClick(item.id)}
                  category={item.category}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {news.length > 0 && <NewsPagination />}
    </Stack>
  );
};

export default NewsGrid;
