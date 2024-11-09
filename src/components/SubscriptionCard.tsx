// src/components/SecondCard.tsx

import React from 'react';

type SecondCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
};

const SecondCard: React.FC<SecondCardProps> = ({ title, price, description, features, buttonText }) => (
  <div className="w-72 rounded-lg border-2 bg-white px-10 py-6 text-gray-800 shadow-xl">
    <h2 className="text-center text-xl font-bold">{title}</h2>
    <p className="my-4 text-3xl font-bold">{price}</p>
    <p className="mb-4">{description}</p>
    <ul className="space-y-2 text-sm">
      {features.map((feature, index) => (
        <li key={index}>
          <span className="text-xl text-red-500">✓</span>
          {' '}
          {feature}
        </li>
      ))}
    </ul>
    <button type="submit" className="mt-4 w-full rounded bg-gray-800 py-2 text-white">{buttonText}</button>
  </div>
);

export default SecondCard;
