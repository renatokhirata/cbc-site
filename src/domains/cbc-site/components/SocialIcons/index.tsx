import { Stack, Box } from '@mui/material';
import {
  FEDERATIONS_SOCIAL_ICONS,
  SOCIAL_ICONS,
} from '../../../../shared/constants/socialIcons';

interface SocialIconsProps {
  blue?: boolean;
  isFederation?: boolean;
  size?: { xs: number; md: number };
}

const SocialIcons = ({
  blue,
  isFederation,
  size = { xs: 24, md: 24 },
}: SocialIconsProps) => (
  <Stack direction="row" spacing={2}>
    {(isFederation ? FEDERATIONS_SOCIAL_ICONS : SOCIAL_ICONS).map((item) => {
      const { icon: Icon, label, href } = item;
      const isImage = 'isImage' in item && item.isImage;

      return (
        <Box
          key={label}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            transition: 'color 0.2s',
            color: blue ? 'link.primary' : 'icon.default',
            p: blue ? 0.6 : 0,
            borderRadius: blue ? '6px' : '0',
            backgroundColor: blue ? 'button.default' : 'inherit',
            cursor: 'pointer',
            '&:hover': {
              color: 'link.hovered',
            },
          }}
        >
          {isImage ? (
            <Box
              component="img"
              src={Icon as string}
              alt={label}
              sx={{
                width: { xs: size.xs, md: size.md },
                height: { xs: size.xs, md: size.md },
              }}
            />
          ) : (
            <Icon sx={{ fontSize: { xs: size.xs, md: size.md } }} />
          )}
        </Box>
      );
    })}
  </Stack>
);

export default SocialIcons;
