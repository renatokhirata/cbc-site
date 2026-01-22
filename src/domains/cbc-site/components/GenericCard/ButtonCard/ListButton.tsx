import { Grid } from '@mui/material';
import MainButton from '../../Buttons/MainButton';

interface ListButtonsProps {
  buttons: { id: string; label: string }[];
}

const ListButtons: React.FC<ListButtonsProps> = ({ buttons }) => {
  return (
    <Grid container spacing={2}>
      {buttons.map((button, index) => (
        <Grid size={{ xs: 6 }} key={button.id || index}>
          <MainButton
            isDark
            fullWidth
            sx={{
              backgroundColor: 'typeText.secondary',
              height: 70,
              fontSize: { xs: '.763rem', sm: '1rem' },
              padding: '0px',
            }}
          >
            {button.label}
          </MainButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListButtons;
