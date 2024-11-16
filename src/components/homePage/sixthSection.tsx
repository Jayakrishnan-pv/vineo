import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const SixthSection = () => {
  return (
    <div>
      <div className="my-20 flex flex-col items-center justify-around md:flex-row">
        <Image src={IMAGES.bottleImage} alt="vineo-logo" width={100} height={50} className="h-200p w-100p p-5"></Image>
        <div className="my-auto max-w-60">
          <TextBox
            title="Tu Aprendizaje"
            subtitle="Aprende sobre vinos con cada caja"
            paragraphs={['Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.', 'Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!']}
            showButton={false}
          />
        </div>
      </div>
      <div className="my-20 flex h-52 flex-col items-center justify-center bg-gray-100 text-center">
        <TextBox
          title="Sube de nivel con cada caja"
          subtitle=""
          paragraphs={['Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas con tus Vineo Coins']}
          showButton={false}
        />
      </div>
    </div>
  );
};

export default SixthSection;
