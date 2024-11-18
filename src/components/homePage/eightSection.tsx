'use client';
import '@/styles/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SubscriptionCard from '../reuse/SubscriptionCard';
import TextBox from '../reuse/textBox';

const EigthSection = () => {
  const activeSubscription = {
    title: 'VINEO IA',
    subTitle: 'Suscripción a la IA de Vineo',
    amount: '5',
    description: [
      'Perfilado a medida',
      '1 recomendación de 3 vinos al mes según tus gustos',
      'Cancelación gratuita en cualquier momento',
    ],
    paymentLink: '',
    isActive: true,
    showButton: false,
    renewalDate: '2024-12-01',
  };
  const inactiveSubscription = {
    title: 'VINEO BOX',
    subTitle: 'Suscripción con caja mensual',
    amount: '55',
    description: [
      'Perfilado a medida',
      '1 caja de 3 vinos al mes según tus gustos',
      'Cancelación gratuita en cualquier momento',
    ],
    paymentLink: '',
    isActive: false,
    showButton: true,
    renewalDate: '',
  };
  const freeSubscription = {
    title: 'VINEO BOX',
    subTitle: 'Suscripción con caja mensual',
    amount: '0',
    description: [
      'Perfilado a medida',
      '1 caja de 3 vinos al mes según tus gustos',
      'Cancelación gratuita en cualquier momento',
    ],
    paymentLink: '',
    isActive: false,
    showButton: true,
    renewalDate: '',
  };

  const subscriptions = [freeSubscription, activeSubscription, inactiveSubscription];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-secondBg bg-no-repeat">
      <TextBox
        title="Elige el servicio que mejor se adapta a ti"
        subtitle="Vineo a tu medida"
        paragraphs={[]}
        showButton={false}
      />
      <div className="h-screen w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
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
          {subscriptions.map((subscription, index) => (
            <SwiperSlide key={index} className="flex w-full items-center justify-center">
              <SubscriptionCard {...subscription} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EigthSection;
