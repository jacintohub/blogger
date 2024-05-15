import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="text-center my-8">
      <input
        type="search"
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Pesquisar no blog..."
        className="px-4 py-2 border-2 border-gray-300 rounded-full w-full md:w-1/2 focus:outline-none focus:border-blue-500 transition ease-in-out duration-300"
      />
    </div>
  );
};

export default SearchBar;
