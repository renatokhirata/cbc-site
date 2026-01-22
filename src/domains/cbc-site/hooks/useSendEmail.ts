import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { IContactFormProps } from '../components/Form/types/Contact';
import { IPartnershipsAndSponsorships } from '../components/Form/types/PartnershipsAndSponsorships';
import { IPressRegistration } from '../components/Form/types/PressRegistration';
import { IOmbudsmanContact } from '../components/Form/types/Ombudsman';
interface UseSendEmailReturn {
  loading: boolean;
  error: string | null;
  sendContactForm: (data: IContactFormProps) => Promise<void>;
  partnershipsAndSponsorships: (
    data: IPartnershipsAndSponsorships,
  ) => Promise<void>;
  pressRegistration: (data: IPressRegistration) => Promise<void>;
  ombudsmanContact: (data: IOmbudsmanContact) => Promise<void>;
}

export const useSendEmail = (): UseSendEmailReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendContactForm = async ({
    firstName,
    lastName,
    email,
    subject,
    department,
    message = '',
  }: IContactFormProps): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const templateParams = {
        fullName: `${firstName} ${lastName}`,
        contactEmail: email,
        subject,
        department,
        message,
      };

      await emailjs.send(
        'gmail_messages',
        'template_snj7m88',
        templateParams,
        '2wHhbFDIkHnHi6BAD',
      );
    } catch (err) {
      const errorMessage = 'Erro ao enviar o formulário de contato';
      console.error(errorMessage, err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const partnershipsAndSponsorships = async ({
    firstName,
    lastName,
    email,
    subject,
    department,
    message = '',
    notRobot,
  }: IPartnershipsAndSponsorships): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const templateParams = {
        fullName: `${firstName} ${lastName}`,
        contactEmail: email,
        subject,
        department,
        notRobot,
        message,
      };

      await emailjs.send(
        'gmail_messages',
        'template_snj7m88',
        templateParams,
        '2wHhbFDIkHnHi6BAD',
      );
    } catch (err) {
      const errorMessage = 'Erro ao enviar o formulário de contato';
      console.error(errorMessage, err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const pressRegistration = async ({
    firstName,
    lastName,
    email,
    model,
    phone,
    plate,
    notRobot,
  }: IPressRegistration): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const templateParams = {
        fullName: `${firstName} ${lastName}`,
        contactEmail: email,
        phone,
        model,
        plate,
        notRobot: notRobot ? 'Sim' : 'Não',
      };

      await emailjs.send(
        'gmail_messages',
        'template_snj7m88',
        templateParams,
        '2wHhbFDIkHnHi6BAD',
      );
    } catch (err) {
      const errorMessage =
        'Erro ao enviar o formulário de cadastro de imprensa';
      console.error(errorMessage, err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const ombudsmanContact = async ({
    firstName,
    lastName,
    phone,
    email,
    message = '',
    notRobot,
  }: IOmbudsmanContact): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const templateParams = {
        fullName: `${firstName} ${lastName}`,
        contactEmail: email,
        phone,
        notRobot,
        message,
      };

      await emailjs.send(
        'gmail_messages',
        'template_snj7m88',
        templateParams,
        '2wHhbFDIkHnHi6BAD',
      );
    } catch (err) {
      const errorMessage = 'Erro ao enviar o formulário de contato';
      console.error(errorMessage, err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    sendContactForm,
    partnershipsAndSponsorships,
    pressRegistration,
    ombudsmanContact,
  };
};
