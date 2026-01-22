import { Stack } from '@mui/material';
import CircularProgress from '../../../../../components/CircularProgress';
import MainButton from '../../../../../components/Buttons/MainButton';

interface PressRegistrationFormActionsProps {
  loading: boolean;
  onClick: () => void;
}

export const PressRegistrationFormActions = ({
  loading,
  onClick,
}: PressRegistrationFormActionsProps) => {
  return (
    <Stack direction="row" justifyContent="flex-start" width={'100%'}>
      <MainButton
        label={loading ? '' : 'Cadastrar'}
        onClick={onClick}
        disabled={loading}
        type="submit"
        fullWidth
        isDark={true}
        sx={{
          fontWeight: 400,
          fontStyle: 'regular',
          fontSize: '1rem',
        }}
      >
        {loading && <CircularProgress color="typeText.secondary" size={30} />}
      </MainButton>
    </Stack>
  );
};

export default PressRegistrationFormActions;
