import { useQuery } from '@tanstack/react-query';
import { pageService } from '../services';

export const queryKeyPage = ['page'];

export function useGetPageData(path: string) {
  return useQuery({
    queryKey: [...queryKeyPage, path],
    queryFn: () => pageService.getPageData(path),
    enabled: !!path,
  });
}
