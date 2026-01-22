import { ListDocuments } from './components/ListDocuments';
import { IDocument } from '../../../interfaces/Documents/Document';
import GenericCard from '..';

interface IDocumentCardProps {
  icon: string;
  description: string;
  document: IDocument[];
  onLoadDocuments?: () => void;
  title: string;
}

export const DocumentCard: React.FC<IDocumentCardProps> = ({
  icon,
  description,
  document,
  title,
  onLoadDocuments,
}) => {
  return (
    <GenericCard
      type="document"
      icon={icon}
      title={title}
      description={description}
      buttonLabel="Carregar os demais 14 documentos"
      onAction={onLoadDocuments}
      onButtonClick={onLoadDocuments}
    >
      <ListDocuments document={document} />
    </GenericCard>
  );
};
