import { InfoResume } from '../interfaces/Info/Info';
import MockApiClient from '../classes/MockApiClient';

export class InfoDataService {
  private apiClient: MockApiClient;

  constructor(apiClient: MockApiClient) {
    this.apiClient = apiClient;
  }

  async getByCategory(category: string): Promise<InfoResume[]> {
    const response = await this.apiClient.get<InfoResume[]>(
      `/info-data/${category}`,
    );
    return response.data;
  }

  async getAll(): Promise<InfoResume[]> {
    const response = await this.apiClient.get<InfoResume[]>(`/info-data`);
    return response.data;
  }
}
