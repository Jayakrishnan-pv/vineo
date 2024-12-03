import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

const FourthSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-around overflow-x-clip bg-hand-gradient py-10 md:top-16 lg:flex-row hand-w:h-96">
      <Image src={IMAGES.hand} alt="image" width={900} height={900} className="-mt-52 ml-16 sm:ml-24 hand-w:left-10 lg-l:absolute "></Image>
      <div className="my-10 ml-auto text-pretty hand-w:my-0 hand-w:mr-24 hand-w:max-w-40%">
        <h1 className="mb-10 text-center text-2xl font-bold text-gray-800 lg:text-4xl">
          La esencia de Vineo
        </h1>
        <h2 className="px-10 text-center text-xl md:text-2xl lg-l:text-left">Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias</h2>
      </div>
    </div>
  );
};

export default FourthSection;
