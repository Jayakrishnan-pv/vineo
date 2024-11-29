'use client';

import React from 'react';

import { useGetBoxHistoryAdminQuery } from '@/app/redux/endPoints/boxEndpoints';
import ClientDetails from '@/components/historyPage/boxdetails';
import GridHeader from '@/components/historyPage/GridHeader';
import GridItem from '@/components/historyPage/GridItem';
import Pagination from '@/components/historyPage/Pagination';
import SearchBar from '@/components/historyPage/SearchBar';
import LoadingSpinner from '@/components/reuse/LoadingSpinner';
import Sidebar from '@/components/reuse/Sidebar';
import { useDialogHandler } from '@/utils/DialogHandler';
import { useDownloadBoxWinePrintCard } from '@/utils/DownloadHandler';
import { usePaginationHandler } from '@/utils/PaginationHandler';
import { useSearchHandler } from '@/utils/SearchHandler';

const HistoryPage: React.FC = () => {
  const { searchTerm, debouncedSearchTerm, handleSearchChange, handleClearSearch } = useSearchHandler();
  const { page, pageSize, setPage, setPageSize } = usePaginationHandler();
  const { isDialogOpen, selectedCustomer, handleOpenDialog, handleCloseDialog } = useDialogHandler();
  const handleDownload = useDownloadBoxWinePrintCard();
  const { data, isLoading } = useGetBoxHistoryAdminQuery({
    searchString: debouncedSearchTerm.trim() || '',
    page,
    pageSize,
  });

  const totalPages = Math.ceil((data?.total || 0) / pageSize);

  return (
    <>
      <div className="h-screen pt-5">
        <Sidebar name="name" subscriptionStatus={0} />
        {isLoading
          ? (
              <div className="flex h-full items-center justify-center">
                <LoadingSpinner />
              </div>
            )
          : (
              <div className="ml-24 mr-5 rounded-xl border bg-white p-4 shadow-md md:ml-74">
                <SearchBar
                  searchTerm={searchTerm}
                  isLoading={isLoading}
                  onSearchChange={handleSearchChange}
                  onClearSearch={handleClearSearch}
                />
                <GridHeader />
                {data?.boxes.map(item => (
                  <GridItem
                    key={item._id}
                    item={item}
                    onDownload={handleDownload}
                    onOpenDialog={handleOpenDialog}
                  />
                ))}
                {data?.total > 0 && (
                  <Pagination
                    page={page}
                    pageSize={pageSize}
                    totalPages={totalPages}
                    isLoading={isLoading}
                    onPageChange={setPage}
                    onPageSizeChange={setPageSize}
                  />
                )}
              </div>
            )}
      </div>
      <ClientDetails
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        customerData={selectedCustomer}
      />
    </>
  );
};

export default HistoryPage;
