import React from 'react';

const GridHeader: React.FC = () => {
  return (
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
  );
};

export default GridHeader;
