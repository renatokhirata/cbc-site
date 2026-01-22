import IApiClient from '../interfaces/IApiClient';
import { PageResume } from '../interfaces/Page/PageResume';

export class PageService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getPageData(path: string): Promise<PageResume | null> {
    const response = await this.api.get<PageResume>(path);
    return response.data;
  }
}
