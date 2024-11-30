import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import type { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  totalPages,
  isLoading,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      {/* Total Clients Text */}
      <div className="text-sm text-gray-700">
        {totalPages * pageSize}
        {' '}
        Clientes
      </div>

      {/* Pagination Controls */}
      <div className="flex space-x-2">
        {/* Previous Button */}
        <button
          type="button"
          className={`rounded border px-3 py-1 ${
            page === 1 ? 'cursor-not-allowed bg-gray-100' : 'hover:bg-gray-100'
          }`}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1 || isLoading}
        >
          <GrFormPrevious />
        </button>

        {/* Page Number Text (Below md) */}
        <span className="text-sm md:hidden">
          Page
          {' '}
          {page}
        </span>

        {/* Page Number Buttons (md and above) */}
        <div className="hidden space-x-2 md:flex">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
            <button
              type="button"
              key={i + 1}
              className={`rounded border px-3 py-1 ${
                page === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => onPageChange(i + 1)}
              disabled={isLoading}
            >
              {i + 1}
            </button>
          ))}
          {totalPages > 5 && <span>...</span>}
          {totalPages > 5 && (
            <button
              type="button"
              className={`rounded border px-3 py-1 ${
                page === totalPages ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => onPageChange(totalPages)}
              disabled={isLoading}
            >
              {totalPages}
            </button>
          )}
        </div>

        {/* Next Button */}
        <button
          type="button"
          className={`rounded border px-3 py-1 ${
            page === totalPages ? 'cursor-not-allowed bg-gray-100' : 'hover:bg-gray-100'
          }`}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages || isLoading}
        >
          <GrFormNext />
        </button>
      </div>

      {/* Page Size Selector (md and above) */}
      <div className="hidden text-sm md:block">
        <select
          className="rounded border p-1 hover:bg-gray-50"
          value={pageSize}
          onChange={e => onPageSizeChange(Number(e.target.value))}
          disabled={isLoading}
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
