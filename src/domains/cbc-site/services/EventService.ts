import IApiClient from '../interfaces/IApiClient';
import { EventResume } from '../interfaces/Events/IEvents';

export class EventService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getAll(): Promise<EventResume[]> {
    const response = await this.api.get<EventResume[]>('/events');
    return response.data;
  }

  public async getById(id: string): Promise<EventResume | null> {
    const response = await this.api.get<EventResume>(`/events/${id}`);
    return response.data;
  }

  public async getAllBySlug(slug: string): Promise<EventResume[] | null> {
    const response = await this.api.get<EventResume[]>(`/events/slug/${slug}`);
    return response.data;
  }
}
