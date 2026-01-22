import { Box, Container } from '@mui/material';
import { PropsWithChildren } from 'react';

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        width: '100%',
        py: 8,
        pb: 16,
        backgroundColor: 'customBackground.secondary',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

export default Footer;
