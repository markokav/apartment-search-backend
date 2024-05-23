const express = require('express');
const cors = require('cors');
const axios = require('axios');
const geolib = require('geolib');
const apartments = require('./apartment-search/api/apartments'); // Adjust the path as necessary
require('dotenv').config(); // Add this line to load .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const getCoordinates = async (query) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: query,
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    console.log('Geocoding API Response:', response.data);

    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return null;
  }
};

app.get('/api/apartments', async (req, res) => {
  const query = req.query.query || '';
  const radius = req.query.radius || 50000; // Default radius is 50km

  // Get coordinates for the city or zip code
  const coordinates = await getCoordinates(query);
  if (!coordinates) {
    return res.json([]); // Return empty if no coordinates found
  }

  const { lat, lng } = coordinates;

  console.log('Coordinates:', lat, lng);

  // Filter apartments based on the distance from the location
  const filteredApartments = apartments.filter(apartment => {
    return geolib.isPointWithinRadius(
      { latitude: apartment.lat, longitude: apartment.lng },
      { latitude: lat, longitude: lng },
      radius
    );
  });

  res.json(filteredApartments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
