import { Box, Typography } from '@mui/material';

interface MobileBannerProps {
  src: string;
}

const MobileBanner: React.FC<MobileBannerProps> = ({ src }) => {
  return (
    <Box
      position="relative"
      width="100%"
      display="flex"
      overflow="hidden"
      alignItems="center"
      height={{ xs: '400px', sm: '450px', md: '500px' }}
    >
      <Box
        component="img"
        src={src}
        alt="Banner Mobile"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={1}
        sx={{
          objectFit: 'cover',
        }}
      />

      <Box
        position="relative"
        zIndex={3}
        padding={{ xs: 3, sm: 4, md: 5 }}
        maxWidth={{ xs: '100%', md: '60%' }}
      >
        <Typography
          variant="h1"
          fontSize={{ xs: '2.5rem', sm: '3rem', md: '3.5rem' }}
          fontWeight="bold"
          marginBottom={1}
          color="typeText.yellow"
        >
          BMX
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }}
          fontWeight={800}
          marginBottom={2}
          color="white"
        >
          Uma modalidade cheia de energia
        </Typography>

        <Typography
          fontSize={{ xs: '1rem', sm: '1.4rem', md: '1.5rem' }}
          lineHeight={1.4}
          color="white"
        >
          O BMX, uma das categorias mais emocionantes do ciclismo, destaca-se
          por suas corridas rápidas e manobras tudo ou nada. A CBC trabalha para
          fomentar o desenvolvimento, organização e regulamentação do BMX,
          garantindo um ambiente seguro e competitivo para atletas de todas as
          idades e níveis.
        </Typography>
      </Box>
    </Box>
  );
};

export default MobileBanner;
