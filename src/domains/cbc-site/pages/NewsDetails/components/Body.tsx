import { Container, Box, Stack, Grid } from '@mui/material';
import { NewsCarousel } from '../../../components/News/NewsCarousel';
import SocialIcons from '../../../components/SocialIcons';
import TextContent from '../../../components/TextContent';
import { NewsResume } from '../../../interfaces/News/INews';
import MainButton from '../../../components/Buttons/MainButton';
import NewsSnippetList from '../../../components/News/NewsSnippetList';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from '../../../hooks/useBreakpoint';
import { newsService } from '../../../services';
import { useEffect, useState } from 'react';

interface BodyProps {
  news: NewsResume | null;
  id: string;
}

const Body = ({ news, id }: BodyProps) => {
  const isMobile = useBreakpoint('md');
  const navigate = useNavigate();

  const [newsList, setNewsList] = useState<NewsResume[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await newsService.getAll();
        setNewsList(list.filter((n) => n.id !== id));
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Stack spacing={4} width="100%" alignItems="center">
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            pb: 4,
          }}
        >
          <TextContent
            content={news?.title || ''}
            fontSize={{ xs: '30px', md: '45px' }}
            lineHeight={{ xs: '42px', md: '54px' }}
            fontWeight={700}
            color="typeText.primary"
          />
          <TextContent
            content={news?.subtitle || ''}
            fontSize={{ xs: '20px', md: '30px' }}
            lineHeight={{ xs: '30px', md: '35px' }}
            color="typeText.primary"
            sx={{ maxWidth: '75%' }}
            marginBottom={0}
          />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="flex-start"
            justifyContent={'space-between'}
            spacing={2}
            width="100%"
          >
            <TextContent
              content={`${news?.category} ${news?.date}`}
              fontSize={{ xs: '16px', md: '18px' }}
              color="typeText.tertiary"
            />
            <SocialIcons />
          </Stack>
        </Box>
        <Box zIndex={1}>
          <NewsCarousel images={news?.imageContent ?? []} />
        </Box>
        <TextContent
          content={news?.newsContent || ''}
          marginBottom={4}
          sx={{ pt: 4 }}
        />

        <TextContent
          sx={{ mt: 4 }}
          content={
            'Assessoria de Comunicação - CBC \n\nTelefone: (61) 3585.1051 | (61) 9123.2218\n\nE-mail: <a href="mailto:imprensa@cbc.esp.br" style="color:inherit; text-decoration:underline;">imprensa@cbc.esp.br</a>\n\nCurta a página da <a href="https://www.facebook.com/CiclismoCBC/" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:underline;">CBC no Facebook</a>\n\nAssista aos nossos vídeos no YouTube <a href="https://www.youtube.com/ciclismocbc" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:underline;">Canal Oficial da CBC</a>'
          }
        />
        <Stack spacing={2} py={2}>
          <Grid container spacing={2}>
            {news?.imageContent?.map((img, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  component="img"
                  src={img.url}
                  alt={img.alt}
                  width="100%"
                  height={{ xs: '100%', md: 172 }}
                  borderRadius={2}
                  sx={{ objectFit: 'cover' }}
                  maxHeight={298}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', py: { xs: 3, md: 8 } }}
      >
        <NewsSnippetList
          newsList={newsList}
          onClick={(id) => navigate(`/imprensa/noticias/${id}`)}
        />
        {isMobile && (
          <Box pt={2}>
            <MainButton
              label={'Ver todas as notícias'}
              onClick={() => navigate('/imprensa/noticias')}
            />
          </Box>
        )}
      </Container>
    </Stack>
  );
};

export default Body;
