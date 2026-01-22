import { Box, Stack } from '@mui/material';
import { MVVItem as MVVData } from '../../../../../../../../shared/constants/mvv';
import TextContent from '../../../../../../components/TextContent';
import ColoredTitle from '../../../../../../components/ColoredTitle';

const MVVItem: React.FC<{ item: MVVData }> = ({ item }) => (
  <Stack
    sx={{
      width: '100%',
      textAlign: 'left',
      justifyContent: 'space-between',
    }}
  >
    <ColoredTitle
      title={item.title}
      color="typeText.tertiary"
      fontWeight={700}
    />

    {item.content && (
      <TextContent content={item.content} mb={item.items ? 2 : 0.5} />
    )}

    {item.items && (
      <Box component="ul" sx={{ pl: 2, m: 0 }}>
        {item.items.map((subItem, idx) => (
          <li key={idx}>
            <TextContent content={subItem} marginBottom={0} />
          </li>
        ))}
      </Box>
    )}
  </Stack>
);

export default MVVItem;
