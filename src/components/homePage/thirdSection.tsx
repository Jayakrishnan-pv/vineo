import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const ThirdSection = () => {
  return (
    <div>
      <div className="mb-80 flex flex-col items-center justify-evenly lg:flex-row">
        <Image src={IMAGES.winegif} alt="image" width={550} height={550} className="mt-14"></Image>
        <div className="mx-5 mt-10 text-pretty lg:max-w-50%">
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
            h2Class="text-4xl"
            h3Class="text-4xl max-w-70%"
            pClass="text-3xl"
            buttonClass="-mt-8 px-20 py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
