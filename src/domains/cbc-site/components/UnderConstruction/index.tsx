import { Box, Typography, Stack, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ColoredTitle from '../ColoredTitle';
import MainButton from '../Buttons/MainButton';

const UnderConstruction = ({
  title = 'Página em Construção',
}: {
  title?: string;
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'customBackground.primary',
            p: 6,
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: 600,
          }}
        >
          <Box
            sx={{
              fontSize: '4rem',
              mb: 3,
              filter: 'grayscale(0.2)',
            }}
          >
            🚧
          </Box>

          <ColoredTitle title={title} color="typeText.tertiary" />

          <Typography
            variant="body1"
            sx={{
              color: 'typeText.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              mb: 4,
              mt: 3,
            }}
          >
            Esta página está sendo desenvolvida e estará disponível em breve.
            Nossa equipe está trabalhando para trazer o melhor conteúdo para
            você.
          </Typography>

          <Box
            sx={{
              bgcolor: 'rgba(33, 126, 253, 0.05)',
              p: 3,
              borderRadius: 2,
              mb: 4,
              border: '1px solid rgba(33, 126, 253, 0.1)',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'typeText.secondary',
                fontSize: '0.95rem',
                fontStyle: 'italic',
              }}
            >
              💡 <strong>Enquanto isso:</strong> você pode explorar outras
              seções do nosso portal ou entrar em contato conosco por meio dos
              nossos <strong>contatos</strong>.
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 4 }}
            justifyContent={'center'}
          >
            <MainButton label="← Voltar" onClick={handleGoBack} />

            <MainButton label="🏠 Página Inicial" onClick={handleGoHome} />
          </Stack>

          <Typography
            variant="caption"
            sx={{
              color: 'typeText.tertiary',
              mt: 4,
              display: 'block',
              opacity: 0.7,
            }}
          >
            Confederação Brasileira de Ciclismo - CBC
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default UnderConstruction;
