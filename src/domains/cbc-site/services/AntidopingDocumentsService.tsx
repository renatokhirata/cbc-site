import MockApiClient from '../classes/MockApiClient';
import { Antidoping } from '../interfaces/Documents/Document';

export class AntidopingDocumentsService {
  private api: MockApiClient;
  constructor(api: MockApiClient) {
    this.api = api;
  }

  public async getAll(): Promise<Antidoping[]> {
    const response = await this.api.get<Antidoping[]>('/antidoping-docs');
    return response.data;
  }
}
