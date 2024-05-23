import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Search from './components/Search';
import PropertyCard from './components/PropertyCard';
import MapComponent from './components/MapComponent';

function App() {
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Apartment Search
        </Typography>
        <Search setResults={setResults} setSearchPerformed={setSearchPerformed} />
        {searchPerformed && results.length === 0 && (
          <Typography variant="h6" color="textSecondary" mt={2}>
            No results found.
          </Typography>
        )}
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {results.map((property) => (
                <Grid item key={property.id} xs={12}>
                  <PropertyCard property={property} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <MapComponent properties={results} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
