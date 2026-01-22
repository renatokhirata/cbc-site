import IApiClient from '../interfaces/IApiClient';
import { NewsResume } from '../interfaces/News/INews';

export class NewsService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getAll(): Promise<NewsResume[]> {
    const response = await this.api.get<NewsResume[]>('/news');
    return response.data;
  }

  public async getById(id: string): Promise<NewsResume | null> {
    const response = await this.api.get<NewsResume>(`/news/${id}`);
    return response.data;
  }

  public async getAllBySlug(slug: string): Promise<NewsResume[] | null> {
    const response = await this.api.get<NewsResume[]>(`/news/slug/${slug}`);
    return response.data;
  }
}
