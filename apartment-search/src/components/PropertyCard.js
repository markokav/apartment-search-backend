import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: {property.price} EUR</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Distance to Post Office: {property.distanceToPostOffice}</p>
      <p>Distance to Kindergarten: {property.distanceToKindergarten}</p>
      <p>Distance to School: {property.distanceToSchool}</p>
      <p>Distance to Bus Station: {property.distanceToBusStation}</p>
    </div>
  );
};

export default PropertyCard;
