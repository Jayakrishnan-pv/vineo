'use client';

import '@/styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetSubscriptionListQuery, useGetSubscriptionStatusQuery } from '@/app/redux/apiSlice';
import Sidebar from '@/components/Sidebar';
import SubscriptionCard from '@/components/SubscriptionCard';

const SubscriptionPage = () => {
  const { data: subscriptionStatusData } = useGetSubscriptionStatusQuery();
  const activeSubscriptionType = subscriptionStatusData?.type;
  const expDate = subscriptionStatusData?.end_date;

  const { data: subscriptions, isLoading } = useGetSubscriptionListQuery([10, 30, 40]);

  console.log('usrstatus', subscriptionStatusData);
  console.log('list', subscriptions);

  return (
    <div className="flex flex-row text-gray-800 transition-transform delay-75 duration-150 ease-in">
      <Sidebar />
      <div className="ml-24 mr-5 mt-6 flex w-full flex-col items-center rounded-2xl bg-white px-12 shadow-2xl md:ml-74">
        <h1 className="left-0 my-12 w-full text-3xl font-semibold">Gestiona tu suscripción</h1>
        <div className="flex w-90p flex-row px-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {subscriptions && subscriptions.map(subscription => (
              <SwiperSlide key={subscription._id}>
                <SubscriptionCard
                  title={subscription.title}
                  subTitle={subscription.sub_title}
                  amount={subscription.amount}
                  description={subscription.description}
                  paymentLink={subscription.payment_link}
                  isActive={subscription.type === activeSubscriptionType}
                  showButton={subscription.type !== activeSubscriptionType}
                  renewalDate={expDate}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="m-12 flex w-full flex-row-reverse">
          <button
            type="submit"
            className="mt-8 rounded bg-red-100 px-6 py-2 text-red-600 shadow transition hover:bg-red-200"
          >
            Cancelar suscripción
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
