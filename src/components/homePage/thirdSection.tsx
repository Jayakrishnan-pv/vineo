import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const ThirdSection = () => {
  return (
    <div>
      <div className="my-20 flex w-full flex-col items-center justify-around lg:flex-row">
        <Image src={IMAGES.graphGif} alt="image" width={100} height={100} className=" size-96"></Image>
        <TextBox
          title="El Proceso"
          subtitle="¿Cómo encontramos los vinos perfectos para ti?"
          paragraphs={[
            'Analizamos tus preferencias de vino a través de 18 aspectos clave',
            'Luego, nuestro algoritmo determina la probabilidad de que te guste cada botella que incluiremos en cada caja',
            'Este valor se utiliza para seleccionar cuidadosamente las botellas de vino que incluiremos en tu caja',
          ]}
          buttonText="Comienza"
          showButton={true}
        />
      </div>
      <div className="flex h-96 flex-col justify-around bg-gray-200 lg:flex-row">
        <Image src={IMAGES.hand} alt="image" width={100} height={100} className="absolute -ml-30 -mt-56 h-200p w-200p"></Image>
        <div className=" my-auto ml-96 max-w-40">
          <TextBox title="La esencia de Vineo" subtitle="Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias" paragraphs={[]} />

          <p className="text-xl "></p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
