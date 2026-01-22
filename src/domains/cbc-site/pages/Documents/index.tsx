import { Box, Container, Stack } from '@mui/material';
import InfoItemsList from '../../components/Infos/components/InfoItemsList';
import PageHeader from '../../components/PageHeader';
import FilterDocuments from './components/FilterDocuments';
import documentPageIcon from '../../../../assets/icons/DocumentPageIcon.svg';
import { useGetInfoData } from '../../hooks/use-get-info-data';

const DocumentPage = () => {
  const { data: infoList = [], isLoading: loading } = useGetInfoData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <PageHeader title={'Documentos Oficiais'} icon={documentPageIcon} />
      <FilterDocuments />
      <Container maxWidth={'xl'}>
        <Stack my={10}>
          <InfoItemsList infoList={infoList} />
        </Stack>
      </Container>
    </Box>
  );
};

export default DocumentPage;
