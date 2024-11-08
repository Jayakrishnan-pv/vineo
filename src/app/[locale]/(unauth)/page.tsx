'use client';
import '@/styles/global.css';

import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

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

  const secondPage = {
    first: 'Contesta el cuestionario',
    second: 'Descubre tus preferencias vinícolas con solo 12 sencillas preguntas',

  };

  return (
    <div>
      <div className="relative h-screen w-full bg-home-background bg-bottom bg-no-repeat">
        <div className="container z-10 p-14">
          <Image src={IMAGES.vineoLogo} alt="vineo-logo" width={100} height={50} className="mb-12"></Image>
          <h1 className="mb-8 text-4xl font-bold text-blue-950 md:w-full">Descubre el vino perfecto para ti</h1>
          <p className="mb-8 text-2xl text-blue-950 sm:w-full md:w-full lg:w-1/4">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
          <p className="text-2xl text-blue-950 sm:w-full md:w-full lg:w-1/4">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
          <Button variant="contained" sx={Btnstyle} onClick={handleSignIn}>Empieza</Button>
        </div>
      </div>
      <div className=" flex h-screen w-full flex-col items-center justify-end bg-secondBg bg-no-repeat">
        <h1 className="mb-32 text-center text-3xl text-gray-600">Cómo funciona</h1>
        <div className="mx-auto h-72 w-8/12 p-12 text-center">
          <div className="h-full w-80">
            <Image src={IMAGES.vineo_ilustracian} alt="image" width={100} height={100} className="absolute -mt-14 ml-24"></Image>
            <div className="z-0 h-64 w-72 rounded-md border border-gray-100 bg-white p-6 shadow-2xl">
              <h2 className="my-8 text-lg text-gray-600">Contesta el cuestionario</h2>
              <h2 className="mb-6">Descubre tus preferencias vinícolas con solo 12 sencillas preguntas</h2>
            </div>
          </div>
        </div>
        <button type="submit" className="btn my-10 rounded-xl px-10 py-4 text-white">
          Contesta el cuestinario
        </button>
      </div>
    </div>
  );
};

export default HomePage;
