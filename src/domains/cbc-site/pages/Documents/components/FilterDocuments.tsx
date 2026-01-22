import { Box, Container, Stack } from '@mui/material';
import calendarIcon from '../../../../../assets/icons/calendar.svg';
import Search from '../../../components/Search';
import TextContent from '../../../components/TextContent';

interface FilterDocumentsProps {
  setSearchTerm?: (term: string) => void;
}

const FilterDocuments: React.FC<FilterDocumentsProps> = ({ setSearchTerm }) => {
  return (
    <Box width="100%" bgcolor="rgba(33, 118, 174, 1)" py={2}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          flexWrap="wrap"
          justifyContent="space-between"
          width="100%"
        >
          <Box
            display={{ xs: 'none', md: 'flex' }}
            alignItems="center"
            gap={1}
            mr={2}
          >
            <Box component="img" src={calendarIcon} alt="Calendar" width={30} />
            <span style={{ color: '#fff', fontSize: 18, marginRight: 4 }}>
              De
            </span>
            <Box
              component="input"
              type="date"
              sx={{
                padding: '6px 12px',
                borderRadius: 2,
                border: '1px solid #fff',
                fontSize: 16,
                background: 'transparent',
                color: '#fff',
                minWidth: 120,
                outline: 'none',
                fontWeight: 'bold',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#5CB5AF')}
              onBlur={(e) => (e.target.style.borderColor = '#fff')}
            />
            <span
              style={{
                color: '#fff',
                fontSize: 18,
                marginLeft: 8,
                marginRight: 4,
              }}
            >
              até
            </span>
            <Box
              component="input"
              type="date"
              sx={{
                padding: '6px 12px',
                borderRadius: 2,
                border: '1px solid #fff',
                fontSize: 16,
                background: 'transparent',
                color: '#fff',
                minWidth: 120,
                outline: 'none',
                fontWeight: 'bold',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#5CB5AF')}
              onBlur={(e) => (e.target.style.borderColor = '#fff')}
            />
          </Box>
          <TextContent
            content={'Documentos Oficiais'}
            color="#fff"
            sx={{ display: { xs: 'block', md: 'none' } }}
          />
          <Search onChange={setSearchTerm} />
        </Stack>
      </Container>
    </Box>
  );
};

export default FilterDocuments;
