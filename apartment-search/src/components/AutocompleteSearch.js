import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import locations from '../locations'; // Import locations from locations.js

const Root = styled('div')({
  position: 'relative',
});

const Suggestions = styled('div')({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  zIndex: 1,
});

const SuggestionItem = styled(ListItem)({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const Highlight = styled('span')({
  fontWeight: 'bold',
});

const AutocompleteSearch = ({ setQuery }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchSuggestions = (query) => {
    return locations.filter(item => {
      const fullName = `${item.city}, ${item.zip}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);
    if (query.length > 2) {
      const suggestions = fetchSuggestions(query);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const fullName = `${suggestion.city}, ${suggestion.zip}`;
    setInputValue(fullName);
    setSuggestions([]);
    setQuery(fullName);
  };

  const highlightText = (text, query) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index !== -1) {
      return (
        <span>
          {text.substring(0, index)}
          <Highlight>{text.substring(index, index + query.length)}</Highlight>
          {text.substring(index + query.length)}
        </span>
      );
    }
    return text;
  };

  return (
    <Root>
      <TextField
        label="Search location"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <Suggestions>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <ListItemText primary={highlightText(`${suggestion.city}, ${suggestion.zip}`, inputValue)} />
            </SuggestionItem>
          ))}
        </Suggestions>
      )}
    </Root>
  );
};

export default AutocompleteSearch;
