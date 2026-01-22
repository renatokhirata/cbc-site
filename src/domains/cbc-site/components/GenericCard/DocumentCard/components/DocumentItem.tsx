import { Box, Stack } from '@mui/material';
import iconDocument from '../../../../../../assets/icons/iconDocument.png';
import TextContent from '../../../TextContent';

interface DocumentItemProps {
  title: string;
  icon?: string;
  bgcolor?: string;
}

export const DocumentItem: React.FC<DocumentItemProps> = ({
  title,
  icon,
  bgcolor,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      width="100%"
      height={{ xs: 50, md: 60 }}
      border={1}
      borderColor="typeText.secondary"
      borderRadius={{ xs: 2, md: 3 }}
      px={{ xs: 1, md: 2 }}
      py={{ xs: 0.5, md: 1 }}
      bgcolor={bgcolor || 'background.paper'}
    >
      <Box
        component="img"
        src={icon || iconDocument}
        alt="Document Icon"
        width={25}
        height={25}
      />
      <TextContent
        content={title}
        color="typeText.secondary"
        fontSize={{ xs: '.8rem', sm: '1rem', md: '1rem' }}
        fontWeight={400}
      />
    </Stack>
  );
};

export default DocumentItem;
