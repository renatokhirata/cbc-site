import { Box, Slider, SliderThumb, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import bikeIcon from '../../../../assets/icons/bikeSliderIcon.svg';
import { TimelineData } from '../../interfaces/Timeline/TimeLine';

const BikeSlider: React.FC<{ data: TimelineData[] }> = ({
  data,
}: {
  data: TimelineData[];
}) => {
  const marks = data.map((item, index) => ({
    value: index + 1,
    label: item.year.toString(),
  }));

  const visibleMarks = marks.filter((mark) => mark.label);
  const minYear = marks[0].value;
  const maxYear = marks[marks.length - 1].value;

  const [year, setYear] = useState(minYear);
  const dragStartX = useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    dragStartX.current = e.clientX;
  };

  const handleDrag = (e: React.DragEvent<HTMLImageElement>) => {
    if (dragStartX.current === null || e.clientX === 0) return;
    const delta = e.clientX - dragStartX.current;
    const step = delta > 0 ? 1 : -1;
    const newYear = year + step;

    const isValid = visibleMarks.some((mark) => mark.value === newYear);
    if (!isValid) return;

    setYear(newYear);
    dragStartX.current = e.clientX;
  };

  const BikeThumb = (props: any) => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        <Box
          component="img"
          src={bikeIcon}
          alt="Bike Icon"
          draggable
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          sx={{
            width: '260px',
            height: 'auto',
            objectFit: 'cover',
            pointerEvents: 'none',
            transform: `translateY(-65%) ${year === minYear ? 'translateX(50%)' : year === maxYear ? 'translateX(-120%)' : ''}`,
          }}
        />
        {children}
      </SliderThumb>
    );
  };

  return (
    <Stack>
      <Stack
        sx={{
          width: '100%',
          py: 8,
          borderRadius: 2,
          overflowX: 'hidden',
        }}
      >
        <Slider
          aria-label="Linha do Tempo"
          value={year}
          min={minYear}
          max={maxYear}
          marks={visibleMarks}
          step={0.01}
          valueLabelDisplay="off"
          onChange={(_, value) => setYear(value as number)}
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
            '& .MuiSlider-markLabel': {
              fontWeight: 600,
              fontSize: 16,
              background: '#5bbab7',
              color: '#fff',
              ml: minYear === year ? -50 : maxYear === year ? -20 : -10,
              mr: maxYear === year ? -32 : 0,
              px: 1,
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
            '& .MuiSlider-mark': {
              display: 'none',
            },
          }}
          slots={{ thumb: BikeThumb }}
        />
      </Stack>
    </Stack>
  );
};

export default BikeSlider;
