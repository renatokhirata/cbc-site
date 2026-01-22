export interface EventResume {
  id: string;
  title: string;
  date: string;
  dateRange?: string;
  limitDate?: string;
  type: 'Competição' | 'Evento';
  modalitySlug: string;
  location?: string;
  image: string;
  color: string;
  content?: string;
}
