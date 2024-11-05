// components/SearchBar.tsx

import React, { useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';

type SearchBarProps = {
  searchTerm: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onClear: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, isLoading, onChange, onClear }) => {
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search by name, phone, or wine"
        className="w-1/4 rounded border p-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button type="submit" onClick={onClear} className="-ml-10 mt-6 text-gray-500 hover:text-gray-700">
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
