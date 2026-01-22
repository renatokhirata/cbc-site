import { Paper, Stack } from '@mui/material';
import ColoredTitle from '../../../components/ColoredTitle';
import DocumentItem from '../../../components/GenericCard/DocumentCard/components/DocumentItem';

interface PaperDocumentProps {
  title: string;
  color?: string;
  document: { icon: string; title: string }[];
  bgColor?: string;
}

const PaperDocument = ({
  title,
  document,
  bgColor = '#F5F5F5',
  color = 'typeText.tertiary',
}: PaperDocumentProps) => {
  return (
    <Paper elevation={1} sx={{ backgroundColor: bgColor, borderRadius: 4 }}>
      <Stack spacing={2} p={3}>
        <ColoredTitle title={title} color={color} />
        <DocumentItem title={document[0].title} />
      </Stack>
    </Paper>
  );
};
export default PaperDocument;
