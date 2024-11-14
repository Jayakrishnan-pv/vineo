// PaginationHandler.ts

import { useState } from 'react';

export const usePaginationHandler = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return {
    page,
    pageSize,
    setPage,
    setPageSize,
  };
};
