import IApiClient from '../interfaces/IApiClient';
import { Modality } from '../interfaces/Modality/IModality';

export class ModalityService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getById(id: string): Promise<Modality | null> {
    const response = await this.api.get<Modality>(`/modalities/${id}`);
    return response.data;
  }
}
