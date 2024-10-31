'use client';

import React, { useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { FaCheck, FaEdit, FaEye, FaTimes, FaTruck } from 'react-icons/fa';

import { useGetBoxHistoryAdminQuery } from '@/app/redux/apiSlice';

const HistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: boxHistoryData,
    isLoading,
    error,
  } = useGetBoxHistoryAdminQuery({
    searchString: searchTerm,
    page: currentPage,
    pageSize,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  console.log(error);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-red-500">Error loading data</div>
      </div>
    );
  }

  const totalPages = Math.ceil((boxHistoryData?.total ?? 0) / pageSize);
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = Number.parseInt(event.target.value);
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 p-4">
      <div className="max-w-screen rounded-lg bg-white p-4 shadow-md">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            className="w-70 rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Responsive Grid Header */}
        <div className="hidden grid-cols-8 bg-gray-200 p-2 font-semibold md:grid lg:grid-cols-8">
          <div>Client</div>
          <div>Wines</div>
          <div>Count</div>
          <div>Created Date</div>
          <div>Delivery Date</div>
          <div>Status</div>
          <div>Box Type</div>
          <div>Actions</div>
        </div>

        {/* Grid Body */}
        {boxHistoryData?.boxes.map(item => (
          <div
            key={item.id}
            className="grid grid-cols-1 items-center gap-2 border-b p-2 md:grid-cols-8 md:gap-2"
          >
            {/* Client */}
            <div className="flex items-center space-x-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white">
                {item.user.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{item.user.name}</p>
                <p className="text-sm text-gray-600">{item.user.phone}</p>
              </div>
            </div>

            {/* Wines */}
            <div className="col-span-2 max-w-xs overflow-hidden md:col-span-1 md:block">
              {item.box_wines.map(wine => (
                <p key={wine.id} className="truncate text-sm text-gray-700">
                  {wine.name}
                </p>
              ))}
            </div>

            {/* Count */}
            <div className="text-sm">
              <span className="rounded border border-green-500 px-2 py-1 text-green-500">
                {item.box_wines.reduce((acc, wine) => acc + wine.box_count, 0)}
                {' '}
                units
              </span>
            </div>

            {/* Created Date */}
            <div className="text-sm text-gray-600">
              {new Date(item.created_at).toLocaleDateString()}
            </div>

            {/* Delivery Date */}
            <div className="text-sm text-gray-600">
              {new Date(item.delivery_date).toLocaleDateString()}
            </div>

            {/* Status */}
            <div>
              <span className={`rounded px-2 py-1 ${
                item.status === 'DELIVERED' ? 'text-green-500' : 'text-red-500'
              }`}
              >
                {item.status}
              </span>
            </div>

            {/* Box Type */}
            <div className="text-sm text-gray-600">{item.box_type}</div>

            {/* Actions */}
            <div className="flex space-x-1">
              <button className="rounded-full bg-purple-500 p-2 text-white">
                <BsDownload />
              </button>
              <button className="rounded-full bg-orange-500 p-2 text-white">
                <FaEye />
              </button>
              <button className="rounded-full bg-green-500 p-2 text-white">
                <AiOutlineWhatsApp />
              </button>
              <button className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaCheck />
              </button>
              <button className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaTimes />
              </button>
              <button className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaEdit />
              </button>
              <button className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaTruck />
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            {boxHistoryData?.total ?? 0}
            {' '}
            Clientes
          </div>
          <div className="flex space-x-2">
            {pagesArray.length > 0 && (
              <>
                {pagesArray.slice(0, 3).map(page => (
                  <button
                    key={page}
                    className={`rounded border px-3 py-1 ${
                      currentPage === page ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
                {totalPages > 3 && <span>...</span>}
                {totalPages > 3 && (
                  <button
                    className={`rounded border px-3 py-1 ${
                      currentPage === totalPages ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                )}
              </>
            )}
          </div>
          <div className="text-sm">
            <select
              className="rounded border p-1"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
