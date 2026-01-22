import dowloadIconButton from '../../../../../assets/icons/downloadIconButton.svg';
import { Box, Stack, Divider } from '@mui/material';
import { InfoResume } from '../../../interfaces/Info/Info';
import MainButton from '../../Buttons/MainButton';
import ColoredTitle from '../../ColoredTitle';
import TextContent from '../../TextContent';
import useBreakpoint from '../../../hooks/useBreakpoint';

const InfoItem: React.FC<{ info: InfoResume }> = ({ info }) => {
  const isMobile = useBreakpoint('md');

  return (
    <Stack spacing={3} width={'100%'}>
      <Stack direction="row">
        {!isMobile && (
          <Stack spacing={-3} minWidth={80} textAlign={'right'}>
            <TextContent content={info.date?.split(' ')[0] || ''} />
            {info.category && (
              <TextContent content={info.date?.split(' ')[1] || ' '} />
            )}
          </Stack>
        )}

        <Stack sx={{ flex: 1, pl: 4, pt: 1 }}>
          <Box pb={2}>
            <Divider />
          </Box>
          {info.subtitle && (
            <Stack direction={'row'} alignItems="center" spacing={0.5}>
              <TextContent
                content={info.subtitle.split('|')[0] || ''}
                color="typeText.tertiary"
                fontWeight={700}
                marginBottom={0}
              />
              <TextContent
                content={' | '}
                color="typeText.tertiary"
                marginBottom={0}
              />
              <TextContent
                content={info.subtitle.split('|')[1] || ''}
                color="typeText.tertiary"
                marginBottom={0}
              />
            </Stack>
          )}
          <ColoredTitle title={info.title} fontSize={'32px'} fontWeight="700" />

          <TextContent content={info.content || ''} fontSize="20px" />
          {/* botao */}
          {info.documents && info.documents.length > 0 && (
            <Stack spacing={2}>
              {info.documents.map((doc) => (
                <Box>
                  <MainButton
                    key={doc.id}
                    variant="contained"
                    startIcon={
                      <Box
                        component={'img'}
                        src={dowloadIconButton}
                        alt="Download Icon"
                      />
                    }
                    isDark={true}
                    sx={{ padding: '10px 120px 10px 20px' }}
                    onClick={() => window.open(doc.url, '_blank')}
                  >
                    {doc.name}
                  </MainButton>
                </Box>
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InfoItem;
