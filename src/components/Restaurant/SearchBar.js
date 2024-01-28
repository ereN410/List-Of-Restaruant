import React, { useState } from 'react';
import './SearchBar.css';
import SearchBar from './SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Search Example</h1>
      <SearchBar value={searchQuery} onChange={handleSearchInputChange} />
    </div>
  );
}

export default App;
