// components/BoxItem.tsx

import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

import type { Box } from '@/types';

type BoxItemProps = {
  box: Box;
  onDownloadPDF: (id: string) => void;
  onOpenDialog: (box: Box) => void;
  downloadingId: string | null;
};

const BoxItem: React.FC<BoxItemProps> = ({ box, onDownloadPDF, onOpenDialog, downloadingId }) => (
  <div className="grid grid-cols-1 items-center gap-2 border-b p-2 hover:bg-gray-50 md:grid-cols-8 md:gap-2">
    <div className="flex items-center space-x-2">
      <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white">
        {box.user.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <p className="font-bold">{box.user.name}</p>
        <p className="text-sm text-gray-600">{box.user.phone}</p>
      </div>
    </div>
    <div className="col-span-2 max-w-xs overflow-hidden md:col-span-1 md:block">
      {box.box_wines.map(wine => (
        <p key={wine._id} className="truncate text-sm text-gray-700">
          {wine.name}
        </p>
      ))}
    </div>
    <div className="text-sm">
      <span className="rounded border border-green-500 px-2 py-1 text-green-500">
        {box.box_wines.reduce((acc, wine) => acc + wine.box_count, 0)}
        {' '}
        boxes
      </span>
    </div>
    <div className="text-sm text-gray-600">{new Date(box.created_at).toLocaleDateString()}</div>
    <div className="text-sm text-gray-600">{new Date(box.delivery_date).toLocaleDateString()}</div>
    <div>
      <span className={`rounded px-2 py-1 ${box.status === 'DELIVERED' ? 'text-green-500' : 'text-red-500'}`}>
        {box.status}
      </span>
    </div>
    <div className="text-sm text-gray-600">{box.box_type}</div>
    <div className="flex space-x-1">
      <button type="submit" onClick={() => onDownloadPDF(box._id)} className="rounded-full bg-purple-500 p-2 text-white hover:bg-purple-600">
        <BsDownload />
      </button>
      <button type="submit" onClick={() => onOpenDialog(box)} className="rounded-full bg-orange-500 p-2 text-white hover:bg-orange-600">
        <FaEye />
      </button>
      <button type="submit" onClick={() => window.open(`https://wa.me/${box.user.phone}`, '_blank')} className="rounded-full bg-green-500 p-2 text-white hover:bg-green-600">
        <AiOutlineWhatsApp />
      </button>
      {/* Other icons for additional actions */}
    </div>
  </div>
);

export default BoxItem;
