import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import searchIcon from '../../../../assets/icons/search.svg';

interface SearchProps {
  placeHolder?: string;
  bgColor?: string;
  withIcon?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const Search = ({
  placeHolder,
  bgColor,
  withIcon = false,
  value,
  onChange,
}: SearchProps) => {
  return (
    <TextField
      placeholder={placeHolder || 'Busca'}
      size="small"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      InputProps={
        withIcon
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" aria-label="buscar">
                    <Box
                      component="img"
                      src={searchIcon}
                      alt="Buscar"
                      sx={{
                        width: { xs: 20, sm: 28 },
                        height: { xs: 20, sm: 28 },
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
      sx={{
        bgcolor: bgColor || '#125C86',
        color: '#fff',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiOutlinedInput-input': {
          color: '#fff',
        },

        '& .MuiOutlinedInput-input::placeholder': {
          color: '#fff',
          opacity: 0.5,
          fontSize: { xs: '1rem', sm: '1.5rem' },
        },
        width: { xs: 109, sm: '100%' },
        maxWidth: 250,
        borderRadius: 2,
      }}
    />
  );
};

export default Search;
