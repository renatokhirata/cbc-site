import { useQuery } from '@tanstack/react-query';
import { newsService } from '../services';

export const queryKeyNews = ['news'];

export function useGetNews() {
  return useQuery({
    queryKey: queryKeyNews,
    queryFn: () => newsService.getAll(),
  });
}

export function useGetNewsById(id: string) {
  return useQuery({
    queryKey: [...queryKeyNews, id],
    queryFn: () => newsService.getById(id),
    enabled: !!id,
  });
}

export function useGetNewsBySlug(slug: string) {
  return useQuery({
    queryKey: [...queryKeyNews, slug],
    queryFn: () => newsService.getAllBySlug(slug),
    enabled: !!slug,
  });
}
