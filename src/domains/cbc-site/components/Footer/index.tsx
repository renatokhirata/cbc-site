import { Box, Divider, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import cbcLightLogo from '../../../../assets/images/cbcLightLogo.svg';
import { INavigation } from '../../interfaces/Link/ILink';
import FooterLinksGroup from './FooterLinksGroup';
import FooterInfos from './FooterInfos';
import FooterCopyright from './FooterCopyright';
import { linkService } from '../../services';

const FooterContent = () => {
  const [data, setData] = useState<INavigation>({
    type: '',
    navigationItems: [],
  });

  useEffect(() => {
    const fetchFooterLinks = async () => {
      const res = await linkService.getMenuLinks('footer');
      setData(res);
    };
    fetchFooterLinks();
  }, []);

  return (
    <Box component="footer" sx={{ color: 'customBackground.primary' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={{ xs: 4, md: 8, lg: 10 }}
        >
          <FooterLinksGroup data={data} />
          <FooterInfos />
        </Stack>
        <Divider sx={{ my: 8, borderColor: '#FFF' }} />
        <FooterCopyright logoSrc={cbcLightLogo} altText="CBC Logo Claro" />
      </Box>
    </Box>
  );
};

export default FooterContent;
