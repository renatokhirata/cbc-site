import { Box, Stack } from '@mui/material';

import { NewsResume } from '../../../interfaces/News/INews';
import NewsSnippet from '../NewsSnippet';
import { useState, useEffect } from 'react';
import ArrowController from '../../Carousel/ArrowController';
import Carousel from '../../Carousel';
import useBreakpoint from '../../../hooks/useBreakpoint';
import TextContent from '../../TextContent';
import MainButton from '../../Buttons/MainButton';
import ColoredTitle from '../../ColoredTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { newsService } from '../../../services';

const NewsSnippetList: React.FC<{
  newsList?: NewsResume[];
  onClick: (id: string) => void;
}> = ({ newsList, onClick = () => {} }) => {
  const slug = useParams<{ slug: string }>().slug;
  const [news, setNews] = useState<NewsResume[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [embla, setEmbla] = useState<any>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const isMobile = useBreakpoint('md');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (slug) {
          const newsData = await newsService.getAllBySlug(slug || '');
          return setNews(newsData || []);
        }

        if (newsList && newsList.length > 0) {
          setNews(newsList);
          return;
        }

        const allNews = await newsService.getAll();
        setNews(allNews || []);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (!embla) return;

    const updateScrollState = () => {
      setIsAtStart(!embla.canScrollPrev());
      setIsAtEnd(!embla.canScrollNext());
    };

    embla.on('select', updateScrollState);
    updateScrollState();

    return () => {
      embla.off('select', updateScrollState);
    };
  }, [embla]);

  const handleScrollRight = () => {
    if (embla) embla.scrollNext();
  };

  const handleScrollLeft = () => {
    if (embla) embla.scrollPrev();
  };

  if (!news || news.length === 0) {
    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ColoredTitle
            title={'Últimas Notícias'}
            color={'typeText.tertiary'}
          />
          {!isMobile && (
            <MainButton
              label={'Ver todas as notícias'}
              onClick={() => navigate('/imprensa/noticias')}
            />
          )}
        </Stack>
        <Box sx={{ textAlign: 'center', padding: '80px' }}>
          <TextContent
            content={'Não há notícias relacionadas a esta modalidade.'}
            marginBottom={0}
          />
        </Box>
      </Stack>
    );
  }

  if (!isMobile && news.length < 4) {
    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ColoredTitle
            title={'Últimas Notícias'}
            color={'typeText.tertiary'}
          />
          {!isMobile && (
            <MainButton
              label={'Ver todas as notícias'}
              onClick={() => navigate('/imprensa/noticias')}
            />
          )}
        </Stack>
        <Stack direction="row" spacing={3}>
          {news.map((item) => (
            <NewsSnippet
              key={item.id}
              title={item.title}
              category={item.category}
              date={item.date}
              coverImage={item.coverImage}
              onClick={() => onClick(item.id)}
            />
          ))}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <ColoredTitle title={'Últimas Notícias'} color={'typeText.tertiary'} />
        {!isMobile && (
          <MainButton
            label={'Ver todas as notícias'}
            onClick={() => navigate('/imprensa/noticias')}
          />
        )}
      </Stack>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'visible',
        }}
      >
        <Carousel
          slideGap={20}
          withControls={false}
          withIndicators={false}
          slideSize="auto"
          align="start"
          draggable={news.length >= 3}
          getEmblaApi={setEmbla}
          slides={news || []}
          sx={{
            width: 'calc(100% + 64px)',
            marginLeft: 0,
            marginRight: '-64px',
            paddingRight: '64px',
            '& .mantine-Carousel-viewport': {
              overflow: 'visible !important',
            },
            '& .mantine-Carousel-container': {
              overflow: 'visible !important',
            },
          }}
          renderSlide={(item: NewsResume) => (
            <NewsSnippet
              title={item.title}
              category={item.category}
              date={item.date}
              coverImage={item.coverImage}
              onClick={() => onClick(item.id)}
            />
          )}
        />
        {!isMobile && news.length >= 4 && (
          <ArrowController
            handleScrollRight={handleScrollRight}
            handleScrollLeft={handleScrollLeft}
            isAtStart={isAtStart}
            isAtEnd={isAtEnd}
            rightPosition={{ md: 70, lg: 0 }}
            topPosition={30}
          />
        )}
      </Box>
    </Stack>
  );
};

export default NewsSnippetList;
