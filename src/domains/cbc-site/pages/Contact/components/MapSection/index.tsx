import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { type BoxProps, Box } from '@mantine/core';
import { type PropsWithChildren, useState } from 'react';
import { Icon, InfoWindow } from './src';
import { MarkerInfo } from './types';
import GoogleMapReact from 'google-map-react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  DEFAULT_REGION,
  DEFAULT_LOCALE,
  GOOGLE_MAPS_API_KEY,
  CBC_LONDRINA_LOCATION,
  CBC_INFO,
} from './constants';

export type BoxGoogleMapsMarkerInfo = MarkerInfo;

export type BoxGoogleMapsProps = PropsWithChildren<BoxProps> & {
  markers: MarkerInfo[];
  defaultZoom?: number;
  defaultCenter?: GoogleMapReact.Coords;
};

export function BoxGoogleMaps({
  markers,
  defaultZoom = 17,
  defaultCenter = CBC_LONDRINA_LOCATION,
  children,
  ...props
}: BoxGoogleMapsProps) {
  const classes = clsx(styles.wrapper, props.className);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <Box h={300} {...props} className={classes}>
      {children}
      <GoogleMapReact
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        center={markers[0]}
        bootstrapURLKeys={{
          key: GOOGLE_MAPS_API_KEY,
          region: DEFAULT_REGION,
          language: DEFAULT_LOCALE,
          libraries: 'places',
        }}
      >
        {markers
          .filter((marker) => marker.show)
          .map((marker, key) => (
            <Box
              className={styles.markerIcon}
              key={`box-google-maps-maker-${key.toString()}`}
              {...marker}
              data-testid="box-google-maps-marker"
              onClick={() => setShowInfo(!showInfo)}
            >
              {showInfo && (
                <Box className={styles.infoOverlay}>
                  <InfoWindow
                    name={CBC_INFO.name}
                    address={CBC_INFO.address}
                    neighborhood={CBC_INFO.neighborhood}
                    cep={CBC_INFO.cep}
                    phone={CBC_INFO.phone}
                    onClose={() => setShowInfo(false)}
                  />
                </Box>
              )}
              <Icon className={styles.marker} icon={faLocationDot} />
            </Box>
          ))}
      </GoogleMapReact>
    </Box>
  );
}
