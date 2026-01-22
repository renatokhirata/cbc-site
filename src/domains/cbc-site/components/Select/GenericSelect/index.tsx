import {
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Box,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  disableScrollLock: true,
};

interface GenericSelectProps {
  itemType: string;
  label: string;
  items: string[];
  selectedItem?: string;
  onSelect: (selected: string) => void;
}

const GenericSelect: React.FC<GenericSelectProps> = ({
  itemType,
  label,
  items,
  selectedItem = '',
  onSelect,
  ...props
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    onSelect(value);
  };

  return (
    <FormControl sx={{ m: 1, width: '100%' }} {...props}>
      <Select
        labelId="generic-select-label"
        id="generic-select"
        value={selectedItem || `Selecione um ${itemType || 'item'}`}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
        renderValue={(value) => (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box component={'span'}>{value}</Box>
            <KeyboardArrowDownIcon sx={{ fontSize: '1.5rem' }} />
          </Stack>
        )}
        sx={{
          backgroundColor: '#2578A8',
          color: '#fff',
          fontWeight: 700,
          borderRadius: 3,
          fontSize: '1.5rem',
          height: 60,
          '.MuiSelect-icon': {
            display: 'none',
          },
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      >
        <MenuItem
          value={`Selecione um ${itemType || 'item'}`}
          sx={{ fontWeight: 700, opacity: 0.7 }}
        >
          {`Selecione um ${itemType || 'item'}`}
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item} value={item} sx={{ fontWeight: 400 }}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
