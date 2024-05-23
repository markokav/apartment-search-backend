import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <Card>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {property.images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image} alt={`${property.title} - ${index}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {property.description}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">
            Price: ${property.price}
          </Typography>
          <Typography variant="body1">
            Bedrooms: {property.bedrooms}
          </Typography>
          <Typography variant="body1">
            Address: {property.location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
