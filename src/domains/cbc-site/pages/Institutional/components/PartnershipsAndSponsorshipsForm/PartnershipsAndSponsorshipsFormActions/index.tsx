import { Stack } from '@mui/material';
import CircularProgress from '../../../../../components/CircularProgress';
import MainButton from '../../../../../components/Buttons/MainButton';

interface PartnershipsAndSponsorshipsFormActionsProps {
  loading: boolean;
  onClick: () => void;
}

export const PartnershipsAndSponsorshipsFormActions = ({
  loading,
  onClick,
}: PartnershipsAndSponsorshipsFormActionsProps) => {
  return (
    <Stack direction="row" justifyContent="flex-start">
      <MainButton
        label={loading ? '' : 'Enviar mensagem'}
        onClick={onClick}
        disabled={loading}
        type="submit"
        fullWidth
      >
        {loading && <CircularProgress color="typeText.secondary" size={15} />}
      </MainButton>
    </Stack>
  );
};

export default PartnershipsAndSponsorshipsFormActions;
