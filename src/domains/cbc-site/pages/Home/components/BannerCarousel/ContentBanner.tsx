import { Box, Container } from '@mui/material';
import TextContent from '../../../../components/TextContent';
import { Banner } from '../../type/Banner';
import ColoredTitle from '../../../../components/ColoredTitle';

interface ContentBannerProps {
  banner: Banner;
}

const ContentBanner = ({ banner }: ContentBannerProps) => {
  const { title, tags } = banner;
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'relative',
        width: '100%',
        zIndex: 1,
        py: { xs: 18, sm: 24, md: 18, lg: 20 },
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
          {tags?.map((t) => (
            <TextContent
              key={t}
              content={t}
              color="typeText.primary"
              fontSize="1rem"
              fontWeight={100}
            />
          ))}
        </Box>
        <Box width={{ xs: '100%', sm: '40%', md: '70%', lg: '30%' }}>
          <ColoredTitle
            title={title}
            color="typeText.primary"
            fontSize={{ xs: '1.5rem', md: '2rem' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ContentBanner;
