import { Box, RadioGroup, Container, Stack } from '@mui/material';
import { useState } from 'react';
import Checkbox from '../../../Checkbox';
import MenuItems from '../../../DropDownPopper';
import { modalitiesNavigation } from '../../../../../../shared/constants/navigation';
import useBreakpoint from '../../../../hooks/useBreakpoint';

interface MediaControllerDesktopProps {
  onSelectFilter?: (filter: string) => void;
  isModalityPage?: boolean;
  isGalleryPage?: boolean;
}

const MediaControllerDesktop: React.FC<MediaControllerDesktopProps> = ({
  onSelectFilter,
  isModalityPage = false,
  isGalleryPage = false,
}) => {
  const isMobile = useBreakpoint('md');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<
    string | null
  >(null);

  const modalitiesLabels = modalitiesNavigation.navigationItems
    .map((item) => item.label)
    .filter((label): label is string => label !== undefined);

  const handleCheckboxClick = (value: string) => {
    if (value === selectedOption) {
      setSelectedOption('');
      setSelectedDropdownItem(null);
      onSelectFilter?.('');
    } else {
      setSelectedOption(value);
      setSelectedDropdownItem(null);
      onSelectFilter?.(value);
    }
  };

  const handleDropdownSelect = (_item: string, subItem: string | undefined) => {
    if (subItem) {
      setSelectedOption('');
      setSelectedDropdownItem(subItem);
      onSelectFilter?.(subItem);
    }
  };

  return (
    <Box sx={{ backgroundColor: 'button.default' }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Stack
          justifyContent={'center'}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          px={{ xs: 2, md: 0 }}
        >
          <RadioGroup value={selectedOption}>
            <Stack
              direction={'row'}
              spacing={4}
              height={'100%'}
              sx={{ overflow: 'hidden' }}
            >
              <Checkbox
                value="Fotos"
                label="Fotos"
                selected={selectedOption === 'Fotos'}
                onClick={handleCheckboxClick}
              />
              <Checkbox
                value="Vídeos"
                label="Vídeos"
                selected={selectedOption === 'Vídeos'}
                onClick={handleCheckboxClick}
              />
              {!isMobile &&
                !isGalleryPage &&
                (isModalityPage ? (
                  <MenuItems
                    options={[
                      {
                        item:
                          selectedDropdownItem || 'Selecione uma modalidade',
                        subItems: modalitiesLabels,
                      },
                    ]}
                    selectedItem={selectedDropdownItem}
                    onSelectItem={handleDropdownSelect}
                  />
                ) : (
                  <MenuItems
                    options={[
                      {
                        item: 'Selecione um Evento',
                        subItems: ['Tipo A', 'Tipo B', 'Tipo C'],
                      },
                    ]}
                    selectedItem={selectedDropdownItem}
                    onSelectItem={handleDropdownSelect}
                  />
                ))}
            </Stack>
          </RadioGroup>
        </Stack>
      </Container>
    </Box>
  );
};

export default MediaControllerDesktop;
