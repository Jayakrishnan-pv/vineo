import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const FifthSection = () => {
  return (
    <div className="mb-20 mt-16 flex w-full flex-col items-center justify-evenly md:mt-24 md:flex-row">
      <div className="order-2 mt-10 text-pretty md:order-1 md:max-w-40%">
        <TextBox
          title="El Algoritmo"
          subtitle="Cada vez que valoras un vino, mejora el algoritmo"
          paragraphs={['Nuestro algoritmo aprende con con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.']}
          buttonText="Comienza"
          showButton={true}
          h2Class="text-2xl lg:text-3xl mb-11 lg:text-left text-center"
          h3Class="text-2xl lg:text-3xl mb-11 font-bold lg:text-left text-center"
          pClass="text-xl sm:text-xl mb-12 lg:text-2xl lg:text-left text-center"
          buttonClass="px-20 py-3 text-lg md:text-xl lg:mx-0 mx-auto"
        />
      </div>
      <Image src={IMAGES.algorithmo} alt="graphDetail" width={350} height={390} className="order-1 md:order-1"></Image>
    </div>
  );
};

export default FifthSection;
