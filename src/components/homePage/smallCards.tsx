// smallCards.tsx
import Image from 'next/image';
import React from 'react';

import type { SmallCardProps } from './types';

const SmallCard: React.FC<SmallCardProps> = ({ heading, desc, img }) => {
  return (
    <div className="relative m-10 h-1/4 w-3/4 sm:w-4/5 ">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={img} alt="image" width={200} height={200} className="absolute -mt-96"></Image>
      </div>
      <div className="z-0 min-h-96 space-y-6 text-pretty rounded-xl border bg-second-gradient p-6 shadow-2xl md:flex-1">
        <h2 className="mt-16 text-4xl text-gray-600">{heading}</h2>
        <h2 className="text-3xl">{desc}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
