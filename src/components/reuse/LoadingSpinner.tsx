import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center rounded-lg bg-white p-4 shadow-md">
      <div className="size-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
