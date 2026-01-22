import { Stack } from '@mui/material';
import SocialIcons from '../../SocialIcons';
import TextContent from '../../TextContent';

const FooterInfos = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start' },
        width: '100%',
        gap: { xs: 3, md: 3, lg: 0 },
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 380, flex: 1 }}>
        <TextContent
          color={'typeText.primary'}
          fontWeight={700}
          content={
            'Avenida Maringá, 627 - Sala 504 - Jardim Vitória CEP: 86060-000 Londrina/PR'
          }
        />
        <Stack spacing={0}>
          <TextContent
            color={'typeText.primary'}
            content={'Segunda a sexta-feira'}
            marginBottom={0}
          />
          <TextContent
            color={'typeText.primary'}
            content={'De 9h até 12h e de 14h até 18h'}
            fontWeight={700}
            marginBottom={0}
          />
        </Stack>
        <Stack spacing={0}>
          <TextContent
            color={'typeText.primary'}
            content={'Telefone: +55 (43) 3327-3232'}
            marginBottom={0}
          />
          <Stack direction={'row'} spacing={1}>
            <TextContent
              color={'typeText.primary'}
              content={'E-mail:'}
              marginBottom={0}
            />
            <TextContent
              color={'typeText.primary'}
              content={'cbc@cbc.esp.br'}
              fontWeight={700}
              marginBottom={0}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ alignSelf: { xs: 'flex-start', md: 'flex-start' } }}>
        <SocialIcons />
      </Stack>
    </Stack>
  );
};

export default FooterInfos;
