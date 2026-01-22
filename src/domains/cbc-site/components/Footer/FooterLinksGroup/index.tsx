import { Box, Grid, Stack } from '@mui/material';
import { INavigation } from '../../../interfaces/Link/ILink';
import { useNavigate } from 'react-router-dom';
import TextContent from '../../TextContent';
import { isExternalLink } from '../../../../../shared/utils/navigation';
import { CustomLink } from '../../Links';

interface FooterLinksGroupProps {
  data: INavigation;
}

const FooterLinksGroup = ({ data }: FooterLinksGroupProps) => {
  const navigate = useNavigate();

  const handleNavigate = (href?: string) => {
    if (!href) {
      return;
    }

    if (isExternalLink(href)) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(href);
  };
  return (
    <Grid container spacing={{ xs: 4, md: 10, lg: 32 }} width={'100%'}>
      {data.navigationItems?.map((navItem, index) => (
        <Grid key={index} size={{ xs: 12, md: 4, lg: 3 }}>
          <Stack spacing={1}>
            <TextContent
              fontWeight={700}
              content={navItem.title ?? ''}
              color="typeText.primary"
            />
            {navItem.navigationItems?.map((subNavItem, idx) => (
              <Box key={idx} width={200}>
                <CustomLink
                  key={idx}
                  to={subNavItem.href || ''}
                  label={subNavItem.label || ''}
                  color="typeText.primary"
                  onClick={() => handleNavigate(subNavItem.href)}
                  fontSize={16}
                />
              </Box>
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterLinksGroup;
