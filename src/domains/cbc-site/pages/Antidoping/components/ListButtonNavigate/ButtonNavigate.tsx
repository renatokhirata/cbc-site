import { Box } from '@mui/material';
import TextContent from '../../../../components/TextContent';
import ColoredTitle from '../../../../components/ColoredTitle';

interface ButtonNavigateProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ButtonNavigate = ({
  title,
  description,
  onClick,
}: ButtonNavigateProps) => {
  return (
    <Box
      bgcolor="typeText.tertiary"
      height={110}
      borderRadius={4}
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="#fff"
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    >
      <ColoredTitle title={title} color="typeText.primary" />
      <TextContent
        content={description}
        color="typeText.primary"
        fontWeight={400}
        marginBottom={0}
      />
    </Box>
  );
};

export default ButtonNavigate;
