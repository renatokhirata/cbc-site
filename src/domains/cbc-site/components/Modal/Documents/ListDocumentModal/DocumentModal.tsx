import { Box, Stack } from '@mui/material';
import iconDocument from '../../../../../../assets/icons/iconDocument.png';
import TextContent from '../../../TextContent';

interface DocumentModalProps {
  title: string;
  date: string;
  year?: string;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  title,
  date,
  year,
}) => {
  return (
    <Stack
      direction={{ xs: 'row', sm: 'column' }}
      width="100%"
      height={'auto'}
      border={1}
      justifyContent={'center'}
      borderColor="typeText.secondary"
      borderRadius={2}
      px={2}
      py={{ xs: 1, sm: 2 }}
    >
      <Stack
        direction={{ xs: 'row', sm: 'column' }}
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        spacing={2}
      >
        <Box
          component="img"
          src={iconDocument}
          alt="Document Icon"
          width={{ xs: 25, sm: 40 }}
          height={{ xs: 25, sm: 40 }}
          mb={{ xs: 1, sm: 0 }}
        />

        <TextContent
          content={title}
          color="primary"
          fontWeight={400}
          marginBottom={0}
          fontSize={{ xs: '.8rem', sm: '1.125rem' }}
        />
      </Stack>

      <TextContent
        content={`Atualizado em ${date}`}
        color="typeText.default"
        fontWeight={600}
        fontSize={'0.875rem'}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      />

      <TextContent
        content={year || ''}
        color="typeText.default"
        fontWeight={600}
        fontSize={'0.875rem'}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      />
    </Stack>
  );
};

export default DocumentModal;
