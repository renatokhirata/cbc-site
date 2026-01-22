import {
  Dialog as DialogMUI,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  Stack,
  Box,
  Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PartnershipsAndSponsorshipsForm from '../PartnershipsAndSponsorshipsForm';
import imagePartnerships from '../../../../../../assets/images/partnershipsAndSponsorshipsForm.svg';
import { Image } from '@mantine/core';
import ColoredTitle from '../../../../components/ColoredTitle';
import SocialIcons from '../../../../components/SocialIcons';

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

const Dialog = ({ open, onClose }: DialogProps) => {
  return (
    <DialogMUI
      open={open}
      onClose={onClose}
      fullScreen
      fullWidth
      disableScrollLock={true}
      PaperProps={{
        sx: {
          p: 2,
        },
      }}
    >
      <Container maxWidth="xl">
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'typeText.tertiary',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          <ColoredTitle
            fontSize="2rem"
            color="typeText.tertiary"
            title="Parcerias e patrocínios"
          />
          <IconButton
            onClick={onClose}
            sx={{
              color: 'typeText.secondary',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 6 }}>
              <PartnershipsAndSponsorshipsForm onClose={onClose} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                src={imagePartnerships}
                alt="Parcerias e Patrocínios"
                width="100%"
                mb={28}
              />

              <Stack spacing={2}>
                <ColoredTitle
                  color="typeText.tertiary"
                  title="Canais de atendimento: "
                />

                <Box>
                  <ColoredTitle
                    color="typeText.default"
                    title="+55(43) 3327-3232"
                  />

                  <ColoredTitle
                    color="typeText.default"
                    title="cbc@cbc.esp.br"
                  />
                </Box>

                <ColoredTitle
                  color="typeText.tertiary"
                  title="Redes Sociais "
                />
                <SocialIcons blue />
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
      </Container>
    </DialogMUI>
  );
};

export default Dialog;
