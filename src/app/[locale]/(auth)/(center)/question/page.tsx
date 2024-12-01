'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { useGetQuestionsQuery } from '@/app/redux/endPoints/questionEndpoints';
import NavBar from '@/components/reuse/navBar';
import { IMAGES } from '@/constants/ImageConstants';

const WinePreferenceQuestion = () => {
  const { data: questionObj, isLoading } = useGetQuestionsQuery();

  console.log('question data', questionObj);
  
  const [selected, setSelected] = useState(null);
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
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-14 bg-secondBg bg-no-repeat py-8">
        {/* Question */}
        <h2 className="text-2xl font-semibold text-gray-800">
          1. ¿Cómo es tu vino preferido?
        </h2>
        <Image src={IMAGES.Capa_1} alt=" logo" className="size-20" width={100} height={100}></Image>
        {/* Options */}
        <div className="flex w-full flex-wrap justify-center gap-4 ">
          {options.map(option => (
            <div
              key={option.id}
              onClick={() => handleSelect(option.id)}
              onKeyDown={e => handleKeyDown(e, option.id)}
              tabIndex="0"
              role="button"
              className={`w-48 cursor-pointer rounded-xl border-2 p-4 shadow transition duration-200 ease-in-out hover:border-gray-300 hover:bg-queGrad hover:shadow-2xl 
              ${
            selected === option.id
              ? 'border-none bg-queGrad text-gray-800 '
              : 'bg-white text-gray-700'
            }`}
            >
              <h3 className="mb-2 text-center text-lg font-bold">{option.title}</h3>
              <p className="text-sm">
                {option.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex space-x-10 text-4xl text-custom-color">
          <GrPrevious />
          <GrNext />
        </div>
      </div>
    </>
  );
};

export default WinePreferenceQuestion;
