'use client';
import '@/styles/global.css';

import { useRouter } from 'next/navigation';
import React from 'react';

import EigthSection from '@/components/homePage/eightSection';
import FifthSection from '@/components/homePage/fifthSection';
import Footer from '@/components/homePage/footer';
import FourthSection from '@/components/homePage/fourthSection';
import NinthSection from '@/components/homePage/ninthSection';
import SeventhSection from '@/components/homePage/seventhSection';
import SixthSection from '@/components/homePage/sixthSection';
import SmallCard from '@/components/homePage/smallCards';
import ThirdSection from '@/components/homePage/thirdSection';
import NavBar from '@/components/reuse/navBar';
import { secondPage } from '@/constants/TextConstants';

const HomePage = () => {
  const router = useRouter();

  const question = () => {
    router.push('/question');
  };

  return (
    <div>
      <NavBar showElements />
      <div className="h-screen w-full bg-home-background bg-bottom bg-no-repeat">
        <div className="ml-2 mt-10 p-20 ">
          <h1 className="mb-8 text-4xl font-bold text-blue-950 md:w-full">Descubre el vino perfecto para ti</h1>
          <p className="mb-8 text-2xl text-blue-950 sm:w-full md:w-4/12">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
          <p className="text-2xl text-blue-950 sm:w-full md:w-4/12">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
          <button type="submit" onClick={question} className="btn ml-auto mt-10 rounded-xl px-10 py-2 text-white md:ml-0">Empieza</button>

        </div>
      </div>
      <div className=" flex w-full flex-col items-center justify-around bg-secondBg bg-no-repeat py-24">
        <h1 className="text-center text-3xl text-gray-600">Cómo funciona</h1>
        <div className="m-20 flex flex-col items-center gap-20 py-12 text-center md:flex-row ">
          {Object.values(secondPage).map((section, index) => (
            <SmallCard key={index} heading={section.heading} desc={section.desc} img={section.img} />
          ))}
        </div>
        <button type="submit" className="btn my-10 w-64 rounded-xl px-10 py-4 text-white">
          Contesta el cuestinario
        </button>
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <NinthSection />
      <Footer />
    </div>
  );
};

export default HomePage;
