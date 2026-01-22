import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationDisplay = () => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs separator=">" sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate('/')}
        sx={{ cursor: 'pointer' }}
      >
        Início
      </Link>
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate('/modalidades')}
        sx={{ cursor: 'pointer' }}
      >
        Modalidades
      </Link>
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate('/modalidades/estrada')}
        sx={{ cursor: 'pointer' }}
      >
        Estrada
      </Link>
      <Typography color="text.primary">Locais de Prática</Typography>
    </Breadcrumbs>
  );
};

export default NavigationDisplay;
