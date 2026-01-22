import ApiClient from './ApiClient';

class CBCApiClient extends ApiClient {
  constructor() {
    super({
      baseURL: `${import.meta.env.VITE_API_URL}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}

export default CBCApiClient;
