// 'use client';

// import { jsPDF } from 'jspdf';
// import { debounce } from 'lodash';
// import React, { useCallback, useMemo, useState } from 'react';
// import { useTranslation } from 'react-i18next'; // Import translation hook
// import { BsDownload } from 'react-icons/bs';
// import { FaEye, FaTimes } from 'react-icons/fa';
// import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

// import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardQuery } from '@/app/redux/apiSlice';
// import ClientDetails from '@/components/boxdetails';
// import Sidebar from '@/components/Sidebar';

// type BoxWine = {
//   _id: string;
//   name: string;
//   box_count: number;
// };

// type User = {
//   name: string;
//   phone: string;
//   email?: string;
//   address?: string;
//   country?: string;
//   zipCode?: string;
//   city?: string;
// };

// type Box = {
//   _id: string;
//   user: User;
//   box_wines: BoxWine[];
//   created_at: string;
//   delivery_date: string;
//   status: string;
//   box_type: string;
// };

// type ApiResponse = {
//   boxes: Box[];
//   total: number;
// };

// const HistoryPage: React.FC = () => {
//   const { t } = useTranslation(); // Use translation hook
//   // Search and pagination state
//   const [searchTerm, setSearchTerm] = useState('');
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [downloadingId, setDownloadingId] = React.useState<string | null>(null);

//   // Dialog state
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState<Box | null>(null);

//   // Create the debounced function using useMemo
//   const debouncedSetSearch = useMemo(
//     () =>
//       debounce((value: string) => {
//         setDebouncedSearchTerm(value);
//       }, 500),
//     [],
//   );

//   // Move the query to the component level
//   const { data: boxData, isLoading: isDownloading } = useGetBoxWinePrintCardQuery(
//     downloadingId || '', // or skip if no downloadingId
//     {
//       skip: !downloadingId,
//       // Only fetch when downloadingId is set
//     },
//   );

//   React.useEffect(() => {
//     const generatePDF = async () => {
//       if (boxData && downloadingId) {
//         try {
//           // Create PDF document
//           const doc = new jsPDF();

//           // Add content to PDF
//           doc.setFontSize(16);
//           doc.text(t('historypage.pdfTitle'), 20, 20); // Use translation for "Box Details"

//           // Add the fetched data to the PDF
//           const lines = doc.splitTextToSize(boxData, 180);
//           doc.setFontSize(12);
//           doc.text(lines, 20, 40);

//           // Generate and download the PDF
//           doc.save(`box-details-${downloadingId}.pdf`);
//         } catch (error) {
//           console.error('Error generating PDF:', error);
//         } finally {
//           setDownloadingId(null);
//         }
//       }
//     };

//     generatePDF();
//   }, [boxData, downloadingId, t]);

//   const handleDownloadClick = (boxId: string) => {
//     setDownloadingId(boxId);
//   };

//   // Handler for search changes
//   const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (!value.trim()) {
//       debouncedSetSearch.cancel();
//       setDebouncedSearchTerm('');
//     } else {
//       debouncedSetSearch(value);
//     }
//   }, [debouncedSetSearch]);

//   // Clear search handler
//   const handleClearSearch = useCallback(() => {
//     setSearchTerm('');
//     debouncedSetSearch.cancel();
//     setDebouncedSearchTerm('');
//   }, [debouncedSetSearch]);

//   // Dialog handlers
//   const handleOpenDialog = (customer: Box) => {
//     setSelectedCustomer(customer);
//     setIsDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//     setSelectedCustomer(null);
//   };

//   // API query
//   const { data, isLoading } = useGetBoxHistoryAdminQuery({
//     searchString: debouncedSearchTerm.trim() || '',
//     page,
//     pageSize,
//   });

//   if (isLoading && !data) {
//     return (
//       <div className="min-h-screen w-screen bg-gray-100 p-4">
//         <div className="flex h-screen w-full items-center justify-center rounded-lg bg-white p-4 shadow-md">
//           <div className="size-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
//         </div>
//       </div>
//     );
//   }

//   const totalPages = Math.ceil((data?.total || 0) / pageSize);

//   return (
//     <>
//       <Sidebar />
//       <div className="min-h-screen bg-gray-100 p-4">
//         <div className="my-6 ml-24 rounded-lg bg-white p-4 shadow-md md:ml-80">
//           {/* Search Bar with Loading Indicator */}
//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder={t('historypage.searchPlaceholder')} // Use translation for search placeholder
//               className="w-1/4 rounded border p-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             {searchTerm && (
//               <button
//                 type="submit"
//                 onClick={handleClearSearch}
//                 className="-ml-10 mt-6 text-gray-500 hover:text-gray-700"
//               >
//                 <FaTimes />
//               </button>
//             )}
//             {isLoading && (
//               <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                 <div className="min-h-8 min-w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
//               </div>
//             )}
//           </div>

//           {/* Responsive Grid Header */}
//           <div className="hidden grid-cols-8 bg-gray-200 p-2 font-semibold md:grid lg:grid-cols-8">
//             <div>{t('historypage.client')}</div>
//             <div>{t('historypage.wines')}</div>
//             <div>{t('historypage.boxes')}</div>
//             <div>{t('historypage.createdDate')}</div>
//             <div>{t('historypage.deliveryDate')}</div>
//             <div>{t('historypage.status')}</div>
//             <div>{t('historypage.boxType')}</div>
//             <div>{t('historypage.actions')}</div>
//           </div>

//           {/* Grid Body */}
//           {data?.boxes.map(item => (
//             <div
//               key={item._id}
//               className="grid grid-cols-1 items-center gap-2 border-b p-2 hover:bg-gray-50 md:grid-cols-8 md:gap-2"
//             >
//               {/* Client */}
//               <div className="flex items-center space-x-2">
//                 <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white">
//                   {item.user.name.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p className="font-bold">{item.user.name}</p>
//                   <p className="text-sm text-gray-600">{item.user.phone}</p>
//                 </div>
//               </div>

//               {/* Wines */}
//               <div className="col-span-2 max-w-xs overflow-hidden md:col-span-1 md:block">
//                 {item.box_wines.map(wine => (
//                   <p key={wine._id} className="truncate text-sm text-gray-700">
//                     {wine.name}
//                   </p>
//                 ))}
//               </div>

//               {/* Count */}
//               <div className="text-sm">
//                 <span className="rounded border border-green-500 px-2 py-1 text-green-500">
//                   {item.box_wines.reduce((acc, wine) => acc + wine.box_count, 0)}
//                   {' '}
//                   {t('historypage.boxes')}
//                   {' '}
//                   {/* Use translation for "boxes" */}
//                 </span>
//               </div>

//               {/* Created Date */}
//               <div className="text-sm text-gray-600">
//                 {new Date(item.created_at).toLocaleDateString()}
//               </div>

//               {/* Delivery Date */}
//               <div className="text-sm text-gray-600">
//                 {new Date(item.delivery_date).toLocaleDateString()}
//               </div>

//               {/* Status */}
//               <div>
//                 <span
//                   className={`rounded px-2 py-1 ${
//                     item.status === 'DELIVERED' ? 'text-green-500' : 'text-red-500'
//                   }`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               {/* Box Type */}
//               <div className="text-sm text-gray-600">{item.box_type}</div>

//               {/* Actions */}
//               <div className="flex space-x-2">
//                 <button type="submit" onClick={() => handleOpenDialog(item)}>
//                   <FaEye />
//                 </button>
//                 <button
//                   type="submit"
//                   onClick={() => handleDownloadClick(item._id)}
//                   disabled={isDownloading}
//                 >
//                   <BsDownload />
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Pagination Controls */}
//           <div className="flex justify-between p-4">
//             <button
//               type="submit"
//               onClick={() => setPage(prev => Math.max(prev - 1, 1))}
//               disabled={page === 1}
//               className={`rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 ${
//                 page === 1 ? 'cursor-not-allowed opacity-50' : ''
//               }`}
//             >
//               <GrFormPrevious />
//             </button>
//             <span>
//               Page
//               {' '}
//               {page}
//               {' '}
//               of
//               {' '}
//               {totalPages}
//             </span>
//             <button
//               onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
//               disabled={page === totalPages}
//               className={`rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 ${
//                 page === totalPages ? 'cursor-not-allowed opacity-50' : ''
//               }`}
//             >
//               <GrFormNext />
//             </button>
//           </div>

//           {/* Dialog for Client Details */}
//           {isDialogOpen && selectedCustomer && (
//             <ClientDetails
//               customer={selectedCustomer}
//               onClose={handleCloseDialog}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HistoryPage;
