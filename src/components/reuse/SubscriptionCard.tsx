// src/components/SecondCard.tsx

import Link from 'next/link';
import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

import type { SubCardProps } from './types';

const SubscriptionCard: React.FC<SubCardProps> = ({
  mainTitle,
  title,
  subTitle,
  amount,
  description,
  paymentLink,
  isActive,
  renewalDate,
  showButton,
  isDemo,
}) => (
  <div className={`mx-2 flex h-42 w-288p flex-col rounded-2xl border-2 py-6 text-gray-800 shadow-2xl ${isActive ? 'bg-card-bg text-white' : 'bg-cardGrad'}`}>
    <h2 className={` flex h-14 items-center justify-center text-center text-3xl font-semibold ${isActive ? 'w-full bg-gray-700 text-white' : ''}`}>{mainTitle}</h2>
    <div className="grow overflow-y-auto px-10">
      <p className="my-4 text-2xl font-semibold">
        {amount}
        {' '}
        €/mes
      </p>
      <p className="mb-2 text-lg font-semibold">{title}</p>
      <p className="mb-2">{subTitle}</p>
      <ul className="text-sm">
        {description.map((feature, index) => (
          <li key={index} className="mb-2 flex">
            <span className={`mr-2 mt-1 text-sm ${isActive ? 'text-white' : 'text-red-400'}`}><MdOutlineDone /></span>
            {' '}
            {feature}
          </li>
        ))}
      </ul>
    </div>
    {isActive && !isDemo
      ? (
          <p className="ml-20 mt-4 text-xs text-gray-500">
            Renueva el
            {' '}
            {new Date(renewalDate).toLocaleDateString()}
          </p>
        )
      : ''}
    {showButton && !isDemo
      ? (
          <div className="mt-4 flex items-center justify-center">
            <Link href={paymentLink} target="_blank" rel="noopener noreferrer">
              <button type="submit" className=" rounded-xl bg-gray-800 px-10 py-2 text-white">Cambiar</button>
            </Link>
          </div>
        )
      : showButton && isDemo && !isActive
        ? (
            <div className="mt-4 flex items-center justify-center">
              <Link href={paymentLink} target="_blank" rel="noopener noreferrer">
                <button type="submit" className=" btn rounded-xl px-10 py-2 text-white">Cambiar</button>
              </Link>
            </div>
          )
        : showButton && isDemo && isActive
          ? (
              <div className="mt-4 flex items-center justify-center">
                <Link href={paymentLink} target="_blank" rel="noopener noreferrer">
                  <button type="submit" className=" rounded-xl bg-white px-10 py-2 text-gray-800">Cambiar</button>
                </Link>
              </div>
            )
          : ''}
  </div>
);

export default SubscriptionCard;
