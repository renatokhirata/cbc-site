/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Button, Typography, Stack } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations = [
  {
    id: 1,
    name: 'Rodovia Caminho do Mar',
    description:
      'Estrada Velha de Santos - Local seguro para ciclismo com paisagem agradável',
    coordinates: [-23.8167, -46.5167] as [number, number], // São Bernardo do Campo
  },
  {
    id: 2,
    name: 'Ciclovia do Rio Pinheiros',
    description: 'Ciclovia ao longo do Rio Pinheiros em São Paulo',
    coordinates: [-23.5505, -46.6333] as [number, number], // São Paulo - Rio Pinheiros
  },
];

const InteractiveMap: React.FC = () => {
  const center: [number, number] = [-23.6836, -46.5751];

  const openGoogleMaps = (coordinates: [number, number], name: string) => {
    const [lat, lng] = coordinates;
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(name)}/@${lat},${lng},15z`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <Box height="400px" width="100%" borderRadius={2} overflow="hidden">
      <MapContainer
        center={center}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker key={location.id} position={location.coordinates}>
            <Popup>
              <Stack spacing={1} alignItems="center" textAlign="center">
                <Typography variant="subtitle1" fontWeight="bold">
                  {location.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize="14px"
                >
                  {location.description}
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() =>
                    openGoogleMaps(location.coordinates, location.name)
                  }
                >
                  Ver no Google Maps
                </Button>
              </Stack>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default InteractiveMap;
