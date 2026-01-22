import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import searchIcon from '../../../../../../assets/icons/search.svg';

interface SearchNewsProps {
  onSearch: (searchTerm: string) => void;
}

const SearchNews: React.FC<SearchNewsProps> = ({ onSearch }) => {
  return (
    <TextField
      placeholder="Busca"
      size="small"
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton size="small" aria-label="buscar">
              <Box
                component="img"
                src={searchIcon}
                alt="Buscar"
                sx={{ width: { xs: 20, sm: 28 }, height: { xs: 20, sm: 28 } }}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        bgcolor: '#125C86',
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

export default SearchNews;
