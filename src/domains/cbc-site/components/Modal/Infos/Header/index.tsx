import { Stack, Box } from '@mui/material';
import { Container } from '@mui/material';
import ColoredTitle from '../../../ColoredTitle';
import rankingsImage from '../../../../../../assets/images/modal/rankings.svg';

interface InfoModalHeaderProps {
  title?: string;
  icon?: string;
  slug?: string;
}

const InfoModalHeader = ({ title, icon, slug }: InfoModalHeaderProps) => {
  return (
    <Stack bgcolor={'customBackground.tertiary'} width={'100%'}>
      <Container maxWidth={'xl'} sx={{ px: { xs: 2, md: 4 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent={'flex-start'}
          position={'relative'}
          width={'100%'}
          spacing={{ xs: 2, md: 4 }}
          height={{ xs: 'auto', md: 240 }}
          sx={{ py: { xs: 2, md: 4 } }}
        >
          <Box
            component="img"
            src={icon || rankingsImage}
            alt={title}
            sx={{
              width: { xs: 64, md: 120 },
              height: { xs: 64, md: 120 },
              mr: { xs: 0, md: 4 },
              mb: { xs: 2, md: 0 },
              alignSelf: { xs: 'flex-start', md: 'center' },
            }}
          />
          <Stack spacing={0} justifyContent="center">
            <ColoredTitle
              title={title || 'Não informado'}
              color={'typeText.primary'}
              fontSize={{ xs: '24px', md: '60px' }}
              fontWeight={700}
            />
            <ColoredTitle
              title={slug?.toLocaleUpperCase() || ''}
              color={'typeText.primary'}
              fontSize={{ xs: '24px', md: '32px' }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default InfoModalHeader;
