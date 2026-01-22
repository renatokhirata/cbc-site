import { useQuery } from '@tanstack/react-query';
import { eventService } from '../services';

export const queryKeyEvents = ['events'];

export function useGetEvents() {
  return useQuery({
    queryKey: queryKeyEvents,
    queryFn: () => eventService.getAll(),
  });
}

export function useGetEventById(id: string) {
  return useQuery({
    queryKey: [...queryKeyEvents, id],
    queryFn: () => eventService.getById(id),
    enabled: !!id,
  });
}

export function useGetEventsBySlug(slug: string) {
  return useQuery({
    queryKey: [...queryKeyEvents, 'slug', slug],
    queryFn: () => eventService.getAllBySlug(slug),
    enabled: !!slug,
  });
}
