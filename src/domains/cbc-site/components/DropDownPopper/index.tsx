import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import TextContent from '../TextContent';
import CustomPopper from '../CustomPopper';
import TriangularArrow from '../TriangularArrow';

const DropDownPopper = ({
  options = [],
  onSelectItem,
  selectedItem,
  isDark = false,
}: {
  options?: Array<{ item: string; subItems?: string[] }>;
  onSelectItem: (item: string, subItem?: string) => void;
  selectedItem: string | null;
  isDark?: boolean;
}) => {
  const [internalSelectedItem, setInternalSelectedItem] = useState<
    string | null
  >(null);

  const [openPopperIndex, setOpenPopperIndex] = useState<number | null>(null);
  const [anchorElPopper, setAnchorElPopper] = useState<HTMLElement | null>(
    null,
  );

  const handlePopperClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setAnchorElPopper(event.currentTarget);
    setOpenPopperIndex(index);
  };

  const handlePopperClose = () => {
    setAnchorElPopper(null);
    setOpenPopperIndex(null);
  };

  const handleSubItemClick = (item: string, subItem: string) => {
    onSelectItem(item, subItem);
    setInternalSelectedItem(subItem);
    handlePopperClose();
  };

  useEffect(() => {
    setInternalSelectedItem(selectedItem);
  }, [selectedItem]);

  return (
    <>
      {(options ?? []).map((opt, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack
            onClick={(event) => handlePopperClick(event, index)}
            direction={'row'}
            alignItems={'center'}
            spacing={selectedItem ? 1.5 : 1}
            sx={{
              p: 0,
              color: isDark ? 'typeText.default' : 'typeText.primary',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <TextContent
              display="inline"
              content={opt.item}
              color={isDark ? 'typeText.default' : 'typeText.primary'}
              fontWeight={700}
              fontSize={{ xs: '1rem', sm: '1.125rem' }}
              lineHeight={1}
              marginBottom={0}
            />
            <TriangularArrow open={openPopperIndex === index} />
          </Stack>
          <CustomPopper
            openPopperIndex={openPopperIndex}
            anchorElPopper={anchorElPopper}
            index={index}
            handlePopperClose={handlePopperClose}
            opt={opt}
            internalSelectedItem={internalSelectedItem}
            handleSubItemClick={handleSubItemClick}
          />
        </Box>
      ))}
    </>
  );
};

export default DropDownPopper;
