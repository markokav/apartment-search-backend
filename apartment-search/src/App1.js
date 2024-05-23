// src/App.js
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Map from './components/Map';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-body">
        <Search setResults={setResults} />
        <Results results={results} />
        <Map results={results} />
      </div>
    </div>
  );
}

export default App;
