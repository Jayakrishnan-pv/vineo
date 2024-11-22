import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <div className="size-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </div>
  );
};

export default LoadingSpinner;
