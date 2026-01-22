import { Stack } from '@mui/material';
import ButtonNavigate from './ButtonNavigate';

interface ButtonData {
  title: string;
  description: string;
  navigate: string;
}

interface ListButtonNavigateProps {
  data: ButtonData[];
  onClick: (navigate: string) => void;
}

const ListButtonNavigate = ({ data, onClick }: ListButtonNavigateProps) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        py: 2,
        gap: { xs: 2, md: 6 },
        justifyContent: { xs: 'center', md: 'space-between' },
      }}
    >
      {data.map((item, index) => (
        <Stack key={index} direction={'row'} flex={1}>
          <ButtonNavigate
            title={item.title}
            description={item.description}
            onClick={() => onClick(item.navigate)}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default ListButtonNavigate;
