// src/components/SecondCard.tsx

import React from 'react';

type SubCardProps = {
  title: string;
  subTitle: string;
  amount: string;
  description: string[];
  paymentLink: string;
  isActive: boolean;
  showButton: boolean;
  renewalDate: string;
};

const SecondCard: React.FC<SubCardProps> = ({
  title,
  subTitle,
  amount,
  description,
  paymentLink,
  isActive,
  renewalDate,
  showButton,
}) => (
  <div className={`mx-2 flex h-full w-72 flex-col rounded-lg border-2 py-6 text-gray-800 shadow-xl ${isActive ? 'bg-custom-gradient' : 'bg-white'}`}>
    <h2 className={`text-center text-xl font-bold ${isActive ? 'w-full bg-gray-800 px-5 text-white' : 'bg-white'}`}>{title}</h2>
    <div className="grow overflow-y-auto px-10">
      <p className="my-4 text-3xl font-bold">
        {amount}
        {' '}
        €/mes
      </p>
      <p className="mb-4">{subTitle}</p>
      <ul className="space-y-2 text-sm">
        {description.map((feature, index) => (
          <li key={index}>
            <span className="text-xl text-red-500">✓</span>
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
      <div className="mt-4">
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          <button type="submit" className="ml-6 w-5/6 rounded bg-gray-800 py-2 text-white">Cambiar</button>
        </a>
      </div>
    )}
  </div>
);

export default SecondCard;
