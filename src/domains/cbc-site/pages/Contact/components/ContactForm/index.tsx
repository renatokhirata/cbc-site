import { Box, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useApp } from '../../../../hooks/useApp';
import { useSendEmail } from '../../../../hooks/useSendEmail';
import ContactFormActions from './ContactFormActions';
import Email from '../../../../components/Form/Fields/Email';
import FirstAndLastName from '../../../../components/Form/Fields/FirstAndLastName';
import Subject from '../../../../components/Form/Fields/Subject';
import Message from '../../../../components/Form/Fields/Message';
import NotRobot from '../../../../components/Form/Fields/NotRobot';
import {
  ContactFormData,
  contactFormSchema,
} from '../../../../components/Form/schema/fieldValidationSchema';
import DepartmentSelect from '../../../../components/Form/Fields/DepartmentSelect';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  loading: boolean;
}

const ContactForm = ({ onSubmit, loading }: ContactFormProps) => {
  const { handleMessage } = useApp();
  const { sendContactForm } = useSendEmail();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      department: '',
      message: '',
      notRobot: false,
    },
  });

  const onSubmitForm = async (data: ContactFormData) => {
    try {
      await sendContactForm(data);
      handleMessage('Formulário enviado com sucesso!', 'success');

      // Chama o callback se foi fornecido
      if (onSubmit) {
        onSubmit(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        handleMessage(error.message, 'error');
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
        <Subject control={control} error={errors.subject?.message} />
        <DepartmentSelect
          control={control}
          error={errors.department?.message}
        />
        <Message control={control} />
        <NotRobot
          control={control}
          error={errors.notRobot?.message}
          withBorder
        />
        <ContactFormActions
          loading={loading}
          onClick={handleSubmit(onSubmitForm, onError)}
        />
      </Stack>
    </Box>
  );
};

export default ContactForm;
