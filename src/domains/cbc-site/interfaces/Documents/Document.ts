export interface IDocument {
  id: string | number;
  name: string;
  url: string;
  date?: string;
}

export interface IDocumentsByYear {
  year: string;
  documents: IDocument[];
}

export interface IDocumentCard {
  icon?: string;
  title: string;
  description?: string;
  document?: IDocument[];
}

export interface Antidoping {
  year: number | string;
  date: string;
  title: string;
  sections: {
    officialDocuments: AntidopingSection[];
    provisionalNotices: AntidopingSection[];
  } | null;
}

export interface AntidopingSection {
  title?: string;
  description?: string;
  fileName: string;
  fileUrl: string;
}
