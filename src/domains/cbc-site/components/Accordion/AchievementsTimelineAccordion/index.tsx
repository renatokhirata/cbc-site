import { Box, Stack, Typography } from '@mui/material';
import { Modality } from '../../../interfaces/Modality/IModality';
import TextContent from '../../TextContent';
import Accordion from '..';
import useBreakpoint from '../../../hooks/useBreakpoint';

const AchievementsTimelineAccordion = ({
  modalities,
}: {
  modalities: Modality[];
}) => {
  const isMobile = useBreakpoint('md');

  if (!isMobile) return null;

  return (
    <Box sx={{ position: 'relative', mt: 4 }}>
      {modalities.map((modality, modalityIndex) => (
        <Box key={modalityIndex} sx={{ mb: 2 }}>
          <Accordion
            defaultExpanded={false}
            slotProps={{ transition: { unmountOnExit: true } }}
            sx={{
              bgcolor: 'customBackground.secondary',
              border: 'none',
              boxShadow: 'none',
            }}
            summary={
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Box
                  component={'img'}
                  src={modality.icon}
                  alt={modality.modalityName}
                  sx={{
                    width: { xs: 50, md: 60 },
                    height: { xs: 50, md: 60 },
                  }}
                />
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  color={'typeText.primary'}
                >
                  {modality.modalityName}
                </Typography>
              </Stack>
            }
            details={
              <Box sx={{ pl: { xs: 0, md: 2 }, position: 'relative', pt: 2 }}>
                {modality?.achievements?.map(
                  (achievement, achievementIndex) => {
                    const isLastAchievement =
                      achievementIndex ===
                      (modality.achievements?.length ?? 0) - 1;
                    const shouldShowLine = !isLastAchievement;

                    return (
                      <Box key={achievementIndex} sx={{ position: 'relative' }}>
                        {modality?.achievements && (
                          <Box
                            sx={{
                              position: 'absolute',
                              left: '5.5px',
                              top: '5px',
                              width: '1px',
                              height: `calc(100% + ${shouldShowLine ? 18 : -18}px)`,
                              backgroundColor: 'typeText.secondary',
                              opacity: 0.4,
                              zIndex: 1,
                            }}
                          />
                        )}

                        <Box sx={{ ml: 3 }}>
                          {/* Item */}
                          {achievement.items.map((item, index) => (
                            <Box
                              key={index}
                              sx={{ position: 'relative', mb: 0.5 }}
                            >
                              <Box
                                sx={{
                                  position: 'absolute',
                                  left: -21,
                                  top: '12px',
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  backgroundColor: 'typeText.primary',
                                  zIndex: 2,
                                }}
                              />
                              <TextContent
                                content={item}
                                fontSize={{ sx: '1rem', md: '1.25rem' }}
                                color={'typeText.primary'}
                              />
                            </Box>
                          ))}

                          {/* SubItems */}
                          {achievement.subItems && (
                            <Box sx={{ ml: 1, mt: 1 }}>
                              {achievement.subItems.map((subItem, subIndex) => (
                                <Box
                                  key={subIndex}
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    mb: 0.5,
                                  }}
                                >
                                  <Box
                                    component={'ul'}
                                    sx={{
                                      m: 0,
                                      p: 0,
                                      pl: 2,
                                      listStylePosition: 'outside',
                                    }}
                                  >
                                    <Box
                                      component={'li'}
                                      sx={{
                                        '&::marker': {
                                          color: 'white',
                                          fontSize: '1.2em',
                                        },
                                      }}
                                    >
                                      <TextContent
                                        content={subItem}
                                        fontSize={{ sx: '1rem', md: '1.25rem' }}
                                        color={'typeText.primary'}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    );
                  },
                )}
              </Box>
            }
          />
        </Box>
      ))}
    </Box>
  );
};

export default AchievementsTimelineAccordion;
