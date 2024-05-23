import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '100%',
  width: '100%'
};

const defaultCenter = {
  lat: 46.056946, // Default center latitude for Ljubljana, Slovenia
  lng: 14.505751 // Default center longitude for Ljubljana, Slovenia
};

const MapComponent = ({ properties }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBsEAyh-V2gg22__QHvcXg6p8VgWSxbiX8">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={10}>
        {properties.map((property, index) => (
          <Marker 
            key={index} 
            position={{ lat: property.lat, lng: property.lng }} 
            title={property.title} 
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
