// components/WineBox.tsx
import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

type Wine = {
  wine_id: number;
  wine_name: string;
  image: string;
  store: string;
  area: string;
  rating: number;
};

type WineBoxProps = {
  wines: Wine[];
  setNumber: number;
};

const WineBox: React.FC<WineBoxProps> = ({ wines, setNumber }) => {
  return (
    <div className="m-5 rounded-2xl border-2 bg-white p-4 shadow-2xl md:m-2">
      <div>
        <div className="m-5 text-xl">
          Your recommendations - Set
          {setNumber}
        </div>
        <div className="">
          <div className="flex flex-col text-center md:flex-row">
            <div className="m-5 flex grow flex-col rounded-xl py-4 shadow-2xl md:flex-row">
              {wines.map(wine => (
                <div key={wine.wine_id} className="flex grow flex-col items-center">
                  <Image
                    src={wine.image}
                    alt={`${wine.wine_name} bottle`}
                    width={100}
                    height={100}
                    className="size-48 object-contain"
                  />
                  <div className="text-red-400">{wine.wine_name}</div>
                  <div className="mt-5 text-sm text-gray-400">{wine.store}</div>
                  <div className="mb-5 text-sm text-gray-400">{wine.area}</div>
                  <Rating name="read-only" value={wine.rating} readOnly className="custom-rating" />
                </div>
              ))}
            </div>
            <div className="my-5 flex grow flex-col rounded-xl shadow-2xl">
              <Image
                src={IMAGES.graph}
                alt="graph"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="btn my-10 rounded-xl px-10 py-4 text-white">
              Send this box home to me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineBox;
