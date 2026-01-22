import presidentImg from '../../../../../../assets/images/presidentImg.svg';
import { Typography, Box, Stack, Container } from '@mui/material';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import TextContent from '../../../../components/TextContent';

interface PresidentSectionProps {
  subContent?: string;
}

const PresidentSection = ({ subContent }: PresidentSectionProps) => {
  const isMobile = useBreakpoint('md');
  return (
    <Stack
      sx={{
        overflow: 'hidden',
        bgcolor: '#F1F1F1',
        py: { xs: 3, md: 0 },
      }}
    >
      <Container maxWidth={isMobile ? 'xl' : false} disableGutters={!isMobile}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          height={{ xs: '100%', md: 400 }}
        >
          <Box display="flex" flex={0.7}>
            <Box
              component="img"
              src={presidentImg}
              alt="Senador Institucional"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
          <Container
            maxWidth={!isMobile ? 'lg' : false}
            disableGutters={isMobile}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Stack
              width={'100%'}
              height={'100%'}
              pr={{ xl: '23%' }}
              justifyContent={'space-evenly'}
              spacing={{ xs: 0, md: -2, lg: -4 }}
            >
              <TextContent
                content={`<span style='color:#5CB5AF;font-size:20px'>"</span>${subContent?.replace(/^"|"$/g, '') ?? ''}<span style='color:#5CB5AF;font-size:20px'>"</span>`}
                marginBottom={{ xs: 1, md: 1.5 }}
              />

              <Stack>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="typeText.tertiary"
                  textAlign="left"
                >
                  Jamil Suaiden
                </Typography>
                <Typography
                  color="typeText.tertiary"
                  textAlign="left"
                  fontWeight={400}
                  fontSize={{ xs: '1rem', md: '1.2rem' }}
                >
                  Presidente da CBC
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
};

export default PresidentSection;
