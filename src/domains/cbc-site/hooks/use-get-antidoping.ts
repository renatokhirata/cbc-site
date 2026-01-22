import { useQuery } from '@tanstack/react-query';
import { antidopingDocumentsService } from '../services';

export const queryKeyAntidoping = ['antidoping'];

export function useGetAntidoping() {
  return useQuery({
    queryKey: queryKeyAntidoping,
    queryFn: () => antidopingDocumentsService.getAll(),
  });
}
