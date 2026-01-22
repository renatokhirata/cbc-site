import type GoogleMapReact from 'google-map-react';
export const DEFAULT_REGION = 'BR';
export const DEFAULT_LOCALE = 'pt-BR';

// Substitua esta chave pela sua chave da API do Google Maps
// Você pode obter uma em: https://console.cloud.google.com/google/maps-apis
export const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

// Informações de contato da CBC
export const CBC_INFO = {
  name: 'CBC',
  address: 'Av. Maringá, 627 - Sala 501',
  neighborhood: 'Jd. Vitória - Londrina / PR',
  cep: 'CEP: 86060-000',
  phone: 'Tel/Fax: +55 (43) 3327-3232',
};

// Coordenadas da sede da CBC em Londrina/PR
export const CBC_LONDRINA_LOCATION: GoogleMapReact.Coords = {
  lat: -23.3132259,
  lng: -51.1774977,
};
