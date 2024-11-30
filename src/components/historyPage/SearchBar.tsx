import React from 'react';
import { FaTimes } from 'react-icons/fa';

import type { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, isLoading, onSearchChange, onClearSearch }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search by name, phone, or wine"
        className="w-full rounded border p-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-3/5 lg:w-2/5"
        value={searchTerm}
        onChange={onSearchChange}
      />
      {searchTerm && (
        <button
          type="submit"
          onClick={onClearSearch}
          className="-ml-10 mt-6 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
      )}
      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div className="min-h-8 min-w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
