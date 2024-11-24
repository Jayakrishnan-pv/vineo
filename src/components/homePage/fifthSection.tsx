import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const FifthSection = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-evenly md:mt-36 md:flex-row">
      <div className="mt-10 text-pretty md:max-w-50%">
        <TextBox
          title="El Algoritmo"
          subtitle="Cada vez que valoras un vino, mejora el algoritmo"
          paragraphs={['Nuestro algoritmo aprende con con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.']}
          buttonText="Comienza"
          showButton={true}
          h2Class="text-4xl mb-10"
          h3Class="text-4xl mb-10 font-bold"
          pClass="text-3xl my-10 "
          buttonClass="px-20 py-4 mb-10"
        />
      </div>
      <Image src={IMAGES.graphDetail} alt="graphDetail" width={380} height={400} className=""></Image>
    </div>
  );
};

export default FifthSection;
