import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar provincias..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
