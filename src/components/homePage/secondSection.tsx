// SecondSection.tsx
import React from 'react';

import { secondPage } from '@/constants/TextConstants';

import TextBox from '../reuse/textBox';
import SmallCard from './smallCards';

const SecondSection = () => {
  return (
    <div className=" flex flex-col items-center justify-around bg-secondBg bg-cover bg-no-repeat py-5">
      <TextBox
        title=""
        subtitle="Apúntate a la lista y aprovéchate de la oferta de lanzamiento"
        paragraphs={[
          '5€ de descuento PARA SIEMPRE',
        ]}
        h2Class="text-center"
        h3Class="text-center mb-2 lg:text-4xl md:text-2xl text-xl"
        pClass="text-center font-normal sm:text-xl text-sm mb-5"
        showButton={false}
      />
      <div className="relative mb-16 w-30p md:w-2/5">
        <input type="search" id="search" className="block h-16 w-full rounded-xl border p-4 ps-10 text-lg focus:outline-none" placeholder="email" required />
        <button type="submit" className="absolute bottom-2.5 end-2.5 rounded-xl bg-custom-color px-4 py-2 text-lg font-medium text-white lg:px-10 lg-m:px-16">Apúntate</button>
      </div>
      <h1 className="text-center text-3xl text-gray-600 lg:text-4xl">Cómo funciona</h1>
      <div className="mt-20 flex w-full flex-col items-center justify-evenly text-center sm:px-10 lg:flex-row ">
        {Object.values(secondPage).map((section, index) => (
          <SmallCard key={index} heading={section.heading} desc={section.desc} img={section.img} />
        ))}
      </div>
      <button type="submit" className="btn my-10 rounded-xl px-4 py-2 text-white md:px-24 md:py-4">
        Contesta el cuestinario
      </button>
    </div>
  );
};

export default SecondSection;
