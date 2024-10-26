'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { FaCheck, FaEdit, FaEye, FaTimes, FaTruck } from 'react-icons/fa';

type ClientHistory = {
  name: string;
  phone: string;
  wines: string[];
  startDate: string;
  endDate: string;
  status: string;
  deliverable: boolean;
  count: string;
};

const historyData: ClientHistory[] = [
  {
    name: 'diyanew',
    phone: '89898989890',
    wines: ['lote 44 malbec', 'la clave de raúl pérez', 'remordimiento'],
    startDate: '02/08/2024',
    endDate: '05/08/2024',
    status: 'Rechazada',
    deliverable: true,
    count: '0 veces',
  },

  {
    name: 'Test User 2',
    phone: '9496239655',
    wines: ['casillero del diablo cabernet sauvignon 2021', 'la garnacha salvaje del moncayo', 'l\'altre'],
    startDate: '02/08/2024',
    endDate: '05/08/2024',
    status: 'Rechazada',
    deliverable: true,
    count: '0 veces',
  },
  {
    name: 'Test User 1',
    phone: '9496239654',
    wines: ['time waits for no one double 2022', 'gran feudo reserva', 'marieta'],
    startDate: '02/08/2024',
    endDate: '05/08/2024',
    status: 'Rechazada',
    deliverable: true,
    count: '0 veces',
  },
  {
    name: 'Swathi old',
    phone: '9496239653',
    wines: ['piedra roble', 'lia', 'murmurón'],
    startDate: '01/08/2024',
    endDate: '04/08/2024',
    status: 'Rechazada',
    deliverable: true,
    count: '0 veces',
  },
  {
    name: 'Swathi',
    phone: '9496239653',
    wines: ['abadal picapoll', 'boland cappuccino pinotage', 'marques de riscal verdejo organic '],
    startDate: '01/08/2024',
    endDate: '04/08/2024',
    status: 'Rechazada',
    deliverable: true,
    count: '0 veces',
  },
];

const HistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const filteredData = historyData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    || item.phone.includes(searchTerm)
    || item.wines.some(wine => wine.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="min-h-screen w-screen bg-gray-100 p-4">
      <div className="max-w-screen rounded-lg bg-white p-4 shadow-md">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, phone, or wine..."
            className="w-70 rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="hidden grid-cols-8 bg-gray-200 p-2 font-semibold md:grid lg:grid-cols-8">
          <div>Client</div>
          <div>Wines</div>
          <div>Count</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Status</div>
          <div>Rechazada</div>
          <div>Actions</div>
        </div>
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 items-center gap-2 border-b p-2 md:grid-cols-8 md:gap-2"
          >
            <div className="flex items-center space-x-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.phone}</p>
              </div>
            </div>
            <div className="col-span-2 max-w-xs overflow-hidden md:col-span-1 md:block">
              {item.wines.map((wine, idx) => (
                <p key={idx} className="truncate text-sm text-gray-700">
                  {wine}
                </p>
              ))}
            </div>
            <div className="text-sm">
              <span className=" rounded border border-green-500 px-2 py-1 text-green-500">
                {item.count}
              </span>
            </div>
            <div className="text-sm text-gray-600">{item.startDate}</div>
            <div className="text-sm text-gray-600">{item.endDate}</div>
            <div>
              <span className={`rounded px-2 py-1  ${item.deliverable ? 'text-green-500' : 'text-red-500'}`}>
                {item.deliverable ? 'Entregable' : 'Rechazada'}
              </span>
            </div>
            <div className="text-sm text-red-600">{item.status}</div>
            <div className="flex space-x-1">
              <button type="submit" className="rounded-full bg-purple-500 p-2 text-white">
                <BsDownload />
              </button>
              <button type="submit" className="rounded-full bg-orange-500 p-2 text-white">
                <FaEye />
              </button>
              <button type="submit" className="rounded-full bg-green-500 p-2 text-white">
                <AiOutlineWhatsApp />
              </button>
              <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaCheck />
              </button>
              <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaTimes />
              </button>
              <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaEdit />
              </button>
              <button type="submit" className="rounded-full bg-gray-200 p-2 text-gray-400">
                <FaTruck />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            {historyData.length}
            {' '}
            Clientes
          </div>
          <div className="flex space-x-2">
            <button className="rounded border px-3 py-1">1</button>
          </div>
          <div className="text-sm">
            <select className="rounded border p-1">
              <option>10 / page</option>
              <option>20 / page</option>
              <option>50 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
