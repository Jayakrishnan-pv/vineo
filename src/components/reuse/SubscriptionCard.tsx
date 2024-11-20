// src/components/SecondCard.tsx

import Link from 'next/link';
import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

import type { SubCardProps } from './types';

const SubscriptionCard: React.FC<SubCardProps> = ({
  title,
  subTitle,
  amount,
  description,
  paymentLink,
  isActive,
  renewalDate,
  showButton,
}) => (
  <div className={`mx-2 flex h-42 w-288p flex-col rounded-2xl border-2 py-6 text-gray-800 shadow-xl ${isActive ? 'bg-card-bg text-white' : 'bg-white'}`}>
    <h2 className={` flex h-14 items-center justify-center text-center text-xl font-bold${isActive ? 'w-full bg-gray-700 text-white' : 'bg-white'}`}>{title}</h2>
    <div className="grow overflow-y-auto px-10">
      <p className="my-4 text-3xl font-bold">
        {amount}
        {' '}
        €/mes
      </p>
      <p className="mb-4">{subTitle}</p>
      <ul className="text-sm">
        {description.map((feature, index) => (
          <li key={index} className="mb-2 flex">
            <span className="mr-2 text-xl text-red-500"><MdOutlineDone /></span>
            {' '}
            {feature}
          </li>
        ))}
      </ul>
    </div>
    {isActive && (
      <p className="ml-20 mt-4 text-xs text-gray-500">
        Renueva el
        {' '}
        {new Date(renewalDate).toLocaleDateString()}
      </p>
    )}
    {showButton && (
      <div className="mt-4 flex items-center justify-center">
        <Link href={paymentLink} target="_blank" rel="noopener noreferrer">
          <button type="submit" className=" rounded-xl bg-gray-800 px-10 py-2 text-white">Cambiar</button>
        </Link>
      </div>
    )}
  </div>
);

export default SubscriptionCard;
