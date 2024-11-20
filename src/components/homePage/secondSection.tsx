import React from 'react';

import { secondPage } from '@/constants/TextConstants';

import SmallCard from './smallCards';

const SecondSection = () => {
  return (
    <div className=" flex flex-col items-center justify-around bg-secondBg bg-cover bg-no-repeat py-24">
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
