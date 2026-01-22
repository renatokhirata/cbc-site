import { Box, Grid, Stack } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Phone from './Fields/Phone';
import Email from './Fields/Email';
import NotRobot from './Fields/NotRobot';
import FirstAndLastName from './Fields/FirstAndLastName';
import ModelAndPlate from './Fields/ModelAndPlate';
import { useApp } from '../../../../hooks/useApp';
import { useSendEmail } from '../../../../hooks/useSendEmail';
import {
  PressRegistrationFormData,
  PressRegistrationFormSchema,
} from '../../../../components/Form/schema/fieldValidationSchema';
import PressRegistrationFormActions from './PressRegistrationFormActions';

interface PressRegistrationFormProps {
  onSubmit?: (data: PressRegistrationFormData) => void;
  onClose?: () => void;
}

const PressRegistrationForm = ({
  onSubmit,
  onClose,
}: PressRegistrationFormProps) => {
  const { handleMessage } = useApp();
  const { loading, pressRegistration } = useSendEmail();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PressRegistrationFormData>({
    resolver: zodResolver(PressRegistrationFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      model: '',
      plate: '',
      notRobot: false,
    },
  });

  const onSubmitForm = async (data: PressRegistrationFormData) => {
    try {
      await pressRegistration(data);
      handleMessage('Formulário enviado com sucesso!', 'success', {
        vertical: 'top',
        horizontal: 'right',
      });
      // Chama o callback se foi fornecido
      if (onSubmit) {
        onSubmit(data);
      }
      // Fecha o modal se a função foi fornecida
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

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={3} flex={1}>
            <Controller
              name="firstName"
              control={control}
              render={({
                field: { value: firstNameValue, onChange: onFirstNameChange },
              }) => (
                <Controller
                  name="lastName"
                  control={control}
                  render={({
                    field: { value: lastNameValue, onChange: onLastNameChange },
                  }) => (
                    <FirstAndLastName
                      firstName={firstNameValue}
                      lastName={lastNameValue}
                      onFirstNameChange={onFirstNameChange}
                      onLastNameChange={onLastNameChange}
                      firstNameError={
                        errors.firstName?.message as string | undefined
                      }
                      lastNameError={
                        errors.lastName?.message as string | undefined
                      }
                    />
                  )}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Phone
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.phone?.message as string | undefined}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Email
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.email?.message as string | undefined}
                />
              )}
            />
          </Stack>
        </Grid>

        <Grid sx={{ display: 'flex' }} size={{ xs: 12, sm: 6 }}>
          <Stack spacing={2} flexGrow={1} justifyContent={'space-between'}>
            <Controller
              name="model"
              control={control}
              render={({
                field: { value: modelValue, onChange: onModelChange },
              }) => (
                <Controller
                  name="plate"
                  control={control}
                  render={({
                    field: { value: plateValue, onChange: onPlateChange },
                  }) => (
                    <ModelAndPlate
                      model={modelValue}
                      plate={plateValue}
                      onModelChange={onModelChange}
                      onPlateChange={onPlateChange}
                      modelError={errors.model?.message as string | undefined}
                      plateError={errors.plate?.message as string | undefined}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="notRobot"
              control={control}
              render={({ field }) => (
                <NotRobot
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.notRobot?.message as string | undefined}
                />
              )}
            />

            <PressRegistrationFormActions
              loading={loading}
              onClick={handleSubmit(onSubmitForm)}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PressRegistrationForm;
