import { z } from 'zod';

// Campos individuais
export const fields = {
  firstName: z
    .string()
    .min(1, 'Nome é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),

  lastName: z
    .string()
    .min(1, 'Sobrenome é obrigatório')
    .min(2, 'Sobrenome deve ter pelo menos 2 caracteres'),

  email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inválido'),

  subject: z
    .string()
    .min(1, 'Assunto é obrigatório')
    .min(3, 'Assunto deve ter pelo menos 3 caracteres'),

  department: z.string().min(1, 'Departamento é obrigatório'),

  message: z
    .string()
    .min(1, 'Menssagem é obrigatória')
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres'),

  notRobot: z.boolean().refine((val) => val === true, {
    message: 'Você precisa confirmar que não é um robô',
  }),

  phone: z.string().min(1, 'Telefone é obrigatório'),

  model: z.string().min(1, 'Modelo é obrigatório'),

  plate: z.string().min(1, 'Placa é obrigatória'),
};

// Schemas pré-definidos para cada formulário
export const contactFormSchema = z.object({
  firstName: fields.firstName,
  lastName: fields.lastName,
  email: fields.email,
  subject: fields.subject,
  department: fields.department,
  message: fields.message,
  notRobot: fields.notRobot,
});

export const partnershipsFormSchema = z.object({
  firstName: fields.firstName,
  lastName: fields.lastName,
  email: fields.email,
  subject: fields.subject,
  department: fields.department,
  message: fields.message,
  notRobot: fields.notRobot,
});

export const PressRegistrationFormSchema = z.object({
  firstName: fields.firstName,
  lastName: fields.lastName,
  email: fields.email,
  phone: fields.phone,
  model: fields.model,
  plate: fields.plate,
  notRobot: fields.notRobot,
});

export const OmbudsmanFormSchema = z.object({
  firstName: fields.firstName,
  lastName: fields.lastName,
  phone: fields.phone,
  email: fields.email,
  message: fields.message,
  notRobot: fields.notRobot,
});

// Types
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PartnershipsFormData = z.infer<typeof partnershipsFormSchema>;
export type PressRegistrationFormData = z.infer<
  typeof PressRegistrationFormSchema
>;
export type OmbudsmanFormData = z.infer<typeof OmbudsmanFormSchema>;
