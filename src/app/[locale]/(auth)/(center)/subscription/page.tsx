'use client';
import '@/styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';

import { useGetSubscriptionListQuery } from '@/app/redux/apiSlice';
import Sidebar from '@/components/Sidebar';

const SubscriptionPage = () => {
  const { data, isLoading, error } = useGetSubscriptionListQuery({ type: [10, 30, 40], email: 'testuser23@gmail.com' });

  if (isLoading) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 p-4">
        <div className="flex h-screen w-full items-center justify-center rounded-lg bg-white p-4 shadow-md">
          <div className="size-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  console.log('error msg', error);

  const subscriptions = data?.loadSubscriptionListForUser || [];

  return (
    <>
      <Sidebar />
      <div className="ml-72 flex flex-col items-center">
        <div className="m-2 mt-5 p-10 shadow-lg">
          <h1 className="mb-8 text-3xl font-semibold">Gestiona tu suscripción</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subscriptions.map(subscription => (
              <div
                key={subscription.id}
                className={`my-10 rounded-lg border-gray-400 py-6 shadow-2xl ${subscription.is_current ? 'btn text-white' : 'bg-white text-gray-700'}`}
              >
                <h2 className={`mb-4 py-6 text-center text-xl font-bold ${subscription.is_current ? 'w-full bg-black' : ''}`}>
                  {subscription.title}
                </h2>
                <p className="mb-2 px-6 text-2xl font-semibold">
                  {subscription.amount}
                  €
                </p>
                <p className="mb-4 px-6">{subscription.description}</p>
                <ul className="mb-4 space-y-2 px-6">
                  {subscription.is_early_adaptor && (
                    <li className="flex items-center space-x-2">
                      <span className="text-red-500">✓</span>
                      <span>Early Adaptor</span>
                    </li>
                  )}
                  {subscription.duration && (
                    <li className="flex items-center space-x-2">
                      <span className="text-red-500">✓</span>
                      <span>
                        {subscription.duration}
                        {' '}
                        months
                      </span>
                    </li>
                  )}
                </ul>
                {subscription.payment_link && (
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className={`my-6 rounded px-4 py-2 ${subscription.is_current ? 'bg-red-500' : 'bg-gray-800 text-white'} transition hover:bg-gray-700`}
                    >
                      Go to Payment
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex w-full flex-row-reverse">
            <button
              type="submit"
              className="mt-8 rounded bg-red-100 px-6 py-2 text-red-500 shadow transition hover:bg-red-200"
            >
              Cancelar suscripción
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
