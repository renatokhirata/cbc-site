import { Box, Typography } from '@mui/material';

interface CarouselCardProps {
  item: {
    id: number;
    label: string;
    href: string;
    image: string;
    icon: string;
  };
  filter?: string;
  clicked?: boolean;
  onCardClick: () => void;
  sx?: object;
}

const CARD_WIDTH = 280;
const CARD_HEIGHT = 420;

const CarouselCard: React.FC<CarouselCardProps> = ({
  item,
  filter,
  clicked,
  onCardClick,
  sx,
}) => {
  return (
    <Box
      sx={{
        marginTop: clicked ? -2 : 0,
        marginRight: 2,
        ...sx,
      }}
    >
      <Box
        sx={{
          width: `${CARD_WIDTH}px`,
          height: `${CARD_HEIGHT}px`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          flex: 1,
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={`card image`}
          onClick={() => {
            onCardClick();
          }}
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            position: 'relative',
          }}
        />

        {item.icon && (
          <Box
            component="img"
            src={item.icon}
            alt={`card icon`}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 10,
              filter: clicked ? filter : null,
            }}
          />
        )}

        {item.label && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                filter: clicked ? filter : null,
                color: 'title.primary',
                textAlign: 'center',
                pb: 4,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CarouselCard;
