'use client';
import '@/styles/global.css';

import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

import FifthSection from '@/components/homePage/fifthSection';
import Footer from '@/components/homePage/footer';
import FourthSection from '@/components/homePage/fourthSection';
import SeventhSection from '@/components/homePage/seventhSection';
import SixthSection from '@/components/homePage/sixthSection';
import SmallCard from '@/components/homePage/smallCards';
import ThirdSection from '@/components/homePage/thirdSection';
import NavBar from '@/components/reuse/navBar';
import { secondPage } from '@/constants/TextConstants';

const HomePage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  const Btnstyle = {
    backgroundColor: '#f87171',
    marginY: '30px',
    borderRadius: '10px',
    paddingLeft: '40px',
    paddingRight: '40px',
  };

  return (
    <div>
      <NavBar showElements={true} />
      <div className="h-screen w-full bg-home-background bg-bottom bg-no-repeat">
        <div className="ml-2 mt-10 p-20 ">
          <h1 className="mb-8 text-4xl font-bold text-blue-950 md:w-full">Descubre el vino perfecto para ti</h1>
          <p className="mb-8 text-2xl text-blue-950 sm:w-full md:w-4/12">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
          <p className="text-2xl text-blue-950 sm:w-full md:w-4/12">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
          <Button variant="contained" sx={Btnstyle} onClick={handleSignIn}>Empieza</Button>
        </div>
      </div>
      <div className=" flex w-full flex-col items-center justify-around bg-secondBg bg-no-repeat py-24">
        <h1 className="text-center text-3xl text-gray-600">Cómo funciona</h1>
        <div className="m-20 flex flex-col items-center py-12 text-center md:flex-row ">
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
      <Footer />
    </div>
  );
};

export default HomePage;
