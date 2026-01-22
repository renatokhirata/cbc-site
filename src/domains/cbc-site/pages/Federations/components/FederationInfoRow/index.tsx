import { Stack, Box } from '@mui/material';
import ColoredTitle from '../../../../components/ColoredTitle';
import TextContent from '../../../../components/TextContent';
import { ReactNode } from 'react';

interface FederationInfoRowProps {
  label: string;
  content: string | string[] | ReactNode;
}

const FederationInfoRow = ({ label, content }: FederationInfoRowProps) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <Stack spacing={0.5}>
          {content.map((item, index) => (
            <TextContent marginBottom={0} key={index} content={` ${item}`} />
          ))}
        </Stack>
      );
    }

    if (typeof content === 'string') {
      return <TextContent marginBottom={0} content={` ${content}`} />;
    }

    return content;
  };

  return (
    <Stack
      direction={'row'}
      spacing={1}
      alignItems="flex-start"
      sx={{ width: '100%' }}
    >
      <Box sx={{ minWidth: 120, flexShrink: 0 }}>
        <ColoredTitle
          pt={0.5}
          title={label}
          fontSize={'16px'}
          color="typeText.tertiary"
        />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, wordBreak: 'break-word' }}>
        {renderContent()}
      </Box>
    </Stack>
  );
};

export default FederationInfoRow;
