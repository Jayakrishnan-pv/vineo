import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

const FourthSection = () => {
  return (
    <div className=" relative top-16 flex w-full flex-col items-center justify-center bg-hand-gradient lg:flex-row">
      <div className="relative -mt-48">
        <Image src={IMAGES.hand} alt="image" width={800} height={1000} className=""></Image>
      </div>
      <div className="my-10 max-w-55p lg:my-0 ">
        <h1 className="mb-10 text-center text-2xl text-gray-600">
          La esencia de Vineo
        </h1>
        <h2 className="px-10 text-xl">Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias</h2>
      </div>
    </div>
  );
};

export default FourthSection;
