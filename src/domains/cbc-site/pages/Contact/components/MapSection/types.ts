import type GoogleMapReact from 'google-map-react';

export interface MarkerInfo extends GoogleMapReact.Coords {
  show: boolean;
}
