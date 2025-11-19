import React, { useState } from 'react';
import './Searchbar.css';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="City search input"
      /> 
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;