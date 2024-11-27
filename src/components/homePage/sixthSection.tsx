import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const SixthSection = () => {
  return (
    <div>
      <div className="mx-5 my-20 flex flex-col items-center justify-around md:flex-row">
        <Image src={IMAGES.bottleImage} alt="vineo-logo" width={550} height={700} className="px-5"></Image>
        <div className="my-auto text-pretty md:max-w-40%">
          <TextBox
            title="Tu Aprendizaje"
            subtitle="Aprende sobre vinos con cada caja"
            paragraphs={['Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.', 'Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!']}
            showButton={false}
            h2Class="text-2xl lg:text-3xl mb-11 lg:text-left text-center"
            h3Class="text-2xl lg:text-3xl mb-11 font-bold lg:text-left text-center"
            pClass="text-xl sm:text-xl mb-5 lg:text-2xl lg:text-left text-center"
          />
        </div>
      </div>
      <div className="flex h-64 flex-col items-center justify-center bg-secondBg bg-no-repeat p-5 text-center">
        <TextBox
          title="Sube de nivel con cada caja"
          subtitle=""
          paragraphs={['Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas con tus Vineo Coins']}
          showButton={false}
          h2Class="text-2xl text-gray-800 lg:text-3xl mb-5 text-center"
          pClass="text-xl sm:text-xl lg:max-w-80% mx-auto text-center"
        />
      </div>
    </div>
  );
};

export default SixthSection;
