import { Box, Container, Stack } from '@mui/material';
import DropDownPopper from '../../../../components/DropDownPopper';
import SearchNews from './SearchNews';
import { useState } from 'react';

interface NewsHeaderProps {
  onSelectFilter: (filter: string) => void;
  onSearch: (searchTerm: string) => void;
}

const NewsSubHeader: React.FC<NewsHeaderProps> = ({
  onSelectFilter,
  onSearch,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const handleDropdownSelect = (_: string, subItem: string | undefined) => {
    if (!subItem) return;
    if (subItem === selectedFilter) {
      setSelectedFilter('');
      onSelectFilter?.('');
      return;
    }
    onSelectFilter?.(subItem);
    setSelectedFilter(subItem);
  };

  return (
    <Box width={'100%'} bgcolor={'button.default'}>
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          direction={'row'}
          py={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <DropDownPopper
            options={[
              {
                item: selectedFilter || 'Modalidades',
                subItems: [
                  'BMX Freestyle',
                  'BMX Racing',
                  'Estrada',
                  'MTB',
                  'Pista',
                  'Paraciclismo',
                  'Ciclismo para todos',
                  'eSports',
                ],
              },
            ]}
            onSelectItem={handleDropdownSelect}
            selectedItem={selectedFilter}
          />
          <SearchNews onSearch={onSearch} />
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsSubHeader;
