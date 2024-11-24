import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

const FourthSection = () => {
  return (
    <div className="top-16 flex min-h-55p w-full flex-col flex-wrap items-center justify-evenly bg-hand-gradient lg:flex-row w-wrap:flex-nowrap">
      {/* <div className=""> */}
      <Image src={IMAGES.hand} alt="image" width={1200} height={1200} className="-mt-64 hand-w:absolute hand-w:-ml-96 hand-w:-mt-96 "></Image>
      {/* </div> */}
      <div className="my-10 ml-auto text-pretty hand-w:my-0 hand-w:mr-24 hand-w:max-w-40%">
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-800">
          La esencia de Vineo
        </h1>
        <h2 className="px-10 text-3xl">Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias</h2>
      </div>
    </div>
  );
};

export default FourthSection;
