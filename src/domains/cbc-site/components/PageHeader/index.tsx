import { Box, Container, Stack } from '@mui/material';
import headerBackground from '../../../../assets/images/header/headerBackground.png';
import ColoredTitle from '../ColoredTitle';
import useBreakpoint from '../../hooks/useBreakpoint';
import { NewsResume } from '../../interfaces/News/INews';

const PageHeader = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
  isNewsDetailsPage?: boolean;
  news?: NewsResume | null;
}) => {
  const isMobile = useBreakpoint('md');

  return (
    <Box
      sx={{
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 2,
        width: '100%',
        height: isMobile ? '50px' : '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <ColoredTitle
            color="typeText.primary"
            title={title}
            fontWeight={400}
          />
          {!isMobile && (
            <Box
              component="img"
              src={icon}
              alt={title}
              sx={{ width: 64, height: 64 }}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default PageHeader;
