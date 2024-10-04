'use client';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in');
  };
  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute bg-no-repeat"
        style={{
          backgroundImage: 'url(\'/Bannerr (3) 2.png\')',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          width: '100%',
          height: '100%',
        }}
      >
      </div>
      <div className="container p-14">
        <Image src="/image 28.png" alt="vineo-logo"width={100} height={50} className="mb-12"></Image>
        <h1 className="mb-8 text-4xl font-bold text-blue-950 md:w-full">Descubre el vino perfecto para ti</h1>
        <p className="mb-8 text-2xl text-blue-950 sm:w-full md:w-full lg:w-1/4">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
        <p className="text-2xl text-blue-950 sm:w-full md:w-full lg:w-1/4">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
        <Button variant="contained" className="my-10 rounded-xl bg-red-400 px-10" onClick={handleSignIn}>Login</Button>
      </div>
    </div>
  );
};

export default HomePage;
