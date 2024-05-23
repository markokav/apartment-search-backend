const handleSearch = async () => {
    try {
      setSearchPerformed(true);
      console.log('Searching for:', { price, bedrooms, location });
      const response = await axios.get('/api/apartments', {
        params: { price, bedrooms, location }
      });
      console.log('Response data:', response.data);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  