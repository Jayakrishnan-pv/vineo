// src/components/Newsletter.tsx

import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

import TextBox from '../reuse/textBox';

const Footer: React.FC = () => {
  return (
    <div className="bg-footerGrad py-12">
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row md:justify-between md:space-x-10">
        <div className="w-4/5 md:w-6/12">
          <Image src={IMAGES.footer} alt="Newsletter Graphic" className="h-auto w-full" width={100} height={100}></Image>
        </div>
        {/* Subscription Form */}
        <div className="mr-10 flex-1 items-center justify-center text-center md:w-1/2 md:text-center">
          <TextBox
            title="No te pierdas ni una"
            subtitle=""
            paragraphs={[
              'Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo',
            ]}
            showButton={false}
          />
          <div className="relative ml-20 w-100p">
            <input type="search" id="search" className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-4 ps-10 text-sm " placeholder="Enter your email" required />
            <button type="submit" className="absolute bottom-2.5 end-2.5 rounded-xl bg-custom-color px-4 py-2 text-sm font-medium text-white">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-12 w-4/5 border-t border-gray-400 py-6 text-center text-sm text-gray-500">
        <div className="h-24 w-32 md:h-32 md:w-52">
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
            <Image src={IMAGES.whatsappf} alt="vineo logo" className="size-8" width={100} height={100}></Image>
            <Image src={IMAGES.fb} alt="vineo logo" className="size-8" width={100} height={100}></Image>
            <Image src={IMAGES.ig} alt="vineo logo" className="size-8" width={100} height={100}></Image>
          </div>
          <p>Copyright © 2023 Vineo. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
