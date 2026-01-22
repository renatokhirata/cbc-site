import { useQuery } from '@tanstack/react-query';
import { modalityService } from '../services';

export const queryKeyModality = ['modality'];

export function useGetModalityById(slug: string) {
  return useQuery({
    queryKey: [...queryKeyModality, slug],
    queryFn: () => modalityService.getById(slug),
    enabled: !!slug,
  });
}
