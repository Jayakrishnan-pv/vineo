import Image from 'next/image';
import React from 'react';

type SmallCardProps = {
  heading: string;
  desc: string;
  img: string;
};

const SmallCard: React.FC<SmallCardProps> = ({ heading, desc, img }) => {
  return (
    <div className="mx-10 h-full rounded-md">
      <Image src={img} alt="image" width={100} height={100} className="absolute -mt-14 ml-22"></Image>
      <div className="z-0 h-64 w-72 rounded-md border border-gray-100 bg-white p-6 shadow-2xl">
        <h2 className="my-8 text-lg text-gray-600">{heading}</h2>
        <h2 className="mb-6">{desc}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
