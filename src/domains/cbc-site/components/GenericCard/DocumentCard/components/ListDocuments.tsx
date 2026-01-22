import { Stack } from '@mui/material';
import { DocumentItem } from './DocumentItem';
import { IDocument } from '../../../../interfaces/Documents/Document';

interface ListDocumentsProps {
  document?: IDocument[];
}

export const ListDocuments: React.FC<ListDocumentsProps> = ({ document }) => {
  return (
    <Stack
      display={'flex'}
      flexDirection={'column'}
      spacing={2}
      sx={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {document &&
        document
          .slice(0, 2)
          .map((doc, index) => (
            <DocumentItem key={doc.id ?? index} title={doc.name} />
          ))}
    </Stack>
  );
};
