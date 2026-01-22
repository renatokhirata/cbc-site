import { Box, Paper, Stack } from '@mui/material';
import ColoredTitle from '../../components/ColoredTitle';
import DocumentItem from '../../components/GenericCard/DocumentCard/components/DocumentItem';

interface PaperDocumentProps {
  title: string;
  color?: string;
  document: { icon: string; title: string }[];
}

const PaperDocument = ({
  title,
  document,
  color = 'typeText.tertiary',
}: PaperDocumentProps) => {
  return (
    <Paper
      sx={{
        background: '#F5F5F5',
        borderRadius: 4,
        height: { xs: 150, sm: 200, md: 210 },
      }}
    >
      <Stack spacing={2} p={2}>
        <Box width="100%">
          <ColoredTitle
            title={title}
            color={color}
            fontSize={{ xs: '1rem', sm: '1.9rem', lg: '2rem' }}
          />
        </Box>
        <DocumentItem title={document[0].title} />
      </Stack>
    </Paper>
  );
};
export default PaperDocument;
