import { Stack, Box } from '@mui/material';
import { IDocumentsByYear } from '../../../../interfaces/Documents/Document';
import { DocumentModal } from './DocumentModal';
import { YearDivider } from './YearDivider';

interface ListDocumentsModalProps {
  document?: IDocumentsByYear[];
}

const ListDocumentsModal: React.FC<ListDocumentsModalProps> = ({
  document,
}) => {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      spacing={2}
      sx={{
        width: '100%',
      }}
    >
      {document &&
        document.map((yearGroup) => (
          <Box key={yearGroup.year} mb={3}>
            <Stack spacing={2}>
              {yearGroup.documents.map((doc, docIndex) => (
                <DocumentModal
                  key={doc.id ?? docIndex}
                  title={doc.name}
                  date={doc.date || ''}
                />
              ))}
            </Stack>
            <YearDivider year={yearGroup.year} />
          </Box>
        ))}
    </Stack>
  );
};

export default ListDocumentsModal;
