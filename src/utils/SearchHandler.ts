// SearchHandler.ts

import { debounce } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

export const useSearchHandler = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearchTerm(value);
      }, 500),
    [],
  );

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) {
      debouncedSetSearch.cancel();
      setDebouncedSearchTerm('');
    } else {
      debouncedSetSearch(value);
    }
  }, [debouncedSetSearch]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
    debouncedSetSearch.cancel();
    setDebouncedSearchTerm('');
  }, [debouncedSetSearch]);

  return {
    searchTerm,
    debouncedSearchTerm,
    handleSearchChange,
    handleClearSearch,
  };
};
