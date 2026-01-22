export interface IFederation {
  id: string;
  state: string;
  name: string;
  president: string;
  address: string;
  cep: string;
  cityUf: string;
  phone: string[];
  email: string;
  website: string;
  channels: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    [key: string]: string | undefined;
  };
  image_url: string;
}
