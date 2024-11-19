import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const SeventhSection = () => {
  return (
    <div className="h-full bg-fifthBg bg-contain bg-right bg-no-repeat">
      <div className="flex w-full flex-col items-center justify-around md:flex-row">
        <div className="">
          <Image
            src={IMAGES.gif}
            alt="Vineo GIF"
            width={400}
            height={200}
            className="mb-4 rounded-xl border backdrop-blur-sm"
          />
        </div>
        <div className="md:max-w-60">
          <TextBox
            title="Tus Beneficios"
            subtitle="Vineo Coins"
            paragraphs={[
              'Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas',
            ]}
            buttonText="Comienza"
            showButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
