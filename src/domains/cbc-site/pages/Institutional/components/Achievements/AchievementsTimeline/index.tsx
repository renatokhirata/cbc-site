import { Box, Stack } from '@mui/material';
import ColoredTitle from '../../../../../components/ColoredTitle';
import TextContent from '../../../../../components/TextContent';
import { Modality } from '../../../../../interfaces/Modality/IModality';
import useBreakpoint from '../../../../../hooks/useBreakpoint';

const AchievementsTimeline = ({ modalities }: { modalities: Modality[] }) => {
  const isMobile = useBreakpoint('md');

  if (isMobile) return null;
  return (
    <Box sx={{ position: 'relative' }}>
      {modalities.map((modality, modalityIndex) => (
        <Stack key={modalityIndex} sx={{ my: 6 }} spacing={2}>
          <Stack direction={'row'} spacing={-6} alignItems={'center'}>
            <Box
              component={'img'}
              src={modality.icon}
              alt={modality.modalityName}
              width={{ xs: 96, md: 116 }}
              zIndex={1000}
            />
            <Box
              sx={{
                pl: 8,
                width: 'fit-content',
              }}
            >
              <ColoredTitle
                title={modality.modalityName}
                color={'typeText.primary'}
                fontWeight={700}
              />
            </Box>
          </Stack>
          <Box sx={{ pl: { xs: 0, md: 16 }, position: 'relative' }}>
            {modality?.achievements?.map((achievement, achievementIndex) => {
              const isLastAchievement =
                achievementIndex === (modality.achievements?.length ?? 0) - 1;
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
                    {achievement.items.map((item, index) => (
                      <Box key={index} sx={{ position: 'relative', mb: 0.5 }}>
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
            })}
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default AchievementsTimeline;
