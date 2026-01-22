// import { CBCApiClient } from '../classes/CBCApiClient';
import MockApiClient from '../classes/MockApiClient';
import { EventService } from './EventService';
import { LinkService } from './LinkService';
import { GalleryService } from './GalleryService';
import { NewsService } from './NewsService';
import { PageService } from './PageService';
import { InfoDataService } from './InfoDataService';
import { ModalityService } from './ModalityService';
import { AntidopingDocumentsService } from './AntidopingDocumentsService';

// const apiClient = new CBCApiClient();
const mockApiClient = new MockApiClient();

export const linkService = new LinkService(mockApiClient);
export const newsService = new NewsService(mockApiClient);
export const eventService = new EventService(mockApiClient);
export const galleryService = new GalleryService(mockApiClient);
export const pageService = new PageService(mockApiClient);
export const infoDataService = new InfoDataService(mockApiClient);
export const modalityService = new ModalityService(mockApiClient);
export const antidopingDocumentsService = new AntidopingDocumentsService(
  mockApiClient,
);
