import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const SeventhSection = () => {
  return (
    <div className="min-h-98 w-full bg-fifthBg bg-contain bg-right bg-no-repeat">
      <div className="flex flex-col items-center justify-around lg:flex-row">
        <div className="mb-5 mt-24">
          <Image
            src={IMAGES.gif}
            alt="Vineo GIF"
            width={400}
            height={200}
            className="rounded-xl border-2  backdrop-blur-sm"
          />
        </div>
        <div className="text-pretty lg:mt-8 lg:max-w-40%">
          <TextBox
            title="Tus Beneficios"
            subtitle="Vineo Coins"
            paragraphs={[
              'Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas',
            ]}
            buttonText="Comienza"
            showButton={true}
            h2Class="text-2xl lg:text-3xl mb-8 lg:text-left text-center "
            h3Class="text-2xl lg:text-3xl mb-10 font-bold lg:max-w-70% lg:text-left text-center"
            pClass="text-xl sm:text-xl mb-12 lg:text-2xl lg:text-left text-center"
            buttonClass="px-20 py-4 lg:mx-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
