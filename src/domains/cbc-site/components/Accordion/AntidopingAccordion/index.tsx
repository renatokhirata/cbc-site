import dowloadIconButton from '../../../../../assets/icons/downloadIconButton.svg';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import TextContent from '../../TextContent';
import MainButton from '../../Buttons/MainButton';
import ColoredTitle from '../../ColoredTitle';
import Accordion from '../index';
import { Antidoping } from '../../../interfaces/Documents/Document';
import Modal from '../../Modal';
import AntidopingModalContent from '../../Modal/Antidoping';

interface AntidopingAccordionProps {
  data: Antidoping;
  defaultExpanded?: boolean;
}

const AntidopingAccordion = ({
  data,
  defaultExpanded = false,
}: AntidopingAccordionProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const summary = (
    <Container maxWidth="lg">
      <Stack sx={{ position: 'relative' }}>
        <Box
          position="absolute"
          left={{ xs: 0, md: '-72px' }}
          top="10%"
          display={{ xs: 'none', lg: 'block' }}
          width="64px"
          sx={{
            transform: 'translateY(-50%)',
          }}
        >
          <TextContent content={data.year.toString()} />
        </Box>

        <Stack>
          <TextContent
            content={data.date}
            color="typeText.tertiary"
            marginBottom={0}
          />
          <Divider sx={{ my: 0.5 }} />
          <ColoredTitle
            title={data.title}
            fontSize={{ xs: '1.5rem', md: '2rem' }}
            fontWeight="700"
          />
        </Stack>
      </Stack>
    </Container>
  );

  const details = data.sections ? (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        {data.sections.officialDocuments &&
          data.sections.officialDocuments.length > 0 && (
            <Stack spacing={2}>
              <ColoredTitle
                title="Documentos oficiais"
                fontSize="24px"
                color="typeText.tertiary"
              />
              {data.sections.officialDocuments.map((doc, index) => (
                <Stack key={index} spacing={2}>
                  {doc.description && <TextContent content={doc.description} />}
                  <Box>
                    <MainButton
                      key={`official-${index}`}
                      startIcon={
                        <Box
                          component={'img'}
                          src={dowloadIconButton}
                          alt="Download Icon"
                        />
                      }
                      isDark={true}
                      sx={{
                        width: '100%',
                        maxWidth: 433,
                        justifyContent: 'flex-start',
                      }}
                      onClick={() => window.open(doc.fileUrl, '_blank')}
                    >
                      {doc.fileName}
                    </MainButton>
                  </Box>
                </Stack>
              ))}
            </Stack>
          )}

        {data.sections.provisionalNotices &&
          data.sections.provisionalNotices.length > 0 && (
            <Stack spacing={2}>
              <ColoredTitle
                title="Notificações provisórias"
                fontSize="24px"
                color="typeText.tertiary"
              />
              <Stack spacing={4}>
                {data.sections.provisionalNotices
                  .slice(0, 2)
                  .map((notice, index) => (
                    <Stack key={index} spacing={0.5}>
                      {notice.title && (
                        <TextContent content={notice.title} marginBottom={0} />
                      )}
                      {notice.fileUrl && (
                        <Box>
                          <MainButton
                            key={`notice-${index}`}
                            startIcon={
                              <Box
                                component={'img'}
                                src={dowloadIconButton}
                                alt="Download Icon"
                              />
                            }
                            isDark={true}
                            sx={{
                              width: '100%',
                              maxWidth: 433,
                              justifyContent: 'flex-start',
                            }}
                            onClick={() =>
                              window.open(notice.fileUrl, '_blank')
                            }
                          >
                            {notice.fileName || 'Download'}
                          </MainButton>
                        </Box>
                      )}
                    </Stack>
                  ))}
              </Stack>
            </Stack>
          )}
      </Stack>
    </Container>
  ) : (
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary">
        Nenhuma seção disponível
      </Typography>
    </Container>
  );

  const actions = (
    <Container maxWidth="lg">
      {data.sections?.officialDocuments &&
        data.sections.officialDocuments.length > 0 && (
          <Box sx={{ position: 'relative' }} width={'100%'}>
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: { xs: 64, sm: 160 },
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(1px)',
                zIndex: 1,
                pointerEvents: 'auto',
                display: { xs: 'none', xl: 'block' },
              }}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            />
            <MainButton
              isDark={true}
              fullWidth
              label="Ver mais"
              sx={{ position: 'relative', zIndex: 2 }}
              onClick={handleOpen}
            />
          </Box>
        )}
    </Container>
  );

  function renderDetails(limit?: number) {
    const official = data.sections?.officialDocuments ?? [];
    const provisional = data.sections?.provisionalNotices ?? [];

    return (
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {official.length > 0 && (
            <Stack spacing={2}>
              <ColoredTitle
                title="Documentos oficiais"
                fontSize="24px"
                color="typeText.tertiary"
              />
              {official.map((doc, idx) => (
                <Stack key={`official-${idx}`} spacing={2}>
                  {doc.description && <TextContent content={doc.description} />}
                  <Box>
                    <MainButton
                      key={`official-btn-${idx}`}
                      variant="contained"
                      startIcon={
                        <Box
                          component={'img'}
                          src={dowloadIconButton}
                          alt="Download Icon"
                        />
                      }
                      isDark={true}
                      sx={{ padding: '10px 260px 10px 20px' }}
                      onClick={() => window.open(doc.fileUrl, '_blank')}
                    >
                      {doc.fileName}
                    </MainButton>
                  </Box>
                </Stack>
              ))}
            </Stack>
          )}

          {provisional.length > 0 && (
            <Stack spacing={2}>
              <ColoredTitle
                title="Notificações provisórias"
                fontSize="24px"
                color="typeText.tertiary"
              />
              <Stack spacing={4}>
                {provisional
                  .slice(
                    0,
                    typeof limit === 'number' ? limit : provisional.length,
                  )
                  .map((notice, idx) => (
                    <Stack key={`notice-${idx}`} spacing={0.5}>
                      {notice.title && (
                        <TextContent content={notice.title} marginBottom={0} />
                      )}
                      {notice.fileUrl && (
                        <Box>
                          <MainButton
                            key={`notice-btn-${idx}`}
                            variant="contained"
                            startIcon={
                              <Box
                                component={'img'}
                                src={dowloadIconButton}
                                alt="Download Icon"
                              />
                            }
                            isDark={true}
                            sx={{ padding: '10px 260px 10px 20px' }}
                            onClick={() =>
                              window.open(notice.fileUrl, '_blank')
                            }
                          >
                            {notice.fileName || 'Download'}
                          </MainButton>
                        </Box>
                      )}
                    </Stack>
                  ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Container>
    );
  }

  return (
    <>
      <Accordion
        summary={summary}
        details={details}
        actions={actions}
        defaultExpanded={defaultExpanded}
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 1,
          my: 2,
        }}
        summarySx={{
          '& .MuiAccordionSummary-expandIconWrapper': {
            display: 'none',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        expandMoreColor="primary.main"
      />

      <Modal open={open} onClose={handleClose}>
        <AntidopingModalContent
          summary={summary}
          details={data.sections ? renderDetails() : details}
          onClose={handleClose}
        />
      </Modal>
    </>
  );
};

export default AntidopingAccordion;
