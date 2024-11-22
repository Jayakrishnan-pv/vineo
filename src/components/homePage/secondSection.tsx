import React from 'react';

import { secondPage } from '@/constants/TextConstants';

import TextBox from '../reuse/textBox';
import SmallCard from './smallCards';

const SecondSection = () => {
  return (
    <div className=" flex flex-col items-center justify-around bg-secondBg bg-cover bg-no-repeat py-24">
      <TextBox
        title=""
        subtitle="Apúntate a la lista y aprovéchate de la oferta de lanzamiento"
        paragraphs={[
          '5€ de descuento PARA SIEMPRE',
        ]}
        h2Class="text-center"
        pClass="text-center font-normal"
        showButton={false}
      />
      <div className="relative mb-16 w-30p md:w-2/6">
        <input type="search" id="search" className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-4 ps-10 text-sm " placeholder="email" required />
        <button type="submit" className="absolute bottom-2.5 end-2.5 rounded-xl bg-custom-color px-4 py-2 text-sm font-medium text-white">Apúntate</button>
      </div>
      <h1 className="text-center text-3xl text-gray-600">Cómo funciona</h1>
      <div className="my-10 flex flex-col flex-wrap items-center justify-around text-center md:flex-row ">
        {Object.values(secondPage).map((section, index) => (
          <SmallCard key={index} heading={section.heading} desc={section.desc} img={section.img} />
        ))}
      </div>
      <button type="submit" className="btn my-10 w-64 rounded-xl px-10 py-4 text-white">
        Contesta el cuestinario
      </button>
    </div>
  );
};

export default SecondSection;
