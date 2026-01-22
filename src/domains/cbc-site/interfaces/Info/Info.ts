import { IDocument } from '../Documents/Document';

interface Representative {
  id: string;
  name: string;
}

interface IDocumentsByYear {
  year: string;
  documents: IDocument[];
}

interface Members {
  id: string;
  name: string;
}

interface Council {
  id: string;
  name: string;
}

export interface InfoResume {
  id: string | number;
  title: string;
  icon?: string;
  subtitle?: string;
  category?: string;
  content?: string;
  description?: string;
  date?: string;
  representative?: Representative[];
  members?: Members[];
  council?: Council[];
  documents?: IDocument[];
  documentsByYear?: IDocumentsByYear[];
  buttons?: { id: string; label: string }[];
}
