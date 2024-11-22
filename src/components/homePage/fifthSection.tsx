import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const FifthSection = () => {
  return (
    <div className="mb-20 mt-36 flex w-full flex-col items-center justify-around md:flex-row">
      <div className="mt-10 max-w-50">
        <TextBox
          title="El Algoritmo"
          subtitle="Cada vez que valoras un vino, mejora el algoritmo"
          paragraphs={['Nuestro algoritmo aprende con con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.']}
          buttonText="Comienza"
          showButton={true}
        />
      </div>
      <Image src={IMAGES.graphDetail} alt="graphDetail" width={325} height={425} className=""></Image>
    </div>
  );
};

export default FifthSection;
