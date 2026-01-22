import { Container, Stack } from '@mui/material';
import InfoModalHeader from './Header';
import { InfoResume } from '../../../interfaces/Info/Info';
import InfoItemsList from '../../Infos/components/InfoItemsList';
import DateFilter from '../../Filter/Date';
import { useSearch } from '../../../hooks/useSearch';

interface InfoModalContentProps {
  infoList: InfoResume[];
  title?: string;
  icon?: string;
  slug?: string;
}

const InfoModalContent: React.FC<InfoModalContentProps> = ({
  title,
  icon,
  slug,
  infoList,
}) => {
  const { setSearchTerm, filteredItems } = useSearch<InfoResume>(infoList, [
    'title',
    'subtitle',
    'content',
    'documents',
  ] as unknown as (keyof InfoResume)[]);
  return (
    <Stack
      spacing={0}
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        flex: 1,
        minHeight: 0,
      }}
    >
      <Stack
        sx={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          flex: 1,
          minHeight: 0,
        }}
      >
        <InfoModalHeader title={title} icon={icon} slug={slug} />

        {title === 'Resultados' && (
          <DateFilter setSearchTerm={(term) => setSearchTerm(term)} />
        )}

        <Container maxWidth="lg" disableGutters sx={{ py: 10 }}>
          <InfoItemsList infoList={filteredItems} />
        </Container>
      </Stack>
    </Stack>
  );
};

export default InfoModalContent;
