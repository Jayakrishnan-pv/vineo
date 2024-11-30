import React from 'react';

import ActionButtons from './ActionButtons';
import type { GridItemProps } from './types';

const GridItem: React.FC<GridItemProps> = ({ item, onDownload, onOpenDialog }) => {
  return (
    <div
      key={item._id}
      className="grid grid-cols-1 items-center gap-2 border-b p-2 hover:bg-gray-50 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
    >
      {/* Client */}
      <div className="flex items-center space-x-2  sm:col-span-2 md:col-span-1 lg:col-span-1">
        <div className="flex min-h-8 min-w-8 items-center justify-center rounded-full bg-blue-500 text-white">
          {item.user.name.charAt(0).toUpperCase()}
        </div>
        <div className="">
          <p className="font-bold ">{item.user.name}</p>
          <p className="text-sm text-gray-600">{item.user.phone}</p>
        </div>
      </div>

      {/* Wines */}
      <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
        {item.box_wines.map(wine => (
          <p key={wine._id} className="text-sm text-gray-700">
            {wine.name}
          </p>
        ))}
      </div>

      {/* Count */}
      <div className="text-sm sm:col-span-1 md:col-span-1 lg:col-span-1">
        <span className="rounded border border-green-500 px-2 py-1 text-green-500">
          {item.box_wines.reduce((acc, wine) => acc + wine.box_count, 0)}
          {' '}
          boxes
        </span>
      </div>

      {/* Created Date */}
      <div className="text-sm text-gray-600 sm:col-span-1 md:col-span-1 lg:col-span-1">
        {new Date(item.created_at).toLocaleDateString()}
      </div>

      {/* Delivery Date */}
      <div className="text-sm text-gray-600 sm:col-span-1 md:col-span-1 lg:col-span-1">
        {new Date(item.delivery_date).toLocaleDateString()}
      </div>

      {/* Status */}
      <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
        <span
          className={`rounded px-2 py-1 ${
            item.status === 'DELIVERED' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {item.status}
        </span>
      </div>

      {/* Box Type */}
      <div className="text-sm text-gray-600 sm:col-span-1 md:col-span-1 lg:col-span-1">
        {item.box_type}
      </div>

      {/* Actions */}
      <ActionButtons
        item={item}
        onDownload={onDownload}
        onOpenDialog={onOpenDialog}
        className="sm:col-span-2 md:col-span-1 lg:col-span-1"
      />
    </div>
  );
};

export default GridItem;
