import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const ThirdSection = () => {
  return (
    <div>
      <div className="m-20 flex flex-col items-center justify-evenly lg:flex-row">
        <Image src={IMAGES.graphGif} alt="image" width={100} height={100} className=" size-96"></Image>
        <div className="max-w-96">
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
            h2Class=""
            h3Class=""
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
