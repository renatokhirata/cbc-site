import IApiClient from '../interfaces/IApiClient';
import { INavigation } from '../interfaces/Link/ILink';

export class LinkService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getMenuLinks(menuType: string): Promise<INavigation> {
    const response = await this.api.get<INavigation>(`/links/${menuType}`);
    return response.data;
  }
}
