import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/global.css';

import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const WineCard = ({ wine }: { wine: Wine }) => (
  <div className="flex grow flex-col items-center p-4">
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
);

const WineBox: React.FC<WineBoxProps> = ({ wines, setNumber }) => {
  return (
    <div className="m-5 ml-14 max-w-screen-sm-c rounded-2xl border-2 bg-white p-4 shadow-2xl sm:max-w-screen-md-c md:m-2 lg:max-w-screen-lg-c">
      <div className="flex flex-col">
        <div className="m-5 text-xl">
          Your recommendations - Set
          {' '}
          {setNumber}
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="m-5 max-w-full grow overflow-hidden rounded-xl py-4 shadow-2xl">
            {/* Desktop View (lg and above) */}
            <div className="hidden lg:flex lg:flex-row">
              {wines.map(wine => (
                <WineCard key={wine.wine_id} wine={wine} />
              ))}
            </div>
            {/* Tablet/Mobile View (below lg) */}
            <div className="max-w-full lg:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                  440: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="max-w-full"
              >
                {wines.map(wine => (
                  <SwiperSlide key={wine.wine_id} className="flex justify-center">
                    <WineCard wine={wine} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="m-5 flex grow flex-col items-center rounded-xl shadow-2xl">
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
  );
};

export default WineBox;
