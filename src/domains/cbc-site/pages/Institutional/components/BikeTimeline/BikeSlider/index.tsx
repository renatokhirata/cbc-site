import { Box, Slider, SliderThumb, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import bikeIcon from '../../../../../../../assets/icons/bikeSliderIcon.svg';
import mobileBikeIcon from '../../../../../../../assets/icons/mobile_bikeIcon.svg';
import useBreakpoint from '../../../../../hooks/useBreakpoint';
import labelIcon from '../../../../../../../assets/icons/label.svg';

interface BikeSliderProps {
  visibleMarks: { value: number; label: string }[];
  min: number;
  max: number;
  year: number;
  setYear: (year: number) => void;
}

const BikeSlider: React.FC<BikeSliderProps> = ({
  visibleMarks,
  min,
  max,
  year,
  setYear,
}) => {
  const isMobile = useBreakpoint('md');
  const trackWidth = Math.max(visibleMarks.length * (isMobile ? 90 : 120), 600);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const marksRef = useRef<Array<HTMLDivElement | null>>([]);

  // controle de interação / auto-scroll
  const [isInteracting, setIsInteracting] = useState(false);
  const pointerXRef = useRef(0);
  const autoScrollDirRef = useRef(0); // -1 left, 0 stop, 1 right
  const rafRef = useRef<number | null>(null);

  const scrollSpeed = 8; // px por frame, ajuste conforme necessidade
  const edgeThreshold = 60; // px do limite para começar a auto-scroll

  useEffect(() => {
    const loop = () => {
      const dir = autoScrollDirRef.current;
      const container = containerRef.current;
      if (dir !== 0 && container) {
        container.scrollLeft += dir * scrollSpeed;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    if (isInteracting && rafRef.current === null) {
      rafRef.current = requestAnimationFrame(loop);
    }

    if (!isInteracting && rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isInteracting]);

  // quando year mudar externamente, rolar para o mark correspondente (se não estiver interagindo)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (isInteracting) return; // não interrompe interação do usuário

    const idx = visibleMarks.findIndex((m) => m.value === year);
    if (idx === -1) return;

    const markEl = marksRef.current[idx];
    if (!markEl) return;

    const containerRect = container.getBoundingClientRect();
    const markRect = markEl.getBoundingClientRect();

    // calcular targetLeft para centralizar levemente o mark (ou garantir visibilidade)
    const targetLeft =
      container.scrollLeft +
      (markRect.left - containerRect.left) -
      containerRect.width / 2 +
      markRect.width / 2;

    // usar smooth scroll, mas com fallback para navegadores sem suporte
    try {
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    } catch {
      container.scrollLeft = Math.max(0, targetLeft);
    }
  }, [year, isInteracting, visibleMarks]);

  const updateAutoScrollDir = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    if (clientX - rect.left < edgeThreshold) autoScrollDirRef.current = -1;
    else if (rect.right - clientX < edgeThreshold) autoScrollDirRef.current = 1;
    else autoScrollDirRef.current = 0;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsInteracting(true);
    pointerXRef.current = e.clientX;
    updateAutoScrollDir(e.clientX);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isInteracting) return;
    pointerXRef.current = e.clientX;
    updateAutoScrollDir(e.clientX);
  };
  const handlePointerUp = () => {
    setIsInteracting(false);
    autoScrollDirRef.current = 0;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BikeThumb = (props: any) => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        <Box
          component="img"
          src={isMobile ? mobileBikeIcon : bikeIcon}
          alt="Bike Icon"
          sx={{
            width: { xs: '100px', md: '260px' },
            height: 'auto',
            objectFit: 'cover',
            pointerEvents: 'none',
            WebkitUserDrag: 'none',
            userSelect: 'none',
            willChange: 'transform',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            transform: `translateY(-65%) ${year === min ? 'translateX(45%)' : year === max ? 'translateX(-50%)' : ''} translateZ(0)`,
          }}
        />

        {children}
      </SliderThumb>
    );
  };

  return (
    <Stack
      ref={containerRef}
      pb={8}
      sx={{
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '&': {
          scrollbarColor: 'transparent transparent',
        },
        // mantém comportamento de toque vertical, evita scroll chaining, mas permitimos auto-scroll programático
        touchAction: isMobile ? 'pan-y' : 'auto',
        overscrollBehaviorX: 'contain',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Box
        sx={{
          width: '100%',
          pt: 6,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            minWidth: `${trackWidth}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          <Slider
            aria-label="Linha do Tempo"
            value={year}
            min={min}
            max={max}
            marks={visibleMarks}
            step={1}
            valueLabelDisplay="off"
            onChange={(_, value) => setYear(value as number)}
            // handlers para controlar auto-scroll enquanto arrasta o thumb
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onTouchStart={(e) =>
              handlePointerDown(e as unknown as React.PointerEvent)
            }
            onTouchEnd={handlePointerUp}
            sx={{
              color: '#5bbab7',
              height: 3,
              width: '100%',
              '& .MuiSlider-track': {
                backgroundColor: '#5bbab7',
                border: 'none',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#5bbab7',
                opacity: 1,
              },
              '& .MuiSlider-thumb': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                width: 0,
                height: 0,
              },
              '&:focus, &:active, &:hover': {
                boxShadow: 'none',
                outline: 'none',
              },
              '& .MuiSlider-markLabel': {
                display: 'none',
              },
              '& .MuiSlider-mark': { display: 'none' },
            }}
            slots={{ thumb: BikeThumb }}
          />
          {visibleMarks.map((mark, index) => {
            const leftPercent =
              visibleMarks.length > 1
                ? (index / (visibleMarks.length - 1)) * 100
                : 0;
            return (
              <Box
                key={mark.value}
                ref={(el: HTMLDivElement | null) => {
                  marksRef.current[index] = el;
                }}
                sx={{
                  position: 'absolute',
                  top: { xs: '32px', md: '24px' },
                  left: `${leftPercent + (isMobile ? 3 : 2)}%`,
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  pointerEvents: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={labelIcon}
                  alt={`Label ${mark.label}`}
                  onClick={() => setYear(mark.value)}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setYear(mark.value);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  sx={{
                    width: { xs: 40, md: 48 },
                    height: 'auto',
                    cursor: 'pointer',
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    top: { xs: '6px', md: '10px' },
                    fontWeight: 700,
                    fontSize: { xs: 12, md: 14 },
                    color: '#fff',
                    textShadow: '0 1px 0 rgba(0,0,0,0.25)',
                    pointerEvents: 'none',
                  }}
                >
                  {mark.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
};

export default BikeSlider;
