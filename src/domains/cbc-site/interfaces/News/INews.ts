import { MediaResume } from '../Media/IMedia';

export interface NewsResume {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  modalitySlug: string;
  date: string;
  coverImage: MediaResume;
  imageContent: MediaResume[];
  newsContent?: string;
}
