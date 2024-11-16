// app/components/WinePreferenceQuestion.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import NavBar from '@/components/reuse/navBar';
import { IMAGES } from '@/constants/ImageConstants';

const WinePreferenceQuestion = () => {
  // State to track the selected card
  const [selected, setSelected] = useState(null);

  // Options data
  const options = [
    {
      id: 1,
      title: 'Ligero',
      description:
        'Un sorbo ligero como una pluma, que baila en el paladar con elegancia y frescura.',
    },
    {
      id: 2,
      title: 'Afrutado',
      description:
        'Una sinfonía de sabores jugosos y dulces que envuelven el paladar, como una cascada de frutas en cada sorbo.',
    },
    {
      id: 3,
      title: 'Con cuerpo',
      description:
        'Un vino que abraza el paladar con su carácter audaz y seductor, como un abrazo de terciopelo en cada copa.',
    },
    {
      id: 4,
      title: 'Potente',
      description:
        'Un torbellino de sabores intensos y audaces que conquistan el paladar, dejando una estela memorable en cada sorbo.',
    },
  ];

  const handleSelect = (id) => {
    setSelected(id);
  };

  const handleKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(id);
    }
  };

  return (
    <>
      <NavBar showElements={false} />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-secondBg bg-no-repeat py-8">
        {/* Question */}
        <h2 className="mb-16 text-2xl font-semibold text-gray-800">
          1. ¿Cómo es tu vino preferido?
        </h2>
        <Image src={IMAGES.Capa_1} alt=" logo" className="mb-10 size-20" width={100} height={100}></Image>
        {/* Options */}
        <div className="flex w-full flex-wrap justify-center gap-4">
          {options.map(option => (
            <div
              key={option.id}
              onClick={() => handleSelect(option.id)}
              onKeyDown={e => handleKeyDown(e, option.id)}
              tabIndex="0"
              role="button"
              className={`w-40 cursor-pointer rounded-lg p-4 shadow transition duration-200 ease-in-out 
              ${
            selected === option.id
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-700'
            }`}
            >
              <h3 className="mb-2 text-lg font-bold">{option.title}</h3>
              <p className="text-sm">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WinePreferenceQuestion;
