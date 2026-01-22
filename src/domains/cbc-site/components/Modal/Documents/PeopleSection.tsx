import { Box, Typography } from '@mui/material';
import TextContent from '../../TextContent';

interface PeopleSectionProps {
  title: string;
  names: string;
  color?: string;
}

export const PeopleSection: React.FC<PeopleSectionProps> = ({
  title,
  names,
  color = 'typeText.tertiary',
}) => {
  return (
    <Box>
      <TextContent content={title} fontWeight={700} color={color} />
      <Typography
        variant="body2"
        component="div"
        color="typeText.default"
        fontWeight={600}
      >
        {names.split(', ').map((name, index) => (
          <Box key={index} component="span" display="block">
            {name}
          </Box>
        ))}
      </Typography>
    </Box>
  );
};
