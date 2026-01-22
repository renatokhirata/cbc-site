import { Box, Container, Grid } from '@mui/material';
import Header from '../../components/PageHeader';
import contactHeaderIcon from '../../../../assets/icons/contactHeader.svg';
import ColoredTitle from '../../components/ColoredTitle';
import ContactForm from './components/ContactForm';
import ServiceChannel from '../../components/ServiceChannel';
import { BoxGoogleMaps } from './components/MapSection';
import { CBC_LONDRINA_LOCATION } from './components/MapSection/constants';

const Contact = () => {
  return (
    <Box>
      <Header title={'Contato'} icon={contactHeaderIcon} />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Box mb={2}>
          <ColoredTitle title="Fale com a CBC!" color="typeText.tertiary" />
        </Box>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm onSubmit={() => {}} loading={false} />
          </Grid>
          <Grid
            sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            flexGrow={1}
            size={{ xs: 12, md: 6 }}
          >
            <Box mb={{ xs: 4, md: 10 }}>
              <BoxGoogleMaps
                markers={[{ ...CBC_LONDRINA_LOCATION, show: true }]}
              />
            </Box>
            <ServiceChannel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
