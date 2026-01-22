import React from 'react';
import { Box, Card, CardActionArea, CardMedia } from '@mui/material';
import { NewsResume } from '../../../../interfaces/News/INews';
import formatNewsDate from '../../../../../../shared/utils/formatNewsDate';
import TextContent from '../../../../components/TextContent';

interface HeroCardProps {
  item: NewsResume;
  onClick: () => void;
  maxHeight?: number;
}

const HeroCard: React.FC<HeroCardProps> = ({
  item,
  onClick,
  maxHeight = 407,
}) => {
  if (!item) return null;

  const imageUrl = item.imageContent?.[0]?.url ?? '/placeholder-image.png';
  const { title, category, date } = item;

  return (
    <Box
      width="100%"
      maxHeight={maxHeight}
      sx={{ borderRadius: 2, overflow: 'hidden' }}
    >
      <Card sx={{ width: '100%', height: '100%', borderRadius: 2 }}>
        <CardActionArea
          onClick={onClick}
          sx={{
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'relative',
          }}
          aria-label={title}
        >
          {/* Imagem */}
          <CardMedia
            component="img"
            src={imageUrl}
            alt={title}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                '/placeholder-image.png';
            }}
            sx={{
              width: '100%',
              height: { xs: 200, sm: 300, md: maxHeight },
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Overlay degradê e conteúdo */}
          <Box
            position="absolute"
            left={0}
            right={0}
            bottom={0}
            px={{ xs: 2, sm: 3 }}
            py={{ xs: 2, sm: 3 }}
            color="#fff"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            sx={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1  ) 40%, rgba(0, 0, 0, 1) 100%)',
            }}
          >
            <Box
              width={{ xs: '100%', sm: 400, md: 500 }}
              alignItems="flex-start"
              textAlign="left"
            >
              <TextContent
                content={title}
                color="typeText.primary"
                fontWeight={700}
                lineHeight={1}
                display={'-webkit-box'}
                overflow={'hidden'}
                fontSize={{ xs: '1rem', sm: '1.5rem' }}
                sx={{
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                }}
              />
            </Box>
            <TextContent
              content={`${category} ${date ? formatNewsDate(date) : ''}`}
              color="typeText.primary"
              fontWeight={400}
              mt={1}
              fontSize={{ xs: '0.904rem', sm: '1rem' }}
              textTransform="none"
            />
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default HeroCard;
