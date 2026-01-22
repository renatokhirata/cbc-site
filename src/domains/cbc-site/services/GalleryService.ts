import IApiClient from '../interfaces/IApiClient';
import { Gallery } from '../interfaces/Media/IMedia';

export class GalleryService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getAll(): Promise<Gallery[]> {
    const response = await this.api.get<Gallery[]>('/medias');
    return response.data;
  }

  public async getById(id: string): Promise<Gallery | null> {
    const response = await this.api.get<Gallery>(`/medias/${id}`);
    return response.data;
  }
}
