import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import TextContent from '../../../../components/TextContent';

type NewsPaginationProps = {
  /** Índice 1-based da página destacada visualmente */
  currentPage?: number;
  /** Quantidade total de páginas para exibir na faixa */
  totalPages?: number;
  /** Limite de páginas visíveis na faixa (útil para prototipagem) */
  visiblePages?: number;
};

const NewsPagination: React.FC<NewsPaginationProps> = ({
  currentPage = 1,
  totalPages = 8,
  visiblePages,
}) => {
  const isMobile = useBreakpoint('sm');
  const [selectedPage, setSelectedPage] = useState(() =>
    Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1)),
  );

  useEffect(() => {
    setSelectedPage(
      Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1)),
    );
  }, [currentPage, totalPages]);

  const handleSelect = useCallback((page: number) => {
    setSelectedPage(page);
  }, []);

  const handlePrevious = useCallback(() => {
    setSelectedPage((prev) => Math.max(1, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedPage((prev) => Math.min(totalPages, prev + 1));
  }, [totalPages]);

  const maxVisible = visiblePages ?? (isMobile ? 3 : totalPages);
  const totalVisible = Math.min(maxVisible, totalPages);

  const pages = useMemo(() => {
    if (totalPages === 0 || totalVisible === 0) {
      return [] as number[];
    }

    if (totalVisible >= totalPages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const half = Math.floor(totalVisible / 2);
    let start = selectedPage - half;
    let end = start + totalVisible - 1;

    if (start < 1) {
      start = 1;
      end = totalVisible;
    }

    if (end > totalPages) {
      end = totalPages;
      start = totalPages - totalVisible + 1;
    }

    return Array.from({ length: totalVisible }, (_, index) => start + index);
  }, [selectedPage, totalPages, totalVisible]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={{ xs: 1.5, md: 2 }}
      mt={{ xs: 4, md: 6 }}
    >
      <TextContent
        content={'Anterior'}
        fontWeight={400}
        fontSize={'1.125rem'}
        color="typeText.secondary"
        sx={{ userSelect: 'none' }}
        onClick={handlePrevious}
      />

      <Box display="flex" gap={{ xs: 1, sm: 1.5 }}>
        {pages.map((page) => {
          const isActive = page === selectedPage;
          return (
            <Box
              key={page}
              component="span"
              width={{ xs: 45, md: 45 }}
              height={{ xs: 46, md: 46 }}
              borderRadius={1.5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight={600}
              fontSize={{ xs: '0.875rem', md: '1rem' }}
              onClick={() => handleSelect(page)}
              sx={{
                color: 'button.primary',
                backgroundColor: isActive
                  ? 'customBackground.blue'
                  : 'typeText.secondary',
                cursor: 'default',
              }}
            >
              {page}
            </Box>
          );
        })}
      </Box>

      <TextContent
        content={'Próxima'}
        fontWeight={400}
        fontSize={'1.125rem'}
        color="typeText.secondary"
        sx={{ userSelect: 'none' }}
        onClick={handleNext}
      />
    </Box>
  );
};

export default NewsPagination;
