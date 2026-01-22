import { Stack } from '@mui/material';
import SocialIcons from '../../SocialIcons';

const SocialIconsSection = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: 'center',
        color: 'white',
      }}
    >
      <SocialIcons />
    </Stack>
  );
};

export default SocialIconsSection;
