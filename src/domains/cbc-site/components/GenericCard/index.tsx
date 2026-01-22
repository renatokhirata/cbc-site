import { Box, Stack } from '@mui/material';
import ColoredTitle from '../ColoredTitle';
import TextContent from '../TextContent';
import LoadDocumentButton from './DocumentCard/components/LoadDocumentButton';

interface IGenericCardProps {
  type: 'document' | 'button';
  icon: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  buttonLabel?: string;
  onAction?: () => void;
  onButtonClick?: () => void;
}

const GenericCard: React.FC<IGenericCardProps> = ({
  icon,
  description,
  children,
  title,
  buttonLabel,
  onAction,
  onButtonClick,
  type,
}) => {
  const handleCardClick = () => {
    onAction?.();
  };

  return (
    <Stack
      width={'100%'}
      height={{ xs: 440, sm: 400, md: 482, lg: 455 }}
      bgcolor="#f5f5f5"
      borderRadius={4}
      spacing={2}
      p={2}
      position="relative"
      sx={{
        '&:hover': {
          boxShadow: 2,
          transform: 'scale(1.02)',
          transition: 'transform 0.26s ease-in-out',
        },
      }}
      onClick={handleCardClick}
    >
      <Box
        component="img"
        src={icon}
        alt="Card Icon"
        sx={{
          maxHeight: 38,
          width: 50,
          objectFit: 'contain',
        }}
      />
      <ColoredTitle
        title={title}
        fontSize={{ xs: '1.5rem', sm: '2rem' }}
        color="typeText.tertiary"
      />

      <Stack height={{ xs: 100, sm: 50, md: 100, lg: 90 }}>
        <TextContent
          content={description}
          fontWeight={600}
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: { xs: 4, sm: 4, md: 3 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        />
      </Stack>

      {children}

      {/* Box com a sombra */}
      {type === 'document' && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          bottom={0}
          left={0}
          borderRadius={4}
          sx={{
            py: { xs: 4, sm: 4, md: 5, lg: 2 },
            pt: 10,
            position: 'absolute',
            backgroundImage: 'linear-gradient(to top, #f5f5f5, transparent)',
            zIndex: 1000,
          }}
        >
          <LoadDocumentButton
            label={buttonLabel || ''}
            onClick={onButtonClick}
          />
        </Box>
      )}
    </Stack>
  );
};

// Exporta também com o nome antigo para compatibilidade
export default GenericCard;
