import { Box, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSendEmail } from '../../../../hooks/useSendEmail';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  OmbudsmanFormData,
  OmbudsmanFormSchema,
} from '../../../../components/Form/schema/fieldValidationSchema';
import MainButton from '../../../../components/Buttons/MainButton';
import { useApp } from '../../../../hooks/useApp';
import FirstAndLastName from '../../../../components/Form/Fields/FirstAndLastName';
import { NotRobot } from '../../../../components/Form/Fields/NotRobot';
import { Email } from '../../../../components/Form/Fields/Email';
import Message from '../../../../components/Form/Fields/Message';
import Phone from '../../../../components/Form/Fields/Phone';

interface OmbudsmanFormProps {
  onSubmit?: (data: OmbudsmanFormData) => void;
  onClose?: () => void;
}

const OmbudsmanForm = ({ onSubmit, onClose }: OmbudsmanFormProps) => {
  const { loading, ombudsmanContact } = useSendEmail();
  const { handleMessage } = useApp();

  const onSubmitForm = async (data: OmbudsmanFormData) => {
    try {
      await ombudsmanContact(data);

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OmbudsmanFormData>({
    resolver: zodResolver(OmbudsmanFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      notRobot: false,
    },
  });

  return (
    <Stack spacing={4} component="form" onSubmit={handleSubmit(onSubmitForm)}>
      <FirstAndLastName
        control={control}
        firstNameError={errors.firstName?.message}
        lastNameError={errors.lastName?.message}
        errorSpacing={{ xs: 10, sm: 28, md: 15, lg: 36 }}
        bgColor="#FFF"
      />

      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
      >
        <Phone control={control} error={errors.phone?.message} bgColor="#FFF" />

        <Email control={control} error={errors.email?.message} bgColor="#FFF" />
      </Stack>

      <Message
        control={control}
        error={errors.message?.message}
        bgColor="#FFF"
      />

      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
      >
        <Box flex={1}>
          <NotRobot control={control} error={errors.notRobot?.message} />
        </Box>
        <Box flex={1} width="100%">
          <MainButton
            label="Enviar"
            type="submit"
            loading={loading}
            sx={{ py: 3 }}
            fullWidth
            isDark={true}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default OmbudsmanForm;
