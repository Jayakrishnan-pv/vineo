import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const SeventhSection = () => {
  return (
    <div className="min-h-98 w-full bg-fifthBg bg-contain bg-right bg-no-repeat">
      <div className="flex flex-col items-center justify-around lg:flex-row">
        <div className="">
          <Image
            src={IMAGES.gif}
            alt="Vineo GIF"
            width={400}
            height={200}
            className="mb-4 rounded-xl border backdrop-blur-sm"
          />
        </div>
        <div className="mx-5 mt-20 text-pretty lg:max-w-50%">
          <TextBox
            title="Tus Beneficios"
            subtitle="Vineo Coins"
            paragraphs={[
              'Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas',
            ]}
            buttonText="Comienza"
            showButton={true}
            h2Class="text-4xl "
            h3Class="text-4xl bold"
            pClass="text-3xl"
            buttonClass="px-20 py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
