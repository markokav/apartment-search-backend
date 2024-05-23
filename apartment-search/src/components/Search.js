import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
import AutocompleteSearch from './AutocompleteSearch';

const Search = ({ setResults, setSearchPerformed }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      setSearchPerformed(true);
      const response = await axios.get('http://localhost:5000/api/apartments', {
        params: { query }
      });
      console.log('API Response:', response.data); // Debugging line
      if (Array.isArray(response.data)) {
        setResults(response.data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    }
  };

  return (
    <div className="search-bar">
      <AutocompleteSearch setQuery={setQuery} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
