import { Box, Stack } from '@mui/material';
import { PageResume } from '../../../../interfaces/Page/PageResume';
import logoNavbar from '../../../../../../assets/images/cbcLogo.svg';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';
import useBreakpoint from '../../../../hooks/useBreakpoint';

interface AboutCBCProps {
  institucionalData?: PageResume;
}

const AboutCBC = ({ institucionalData }: AboutCBCProps) => {
  const isMobile = useBreakpoint('md');
  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems="flex-start"
      justifyContent={'space-between'}
      width="100%"
      spacing={{ md: 4, lg: 8 }}
    >
      <Box
        flex={isMobile ? undefined : 1.2}
        width={isMobile ? '100%' : undefined}
      >
        <Stack spacing={2} style={{ marginBottom: '16px' }}>
          <ColoredTitle
            title={'O que é a CBC?'}
            color={'typeText.tertiary'}
            fontWeight={700}
          />
          <Box color={'typeText.default'} fontSize={'1em'} fontWeight={400}>
            <TextContent content={institucionalData?.content ?? ''} />
          </Box>
        </Stack>
      </Box>
      <Box
        flex={isMobile ? undefined : 0.8}
        pr={{ lg: 12 }}
        width={isMobile ? '100%' : undefined}
        height={'100%'}
      >
        {!isMobile && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems={'center'}
            boxShadow={2}
            borderRadius={2}
            py={{ md: 25, lg: 19, xl: 17.2 }}
            px={4}
            width={{ md: 410, lg: 450 }}
          >
            <Box
              component="img"
              src={logoNavbar}
              width={'100%'}
              height={'100%'}
            />
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default AboutCBC;
