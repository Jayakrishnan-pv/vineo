'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const FirstSection = () => {
  const router = useRouter();

  const question = () => {
    router.push('/question');
  };

  return (
    <div className="h-742 w-full bg-home-background bg-bottom bg-no-repeat lg:bg-cover">
      <div className="ml-10 mt-20 py-5 ">
        <h1 className="mb-8 text-4xl font-bold text-blue-950 md:w-full">Descubre el vino perfecto para ti</h1>
        <p className="mb-8 text-xl text-blue-950 sm:w-full md:w-4/12">Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas</p>
        <p className="text-xl text-blue-950 sm:w-full md:w-4/12">Sorpréndete con nuevos sabores y experiencias inolvidables</p>
        <button type="submit" onClick={question} className="btn ml-auto mt-10 rounded-xl px-10 py-2 text-white md:ml-0">Empieza</button>
      </div>
    </div>
  );
};

export default FirstSection;
