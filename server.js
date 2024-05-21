const express = require('express');
const cors = require('cors');
const apartments = require('./sampleData');

const app = express();
app.use(cors());

app.get('/api/apartments', (req, res) => {
  const { query } = req;
  let results = apartments;

  // Implement simple filtering based on query parameters (e.g., price range, bedrooms)
  if (query.price) {
    results = results.filter(apartment => apartment.price <= query.price);
  }
  if (query.bedrooms) {
    results = results.filter(apartment => apartment.bedrooms >= query.bedrooms);
  }

  res.json(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
