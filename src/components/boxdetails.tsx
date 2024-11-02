import React from 'react';

// Define interface for the customer data
type CustomerData = {
  user: {
    name: string;
    email?: string;
    phone: string;
    address?: string;
    country?: string;
    zipCode?: string;
    city?: string;
    password?: string;
  };
};

type ClientDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  customerData: CustomerData | null;
};

const ClientDetails: React.FC<ClientDetailsProps> = ({ isOpen, onClose, customerData }) => {
  if (!isOpen || !customerData) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg md:max-w-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Customer Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input
              type="text"
              value={customerData.user.name || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full address</label>
            <input
              type="text"
              value={customerData.user.address || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={customerData.user.email || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              value={customerData.user.country || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={customerData.user.password || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Zip code</label>
            <input
              type="text"
              value={customerData.user.zipCode || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telephone</label>
            <input
              type="text"
              value={customerData.user.phone || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={customerData.user.city || ''}
              readOnly
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
