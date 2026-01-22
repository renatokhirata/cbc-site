import { useQuery } from '@tanstack/react-query';
import { galleryService } from '../services';

export const queryKeyGallery = ['gallery'];

export function useGetGallery() {
  return useQuery({
    queryKey: queryKeyGallery,
    queryFn: () => galleryService.getAll(),
  });
}

export function useGetGalleryById(id: string) {
  return useQuery({
    queryKey: [...queryKeyGallery, id],
    queryFn: () => galleryService.getById(id),
    enabled: !!id,
  });
}
