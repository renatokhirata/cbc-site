export interface MediaResume {
  url: string;
  alt?: string;
  type?: 'image' | 'video';
}

export interface Gallery {
  id: string;
  title: string;
  category: string;
  photoCount: number;
  date: string;
  coverImage: string;
  coverAlt?: string;
  medias: MediaResume[];
}
