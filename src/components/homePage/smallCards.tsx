import Image from 'next/image';
import React from 'react';

import type { SmallCardProps } from './types';

const SmallCard: React.FC<SmallCardProps> = ({ heading, desc, img }) => {
  return (
    <div className="relative m-10 h-full rounded-md">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={img} alt="image" width={100} height={100} className="absolute -mt-64"></Image>
      </div>
      <div className="z-0 min-h-64 max-w-72 rounded-md border border-gray-100 bg-white p-6 shadow-2xl">
        <h2 className="my-8 text-lg text-gray-600">{heading}</h2>
        <h2 className="mb-6">{desc}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
