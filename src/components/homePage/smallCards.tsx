// smallCards.tsx
import Image from 'next/image';
import React from 'react';

import type { SmallCardProps } from './types';

const SmallCard: React.FC<SmallCardProps> = ({ heading, desc, img }) => {
  return (
    <div className="mt-10 flex-1 p-5 sm:max-w-70% lg:mt-0">
      <div className="flex items-center justify-center">
        <Image src={img} alt="image" width={125} height={125} className="absolute"></Image>
      </div>
      <div className="z-0 mx-auto min-h-48 flex-1 space-y-6 rounded-xl border bg-second-gradient p-5 shadow-2xl md:min-h-64 lg:max-h-73 lg:min-h-72  lg-l:min-h-80">
        <h2 className="mt-5 text-lg font-semibold text-gray-700 sm:text-2xl lg:mt-10 lg-l:text-3xl">{heading}</h2>
        <h2 className="text-sm sm:text-lg md:text-xl">{desc}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
