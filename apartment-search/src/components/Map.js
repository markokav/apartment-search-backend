// src/components/Map.js
import React from 'react';
import { Box } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ results }) => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 46.056946,
    lng: 14.505751
  };

  return (
    <Box>
      <LoadScript googleMapsApiKey="AIzaSyBsEAyh-V2gg22__QHvcXg6p8VgWSxbiX8">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {results.map((apartment) => (
            <Marker key={apartment.id} position={{ lat: apartment.lat, lng: apartment.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Map;
