// src/components/Results.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const Results = ({ results, searchPerformed }) => {
  return (
    <Box>
      {searchPerformed && results.length === 0 ? (
        <Typography variant="h6" component="p" style={{ marginTop: '16px' }}>
          No results found.
        </Typography>
      ) : (
        results.map((apartment) => (
          <Card key={apartment.id} style={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {apartment.title}
              </Typography>
              <Typography color="textSecondary">
                {apartment.description}
              </Typography>
              <Typography variant="body2" component="p">
                Price: {apartment.price} EUR
              </Typography>
              <Typography variant="body2" component="p">
                Bedrooms: {apartment.bedrooms}
              </Typography>
              <Typography variant="body2" component="p">
                Distance to Post Office: {apartment.distanceToPostOffice}
              </Typography>
              <Typography variant="body2" component="p">
                Distance to Kindergarten: {apartment.distanceToKindergarten}
              </Typography>
              <Typography variant="body2" component="p">
                Distance to School: {apartment.distanceToSchool}
              </Typography>
              <Typography variant="body2" component="p">
                Distance to Bus Station: {apartment.distanceToBusStation}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Results;
