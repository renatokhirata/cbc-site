import { useState } from 'react';
import { List, Collapse, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { INavigationItem } from '../../../interfaces/Link/ILink';
import SubItem from './SubItem';
import Item from './Item';

interface DropdownLinkProps {
  item: INavigationItem;
  colorHover?: string;
  color: string;
  onNavigate: () => void;
}

const DropdownLink = ({
  item,
  colorHover = 'typeText.tertiary',
}: DropdownLinkProps) => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  const handleToggle = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLinkClick = () => {
    navigate(item.href || '');
  };

  return (
    <List disablePadding sx={{ width: '100%' }}>
      {item?.navigationItems?.map((link, index) => (
        <Stack key={index}>
          <Item
            item={link.label || ''}
            to={link.href || ''}
            hasSubLinks={!!link.subLinks?.length}
            isOpen={openItems[index]}
            colorHover={colorHover}
            onToggle={() => handleToggle(index)}
            onClick={handleLinkClick}
          />
          {link.subLinks && link.subLinks.length > 0 && (
            <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2, pt: 2 }}>
                {link.subLinks.map((subLink, subIndex) => (
                  <SubItem
                    key={subIndex}
                    item={subLink.label || ''}
                    to={subLink.href || ''}
                    colorHover={colorHover}
                    onClick={handleLinkClick}
                  />
                ))}
              </List>
            </Collapse>
          )}
        </Stack>
      ))}
    </List>
  );
};

export default DropdownLink;
