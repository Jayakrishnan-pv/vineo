// WineCard.tsx
import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import type { WineCardProps } from './types';

const WineCard: React.FC<WineCardProps> = ({ wine }) => (
  <div className="flex h-35 w-48 flex-col items-center justify-between text-center">
    <Image
      src={wine.image}
      alt={`${wine.wine_name} bottle`}
      width={100}
      height={100}
      className="size-48 object-contain"
    />
    <div className="text-red-400">{wine.wine_name}</div>
    <div className="mt-5 text-sm text-gray-400">{wine.store}</div>
    <div className="mb-5 text-sm text-gray-400">{wine.area}</div>
    <Rating name="read-only" value={wine.rating} readOnly className="custom-rating" />
  </div>
);

export default WineCard;
