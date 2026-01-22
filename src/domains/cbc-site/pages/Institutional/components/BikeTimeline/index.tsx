import { useRef, useState } from 'react';
import TimeLineStack from './TimeLineStack';
import { Box, Container } from '@mui/material';
import BikeSlider from './BikeSlider';
import { TimelineData } from '../../../../interfaces/Timeline/TimeLine';
import ColoredTitle from '../../../../components/ColoredTitle';

export const BikeTimeline: React.FC<{ data: TimelineData[] }> = ({ data }) => {
  const marks = data.map((item, idx) => ({
    value: idx,
    label: item.year.toString(),
  }));

  const visibleMarks = marks;

  const stackRef = useRef<HTMLDivElement>(null);

  const minIdx = 0;
  const maxIdx = marks.length - 1;

  const [yearIdx, setYearIdx] = useState(minIdx);

  const getYearByIdx = (idx: number) => data[idx].year;

  const scrollToYear = (targetIdx: number) => {
    if (stackRef.current) {
      const container = stackRef.current;
      const targetYear = getYearByIdx(targetIdx);
      if (targetIdx === minIdx) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        return;
      }
      const card = container.querySelector(`[data-year="${targetYear}"]`);
      if (card) {
        const cardEl = card as HTMLElement;
        const containerWidth = container.offsetWidth;
        const cardWidth = cardEl.offsetWidth;
        const left = cardEl.offsetLeft - containerWidth / 2 + cardWidth / 2;
        container.scrollTo({
          left: left,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleYearChange = (value: number) => {
    setYearIdx(value);
    scrollToYear(value);
  };

  return (
    <Box width={'100%'} bgcolor={'#f5f5f5'}>
      <Container
        maxWidth="xl"
        sx={{ overflow: 'hidden', pt: { xs: 3, md: 6 } }}
      >
        <ColoredTitle
          color="typeText.tertiary"
          title="Linha do Tempo"
          fontWeight={700}
        />
        <BikeSlider
          visibleMarks={visibleMarks}
          max={maxIdx}
          min={minIdx}
          year={yearIdx}
          setYear={handleYearChange}
        />
        <TimeLineStack ref={stackRef} timeLineData={data} />
      </Container>
    </Box>
  );
};
