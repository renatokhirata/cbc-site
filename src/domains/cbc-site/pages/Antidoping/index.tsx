import { Box, Container, Stack } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import antidopingIcon from '../../../../assets/icons/pages/antidoping/anti-doping.svg';
import ListButtonNavigate from './components/ListButtonNavigate';
import { useNavigate } from 'react-router-dom';
import FilterDocuments from '../Documents/components/FilterDocuments';
import AntidopingAccordion from '../../components/Accordion/AntidopingAccordion';
import { useGetAntidoping } from '../../hooks/use-get-antidoping';
import { useSearch } from '../../hooks/useSearch';
import TextContent from '../../components/TextContent';

const mockData = [
  {
    title: 'ABCD',
    description: 'Autoridade Brasileira \n\n de Controle de Dopagem',
    navigate: '/abcd',
  },
  {
    title: 'STJD',
    description: 'Superior Tribunal \n\n de Justiça Desportiva',
    navigate: '/stjd',
  },
  {
    title: 'WADA',
    description: 'Agência Mundial \n\n Antidoping',
    navigate: '/wada',
  },
];

const AntidopingPage = () => {
  const navigate = useNavigate();
  const { data: antidopingDocs = [], isLoading: loading } = useGetAntidoping();
  const { setSearchTerm, filteredItems } = useSearch(antidopingDocs, [
    'year',
    'title',
    'year',
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <PageHeader title="Antidoping" icon={antidopingIcon} />
      <Container maxWidth="xl">
        <ListButtonNavigate
          data={mockData}
          onClick={(navigateLink) => navigate(navigateLink)}
        />
      </Container>
      <FilterDocuments setSearchTerm={setSearchTerm} />
      {filteredItems.length > 0 ? (
        <Box sx={{ my: 4 }}>
          {filteredItems.map((doc, index) => (
            <AntidopingAccordion
              key={index}
              data={doc}
              defaultExpanded={index === 0}
            />
          ))}
        </Box>
      ) : (
        <Stack alignItems={'center'} justifyContent={'center'} height={'50vh'}>
          <TextContent content="Documentos não encontrados." />
        </Stack>
      )}
    </Stack>
  );
};

export default AntidopingPage;
