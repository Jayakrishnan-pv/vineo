'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const HeroSection = () => {
  const router = useRouter();

  const question = () => {
    router.push('/question');
  };

  return (
    <div className="h-742 w-full text-pretty bg-home-background bg-bottom bg-no-repeat lg:bg-cover">
      <div className="ml-5 mt-20 py-5 text-blue-950 md:ml-10">
        <h1 className="font-boldmd:w-full mb-8 text-2xl md:text-3xl lg-l:text-4xl">Descubre el vino perfecto para ti</h1>
        <p className="mb-8 text-lg sm:w-full md:w-4/12 md:text-2xl lg-l:text-3xl">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
        <p className="text-lg sm:w-full md:w-4/12 md:text-2xl lg-l:text-3xl">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
        <button type="submit" onClick={question} className="btn ml-auto mt-10 rounded-xl px-10 py-2 text-white md:ml-0">Empieza</button>
      </div>
    </div>
  );
};

export default HeroSection;
