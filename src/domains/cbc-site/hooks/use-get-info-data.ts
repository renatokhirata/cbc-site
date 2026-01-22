import { useQuery } from '@tanstack/react-query';
import { infoDataService } from '../services';

export const queryKeyInfoData = ['infoData'];

export function useGetInfoData() {
  return useQuery({
    queryKey: queryKeyInfoData,
    queryFn: () => infoDataService.getAll(),
  });
}

export function useGetInfoDataByCategory(category: string) {
  return useQuery({
    queryKey: [...queryKeyInfoData, 'category', category],
    queryFn: () => infoDataService.getByCategory(category),
    enabled: !!category,
  });
}
