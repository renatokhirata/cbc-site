import { Box, Container, Stack, Button, Typography } from '@mui/material';
import { useState, useCallback } from 'react';
import ColoredTitle from '../../../ColoredTitle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

type FilterType = 'fotos' | 'videos';

interface MediaControllerMobileProps {
  onSelectFilter?: (filter: string) => void;
  selectedModalities?: number;
  selectedEvents?: number;
  selectedDownloads?: number;
}

const MediaControllerMobile: React.FC<MediaControllerMobileProps> = ({
  onSelectFilter,
  selectedModalities = 1,
  selectedEvents = 0,
  selectedDownloads = 2,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('fotos');

  const handleFilterClick = useCallback(
    (value: FilterType) => {
      setActiveFilter(value);
      onSelectFilter?.(value);
    },
    [onSelectFilter],
  );

  const handleEventsDropdown = () => {
  };

  const handleModalitiesDropdown = () => {
  };

  const handleDownload = () => {
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Stack spacing={1}>
          <ColoredTitle
            title="Galeria de Fotos e Vídeos"
            color="typeText.secondary"
          />
          <Stack direction="row" width="100%" gap={1}>
            <Button
              onClick={() => handleFilterClick('fotos')}
              fullWidth
              sx={{
                backgroundColor: '#217EFD',
                color: 'white',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                py: 2,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#3A7BC8',
                },
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                border: activeFilter === 'fotos' ? '2px solid white' : 'none',
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border:
                    activeFilter === 'videos' ? '4px solid #217EFD' : 'none',
                  mr: 1,
                }}
              />
              Fotos
            </Button>
            <Button
              onClick={() => handleFilterClick('videos')}
              fullWidth
              sx={{
                backgroundColor: '#217EFD',
                color: 'white',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                py: 2,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#3A7BC8',
                },
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                border: activeFilter === 'videos' ? '2px solid white' : 'none',
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border:
                    activeFilter === 'videos' ? '4px solid #217EFD' : 'none',
                  mr: 1,
                }}
              />
              Vídeos
            </Button>
            <Button
              onClick={handleModalitiesDropdown}
              fullWidth
              sx={{
                backgroundColor: '#217EFD',
                color: 'white',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                py: 2,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography fontWeight={700}>
                {selectedModalities} Modalidade selecionada
              </Typography>
              <ArrowDropDownIcon />
            </Button>
          </Stack>
          <Stack direction="row" width="100%" gap={1}>
            <Button
              onClick={handleEventsDropdown}
              fullWidth
              sx={{
                backgroundColor: '#217EFD',
                color: 'white',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                py: 2,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography fontWeight={700}>
                {selectedEvents === 0 ? 'Todos' : selectedEvents} Eventos
                selecionados
              </Typography>
              <ArrowDropDownIcon />
            </Button>
            <Button
              onClick={handleDownload}
              fullWidth
              sx={{
                backgroundColor: '#217EFD',
                color: 'white',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                py: 2,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography fontWeight={700}>
                Baixar {selectedDownloads} arquivos selecionados
              </Typography>
              <FileDownloadIcon />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MediaControllerMobile;
