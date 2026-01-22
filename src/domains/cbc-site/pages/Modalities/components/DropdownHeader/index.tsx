import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { linkService } from '../../../../services';
import ColoredTitle from '../../../../components/ColoredTitle';
import DropDownPopper from '../../../../components/DropDownPopper';
import { INavigation } from '../../../../interfaces/Link/ILink';

const DropdownHeader = ({
  slug,
  isDark,
}: {
  slug: string;
  isDark?: boolean;
}) => {
  const { pathname } = useLocation();
  const [item, setItem] = useState<INavigation>();
  const [selected, setSelected] = useState<string>('');
  const navigationItems = item?.navigationItems || [];
  const isComunicationPage = pathname.includes('/comunicacao');
  const navigate = useNavigate();

  const labelToHref = (label: string) =>
    navigationItems.find((navItem) => navItem.label === label)?.href || '';

  const slugToLabel = (slug: string) =>
    navigationItems.find((navItem) => navItem.href?.includes(slug))?.label ||
    '';

  const handleSubitemSelect = (_item: string, subItem?: string) => {
    if (!subItem) return;
    setSelected(subItem);

    if (isComunicationPage) {
      return;
    }

    navigate(`${labelToHref(subItem)}`);
  };

  useEffect(() => {
    const fetchSubItems = async () => {
      try {
        const response = await linkService.getMenuLinks('secondary');
        setItem(response);
      } catch (error) {
        console.error('Error fetching sub-items:', error);
      }
    };

    fetchSubItems();
  }, []);

  useEffect(() => {
    if (navigationItems.length > 0 && slug.length > 0) {
      const label = slugToLabel(slug);
      setSelected(label || '');
    }
  }, [navigationItems, slug]);

  return (
    <Stack
      direction={'row'}
      spacing={{ xs: 0.25, md: 0.5 }}
      justifyContent={isComunicationPage ? 'flex-start' : 'center'}
      sx={{
        background: isComunicationPage ? 'transparent' : '#23294A',
        width: '100%',
        py: 1.5,
        columnGap: { xs: 1, md: 1.5 },
      }}
    >
      <ColoredTitle
        sx={{
          color: 'typeText.primary',
          fontWeight: 400,
        }}
        fontSize={'1.2rem'}
        title={'Modalidade'}
      />
      <DropDownPopper
        options={[
          {
            item: selected,
            subItems:
              item?.navigationItems.map((navItem) => navItem.label || '') || [],
          },
        ]}
        onSelectItem={handleSubitemSelect}
        selectedItem={selected || ''}
        isDark={isDark || false}
      />
    </Stack>
  );
};

export default DropdownHeader;
