import Image from 'next/image'; // This import is necessary
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

const FourthSection = () => {
  return (
    <div className="flex flex-col justify-around">
      <div className="my-20 flex w-full items-center justify-around">
        <div className="mt-10 max-w-50">
          <h2 className="text-3xl ">El Algoritmo</h2>
          <h3 className="my-10 text-2xl font-semibold">Cada vez que valoras un vino, mejora el algoritmo</h3>
          <p className="text-xl ">Nuestro algoritmo aprende con con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.</p>
          <button type="submit" className="btn my-10 rounded-xl px-10 py-4 text-white">
            Comienza
          </button>
        </div>
        <Image src={IMAGES.graphDetail} alt="vineo-logo" width={100} height={50} className="h-200p w-96"></Image>
      </div>
      <div className="flex justify-around">
        <Image src={IMAGES.bottleImage} alt="vineo-logo" width={100} height={50} className="h-200p w-100p"></Image>
        <div className="my-auto max-w-60">
          <h2 className="text-2xl">Tu Aprendizaje</h2>
          <h3 className="my-10 text-3xl font-semibold">Aprende sobre vinos con cada caja</h3>
          <p className="mb-10 text-xl">Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.</p>
          <p className="text-xl">Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!</p>
        </div>
      </div>
      <div className="my-10 flex h-52 flex-col items-center justify-center bg-gray-100 text-center">
        <h2 className="mb-10 text-2xl text-gray-600">Sube de nivel con cada caja</h2>
        <p className="mx-auto w-3/6 text-xl">Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas con tus Vineo Coins</p>
      </div>
    </div>
  );
};

export default FourthSection;
