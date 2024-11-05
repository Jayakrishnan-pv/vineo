'use client';

import { debounce } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { FaCheck, FaEdit, FaEye, FaTimes, FaTruck } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardQuery } from '@/app/redux/apiSlice';
import ClientDetails from '@/components/boxdetails';
import Sidebar from '@/components/Sidebar';

type BoxWine = {
  _id: string;
  name: string;
  box_count: number;
};

type User = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  country?: string;
  zipCode?: string;
  city?: string;
};

type Box = {
  _id: string;
  user: User;
  box_wines: BoxWine[];
  created_at: string;
  delivery_date: string;
  status: string;
  box_type: string;
};

type ApiResponse = {
  boxes: Box[];
  total: number;
};

const HistoryPage: React.FC = () => {
  // Search and pagination state
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Box | null>(null);

  // Create the debounced function using useMemo
  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearchTerm(value);
      }, 500),
    [],
  );

  // Handler for search changes
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

  // Clear search handler
  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
    debouncedSetSearch.cancel();
    setDebouncedSearchTerm('');
  }, [debouncedSetSearch]);

  // Dialog handlers
  const handleOpenDialog = (customer: Box) => {
    setSelectedCustomer(customer);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCustomer(null);
  };

  // useEffect to handle the download when `pdfData` becomes available
  const HandleDownload = async (boxId: string) => {
    try {
      const response = await useGetBoxWinePrintCardQuery({ boxId: String(boxId) }).unwrap();
      const base64Data = response.data.getBoxWinePrintCard;
      const normalizedBase64 = base64Data.replace(/-/g, '+').replace(/_/g, '/');
      const binaryString = window.atob(normalizedBase64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `box_${boxId}.pdf`;
      downloadLink.click();
      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.error('Error fetching download data:', error);
    }
  };

  // API query
  const { data, isLoading } = useGetBoxHistoryAdminQuery({
    searchString: debouncedSearchTerm.trim() || '',
    page,
    pageSize,
  });

  if (isLoading && !data) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 p-4">
        <div className="flex h-screen w-full items-center justify-center rounded-lg bg-white p-4 shadow-md">
          <div className="size-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil((data?.total || 0) / pageSize);

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="my-6 ml-24 rounded-lg bg-white p-4 shadow-md md:ml-80">
          {/* Search Bar with Loading Indicator */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search by name, phone, or wine"
              className="w-1/4 rounded border p-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                type="submit"
                onClick={handleClearSearch}
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
          {data?.boxes.map(item => (
            <div
              key={item._id}
              className="grid grid-cols-1 items-center gap-2 border-b p-2 hover:bg-gray-50 md:grid-cols-8 md:gap-2"
            >
              {/* Client */}
              <div className="flex items-center space-x-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white">
                  {item.user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold">{item.user.name}</p>
                  <p className="text-sm text-gray-600">{item.user.phone}</p>
                </div>
              </div>

              {/* Wines */}
              <div className="col-span-2 max-w-xs overflow-hidden md:col-span-1 md:block">
                {item.box_wines.map(wine => (
                  <p key={wine._id} className="truncate text-sm text-gray-700">
                    {wine.name}
                  </p>
                ))}
              </div>

              {/* Count */}
              <div className="text-sm">
                <span className="rounded border border-green-500 px-2 py-1 text-green-500">
                  {item.box_wines.reduce((acc, wine) => acc + wine.box_count, 0)}
                  {' '}
                  boxes
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
                <span
                  className={`rounded px-2 py-1 ${
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
                <button
                  type="button"
                  className="rounded-full bg-purple-500 p-2 text-white transition-colors hover:bg-purple-600"
                  onClick={() => HandleDownload(item._id)}
                >
                  <BsDownload />
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 p-2 text-white transition-colors hover:bg-orange-600"
                  onClick={() => handleOpenDialog(item)}
                >
                  <FaEye />
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
                  onClick={() => window.open(`https://wa.me/${item.user.phone}`, '_blank')}
                >
                  <AiOutlineWhatsApp />
                </button>
                <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400 transition-colors hover:bg-gray-300">
                  <FaCheck />
                </button>
                <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400 transition-colors hover:bg-gray-300">
                  <FaTimes />
                </button>
                <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400 transition-colors hover:bg-gray-300">
                  <FaEdit />
                </button>
                <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400 transition-colors hover:bg-gray-300">
                  <FaTruck />
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {data?.total > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                {data?.total || 0}
                {' '}
                Clientes
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className={`rounded border px-3 py-1 ${
                    page === 1 ? 'cursor-not-allowed bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1 || isLoading}
                >
                  <GrFormPrevious />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
                  <button
                    type="submit"
                    key={i + 1}
                    className={`rounded border px-3 py-1 ${
                      page === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setPage(i + 1)}
                    disabled={isLoading}
                  >
                    {i + 1}
                  </button>
                ))}
                {totalPages > 5 && <span>...</span>}
                {totalPages > 5 && (
                  <button
                    type="submit"
                    className={`rounded border px-3 py-1 ${
                      page === totalPages ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setPage(totalPages)}
                    disabled={isLoading}
                  >
                    {totalPages}
                  </button>
                )}
                <button
                  type="submit"
                  className={`rounded border px-3 py-1 ${
                    page === totalPages ? 'cursor-not-allowed bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages || isLoading}
                >
                  <GrFormNext />
                </button>
              </div>
              <div className="text-sm">
                <select
                  className="rounded border p-1 hover:bg-gray-50"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPage(1);
                  }}
                  disabled={isLoading}
                >
                  <option value={10}>10 / page</option>
                  <option value={20}>20 / page</option>
                  <option value={50}>50 / page</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Client Details Dialog */}
      <ClientDetails
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        customerData={selectedCustomer}
      />
    </>
  );
};

export default HistoryPage;
