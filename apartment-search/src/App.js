import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import PropertyCard from './components/PropertyCard';
import MapComponent from './components/MapComponent';

function App() {
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="LeasePro Logo" className="logo" />
        <h1>LeasePro</h1>
      </header>
      <div className="main-content">
        <div className="search-results">
          <Search setResults={setResults} setSearchPerformed={setSearchPerformed} />
          {searchPerformed && results.length === 0 && (
            <div>No results found.</div>
          )}
          <div className="property-card-container">
            {results.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
        <div className="map-container">
          <MapComponent properties={results} />
        </div>
      </div>
    </div>
  );
}

export default App;
