// components/FooterCopyright.tsx
import { Box, Stack } from '@mui/material';
import TextContent from '../../TextContent';

interface FooterCopyrightProps {
  logoSrc: string;
  altText: string;
}

const FooterCopyright = ({ logoSrc, altText }: FooterCopyrightProps) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      sx={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component="img" src={logoSrc} alt={altText} width="200px" />
      <TextContent
        content="© 2025 Confederação Brasileira de Ciclismo. Todos os direitos reservados."
        color="typeText.primary"
        fontWeight={400}
        sx={{
          textAlign: 'center',
          fontSize: '1.125rem',
        }}
      />
    </Stack>
  );
};

export default FooterCopyright;
