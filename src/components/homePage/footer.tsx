// src/components/footer.tsx
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const Footer: React.FC = () => {
  return (
    <div className="bg-footerGrad">
      <div className="flex w-full flex-col items-center px-6 lg:flex-row">
        <div className="overflow-hidden">
          <Image src={IMAGES.footer} alt="Newsletter Graphic" className="relative left-10 sm:left-24 lg:left-auto" width={1200} height={1200}></Image>
        </div>
        {/* Subscription Form */}
        <div className="flex flex-col items-center justify-center text-pretty text-center md:w-5/6">
          <TextBox
            title="No te pierdas ni una"
            subtitle=""
            paragraphs={[
              'Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo',
            ]}
            showButton={false}
            h2Class="text-3xl lg:text-3xl mb-10 font-bold text-center"
            pClass="text-xl text-black font-normal sm:text-xl mb-10 lg:text-2xl text-center"
          />
          <div className="relative w-30p sm:min-w-90%">
            <input type="search" id="search" className="block h-16 w-full rounded-xl border border-gray-300 bg-gray-50 p-4 text-lg lg:text-xl " placeholder="Enter your email" required />
            <button type="submit" className="absolute bottom-2.5 end-2.5 rounded-xl bg-custom-color px-4 py-2 text-lg font-medium text-white lg:text-xl">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-12 w-4/5 border-t border-gray-400 py-6 text-center text-sm text-gray-500">
        <div className="h-24 w-32 lg:h-32 lg:w-52">
          <Image src={IMAGES.vineoLogo} alt="vineo logo" className="h-auto w-full" width={100} height={100}></Image>
        </div>
        <div className="flex h-52 flex-col justify-between">
          <div className="mb-4 flex justify-center space-x-4 font-semibold">
            <a href="/" className="text-gray-600 hover:text-gray-800">Terms Of Use</a>
            <a href="/" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="/" className="text-gray-600 hover:text-gray-800">Support</a>
          </div>
          <h2 className="font-semibold">Follow as on social media</h2>
          <div className="mb-4 flex h-10 w-full items-center justify-center space-x-4">
            <Image src={IMAGES.whatsappf} alt="whatsapp logo" className="size-8" width={100} height={100}></Image>
            <Image src={IMAGES.fb} alt="facbook logo" className="size-8" width={100} height={100}></Image>
            <Image src={IMAGES.ig} alt="instagram logo" className="size-8" width={100} height={100}></Image>
          </div>
          <p>Copyright © 2023 Vineo. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
