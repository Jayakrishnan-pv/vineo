'use client';

import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show before and after current page
    const pages: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 // First page
        || i === totalPages // Last page
        || (i >= currentPage - delta && i <= currentPage + delta) // Pages around current
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return pages;
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-sm text-gray-700">
        {totalItems}
        {' '}
        Clientes
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Previous
        </button>

        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...'
              ? (
                  <span className="px-2">...</span>
                )
              : (
                  <button
                    className={`rounded border px-3 py-1 ${
                      currentPage === page ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                  >
                    {page}
                  </button>
                )}
          </React.Fragment>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="text-sm">
        <select
          className="rounded border p-1"
          value={pageSize}
          onChange={onPageSizeChange}
        >
          <option value={10}>10 / page</option>
          <option value={20}>20 / page</option>
          <option value={50}>50 / page</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
