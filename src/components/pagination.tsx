// components/Pagination.tsx

import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => (
  <div className="mt-4 flex items-center justify-between">
    <button type="submit" onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1} className="rounded border px-3 py-1 hover:bg-gray-100">
      <GrFormPrevious />
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        type="submit"
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        className={`rounded border px-3 py-1 ${page === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
      >
        {i + 1}
      </button>
    ))}
    <button type="submit" onClick={() => onPageChange(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="rounded border px-3 py-1 hover:bg-gray-100">
      <GrFormNext />
    </button>
  </div>
);

export default Pagination;
