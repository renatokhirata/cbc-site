import { Box, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PartnershipsAndSponsorshipsFormActions from './PartnershipsAndSponsorshipsFormActions';
import { useApp } from '../../../../hooks/useApp';
import { useSendEmail } from '../../../../hooks/useSendEmail';
import FirstAndLastName from '../../../../components/Form/Fields/FirstAndLastName';
import Email from '../../../../components/Form/Fields/Email';
import Message from '../../../../components/Form/Fields/Message';
import NotRobot from '../../../../components/Form/Fields/NotRobot';
import {
  PartnershipsFormData,
  partnershipsFormSchema,
} from '../../../../components/Form/schema/fieldValidationSchema';

interface PartnershipsAndSponsorshipsFormProps {
  onSubmit?: (data: PartnershipsFormData) => void;
  onClose?: () => void;
}

const PartnershipsAndSponsorshipsForm = ({
  onSubmit,
  onClose,
}: PartnershipsAndSponsorshipsFormProps) => {
  const { handleMessage } = useApp();
  const { loading, partnershipsAndSponsorships } = useSendEmail();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PartnershipsFormData>({
    resolver: zodResolver(partnershipsFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: 'Parcerias e Patrocínios',
      department: 'Parcerias',
      message: '',
      notRobot: false,
    },
  });

  const onSubmitForm = async (data: PartnershipsFormData) => {
    try {
      await partnershipsAndSponsorships(data);

      handleMessage('Formulário enviado com sucesso!', 'success', {
        vertical: 'top',
        horizontal: 'right',
      });

      if (onSubmit) {
        onSubmit(data);
      }

      if (onClose) {
        onClose();
      }
    } catch (error) {
      if (error instanceof Error) {
        handleMessage(error.message, 'error', {
          vertical: 'top',
          horizontal: 'right',
        });
      }
    }
  };

  const onError = (validationErrors: Record<string, unknown>) => {
    console.log('Erros de validação:', validationErrors);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitForm, onError)}>
      <Stack spacing={4}>
        <FirstAndLastName
          control={control}
          firstNameError={errors.firstName?.message}
          lastNameError={errors.lastName?.message}
          errorSpacing={{ xs: 10, sm: 28, md: 15, lg: 30 }}
        />
        <Email control={control} error={errors.email?.message} />

        <Message control={control} />
        <NotRobot control={control} error={errors.notRobot?.message} />
        <PartnershipsAndSponsorshipsFormActions
          loading={loading}
          onClick={handleSubmit(onSubmitForm, onError)}
        />
      </Stack>
    </Box>
  );
};

export default PartnershipsAndSponsorshipsForm;
