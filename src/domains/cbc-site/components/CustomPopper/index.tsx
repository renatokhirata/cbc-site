import { Popper, ClickAwayListener, Paper, MenuItem } from '@mui/material';

interface CustomPopperProps {
  openPopperIndex: number | null;
  anchorElPopper: HTMLElement | null;
  index: number;
  handlePopperClose: () => void;
  opt: { item: string; subItems?: string[] };
  internalSelectedItem: string | null;
  handleSubItemClick: (item: string, subItem: string) => void;
}

const CustomPopper = ({
  openPopperIndex,
  anchorElPopper,
  index,
  handlePopperClose,
  opt,
  internalSelectedItem,
  handleSubItemClick,
}: CustomPopperProps) => {
  return (
    <Popper
      open={openPopperIndex === index}
      anchorEl={openPopperIndex === index ? anchorElPopper : null}
      placement="bottom-start"
      disablePortal={true}
      modifiers={[
        { name: 'flip', enabled: false },
        { name: 'preventOverflow', enabled: false },
      ]}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'customBackground.primary',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          marginTop: 1,
          minWidth: '160px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        zIndex: 1200,
      }}
    >
      <ClickAwayListener onClickAway={handlePopperClose}>
        <Paper elevation={0}>
          {opt.subItems?.map((subItem, subIndex) => (
            <MenuItem
              key={subIndex}
              onClick={() => handleSubItemClick(opt.item, subItem)}
              sx={{
                color:
                  internalSelectedItem === subItem
                    ? 'typeText.tertiary'
                    : 'typeText.default',
                backgroundColor:
                  internalSelectedItem === subItem
                    ? 'rgba(29, 13, 255, 0.1)'
                    : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(29, 13, 255, 0.1)',
                },
              }}
            >
              {subItem}
            </MenuItem>
          ))}
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default CustomPopper;
