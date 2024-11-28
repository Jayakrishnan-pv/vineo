import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const ThirdSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-evenly px-5 md:px-12 lg:flex-row lg-s:mb-32 w-wrap:mb-64">
        <Image src={IMAGES.winegif} alt="image" width={500} height={500} className="mt-14"></Image>
        <div className="mx-5 mt-10 text-pretty lg:max-w-40%">
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
            h2Class="text-2xl lg:text-4xl lg:text-left text-center"
            h3Class="text-2xl lg:text-4xl  text-gray-700 lg:text-left text-center"
            pClass="text-xl sm:text-xl  lg:text-2xl lg:text-left text-center"
            buttonClass="px-20 py-4 lg:mx-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
