import { Paper, Text, CloseButton, Box } from '@mantine/core';

interface InfoWindowProps {
  name: string;
  address: string;
  neighborhood: string;
  cep: string;
  phone: string;
  onClose?: () => void;
}

export function InfoWindow({
  name,
  address,
  neighborhood,
  cep,
  phone,
  onClose,
}: InfoWindowProps) {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne a propagação do evento
    onClose?.();
  };

  return (
    <Box
      style={{ position: 'relative' }}
      onClick={(e) => e.stopPropagation()} // Previne propagação de qualquer clique no InfoWindow
    >
      <Paper
        shadow="xl"
        p="lg"
        radius="md"
        style={{
          position: 'relative',
          minWidth: '300px',
          maxWidth: '350px',
          backgroundColor: 'white',
        }}
      >
        {onClose && (
          <CloseButton
            size="md"
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              color: '#666',
            }}
          />
        )}

        <Text fw={700} fz="md" mb={8}>
          {name}
        </Text>
        <Text fz="sm" c="dimmed" mb={4} style={{ lineHeight: 1.5 }}>
          {address}
        </Text>
        <Text fz="sm" c="dimmed" mb={4} style={{ lineHeight: 1.5 }}>
          {neighborhood}
        </Text>
        <Text fz="sm" c="dimmed" mb={4} style={{ lineHeight: 1.5 }}>
          {cep}
        </Text>
        <Text fz="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
          {phone}
        </Text>
      </Paper>

      {/* Seta apontando para baixo - conecta ao marcador */}
      <Box
        style={{
          position: 'absolute',
          bottom: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '14px solid transparent',
          borderRight: '14px solid transparent',
          borderTop: '14px solid white',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
        }}
      />
    </Box>
  );
}
