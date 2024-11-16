import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

const FourthSection = () => {
  return (
    <div className="mx-auto flex h-auto flex-col items-center justify-around bg-gray-200 md:py-10 lg:flex-row">
      <div className="-mt-32 ml-32 md:absolute md:-ml-30 md:-mt-56">
        <Image src={IMAGES.hand} alt="image" width={100} height={100} className="min-h-50p min-w-60p"></Image>
      </div>
      <div className=" my-10 max-w-40 md:ml-96">
        <h1 className="mb-10 text-center text-2xl text-gray-600">
          La esencia de Vineo
        </h1>
        <h2 className="px-5 text-xl">Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias</h2>
      </div>
    </div>
  );
};

export default FourthSection;
