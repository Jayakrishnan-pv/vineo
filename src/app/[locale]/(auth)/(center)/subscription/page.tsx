'use client';
import '@/styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';

import { useGetSubscriptionListQuery, useGetSubscriptionStatusQuery } from '@/app/redux/apiSlice';
import Sidebar from '@/components/Sidebar';

const SubscriptionPage = () => {
  const { data: subscriptionStatusData } = useGetSubscriptionStatusQuery();
  const { data: subscriptions, isLoading } = useGetSubscriptionListQuery([10]); // Pass the types you want to filter by

  console.log('sub', subscriptionStatusData);
  console.log('subList', subscriptions);
  return (
    <div className="flex flex-row text-gray-800 transition-transform delay-75 duration-150 ease-in ">
      <Sidebar />
      <div className="ml-24 mr-5 mt-6 flex w-full flex-col items-center rounded-2xl bg-white px-12 shadow-2xl md:ml-74">
        <h1 className="left-0 my-12 w-full text-3xl font-semibold">Gestiona tu suscripción</h1>
        <div className="flex w-full flex-row px-12">
          {/* first card */}
          <div className="mx-10 w-72 rounded-lg bg-custom-gradient py-6 text-gray-800 shadow-xl">
            <h2 className="w-full bg-gray-800 p-2 text-center text-xl font-bold text-white">Vineo Regalo</h2>
            <div className="px-10">
              <p className="my-4 text-3xl font-bold">0€</p>
              <p className="mb-4 w-full">Vineo 6 meses</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-xl text-white">✓</span>
                  {' '}
                  Perfilado a medida
                </li>
                <li>
                  <span className="text-xl text-white">✓</span>
                  {' '}
                  1 caja de 3 vinos al mes según tus gustos
                </li>
                <li>
                  <span className="text-xl text-white">✓</span>
                  {' '}
                  Cancelación gratuita en cualquier momento
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">Renueva el 27/04/2024</p>
            </div>
          </div>
          {/* second card */}
          <div className="w-72 rounded-lg border-2 bg-white px-10 py-6 text-gray-800 shadow-xl">
            <h2 className="text-center text-xl font-bold">Vineo IA</h2>
            <p className="my-4 text-3xl font-bold">5€/mes</p>
            <p className="mb-4">Suscripción a la IA de Vineo</p>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-xl text-red-500">✓</span>
                {' '}
                Perfilado a medida
              </li>
              <li>
                <span className="text-xl text-red-500">✓</span>
                {' '}
                1 recomendación de 3 vinos al mes según tus gustos
              </li>
              <li>
                <span className="text-xl text-red-500">✓</span>
                {' '}
                Cancelación gratuita en cualquier momento
              </li>
            </ul>
            <button type="submit" className="mt-4 w-full rounded bg-gray-800 py-2 text-white">Cambiar</button>
          </div>
        </div>
        <div className="m-12 flex w-full flex-row-reverse">
          <button
            type="submit"
            className="mt-8 rounded bg-red-100 px-6 py-2 text-red-600 shadow transition hover:bg-red-200"
          >
            Cancelar suscripción
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
