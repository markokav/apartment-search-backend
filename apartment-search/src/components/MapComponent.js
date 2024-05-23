import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 46.056946,
  lng: 14.505751
};

const MapComponent = ({ properties }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBsEAyh-V2gg22__QHvcXg6p8VgWSxbiX8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {properties.map((property) => (
          <Marker key={property.id} position={{ lat: property.lat, lng: property.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
