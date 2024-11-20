// WineBox.tsx
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/global.css';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IMAGES } from '@/constants/ImageConstants';

import type { WineBoxProps } from './types';
import WineCard from './WineCard';

const WineBox: React.FC<WineBoxProps> = ({ wines, setNumber }) => {
  return (
    <div className="mb-5 ml-14 w-3/5 rounded-2xl border-2 p-4 shadow-2xl lg:w-11/12">
      <div className="flex flex-col ">
        <div className="m-5  text-xl">
          Your recommendations - Set
          {' '}
          {setNumber}
        </div>
        <div className="flex flex-col  lg-c:flex-row">
          <div className="m-5  rounded-xl  py-4 shadow-2xl">
            <div className=" swiper-width flex justify-around ">
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
                className=""
              >
                {wines.map(wine => (
                  <SwiperSlide key={wine.wine_id} className="flex justify-center ">
                    <WineCard wine={wine} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="m-5 flex flex-col items-center justify-center rounded-xl shadow-2xl">
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
