import { Stack } from '@mui/material';
import MainButton from '../../../../components/Buttons/MainButton';
import CircularProgress from '../../../../components/CircularProgress';

interface ContactFormActionsProps {
  loading: boolean;
  onClick: () => void;
}

export const ContactFormActions = ({
  loading,
  onClick,
}: ContactFormActionsProps) => {
  return (
    <Stack direction="row" justifyContent="flex-start">
      <MainButton
        label={loading ? '' : 'Enviar mensagem'}
        onClick={onClick}
        disabled={loading}
        type="submit"
        fullWidth
        sx={{
          bgcolor: 'button.default',
          padding: 2,
        }}
        isDark
      >
        {loading && <CircularProgress color="typeText.secondary" size={15} />}
      </MainButton>
    </Stack>
  );
};

export default ContactFormActions;
