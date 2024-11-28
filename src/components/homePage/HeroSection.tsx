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
        <h1 className="mb-8 w-3/4 text-2xl font-bold md:w-full md:text-3xl lg-l:text-4xl">Descubre el vino perfecto para ti</h1>
        <p className="mb-8 w-2/4 text-lg sm:w-2/4 md:w-4/12 md:text-xl lg-l:text-2xl">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
        <p className="w-2/4 text-lg sm:w-2/4 md:w-4/12 md:text-xl lg-l:text-2xl">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
        <button type="submit" onClick={question} className="btn mt-10 rounded-xl px-10 py-2 text-white md:ml-0">Empieza</button>
      </div>
    </div>
  );
};

export default HeroSection;
