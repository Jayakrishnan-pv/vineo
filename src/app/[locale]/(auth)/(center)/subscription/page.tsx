'use client';

import '@/styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetSubscriptionListQuery, useGetSubscriptionStatusQuery } from '@/app/redux/endPoints/subscriptionEndpoints';
import Sidebar from '@/components/reuse/Sidebar';
import SubscriptionCard from '@/components/reuse/SubscriptionCard';

const SubscriptionPage = () => {
  const { data: subscriptionStatusData } = useGetSubscriptionStatusQuery();
  const activeSubscriptionType = subscriptionStatusData?.type;
  const expDate = subscriptionStatusData?.end_date;
  const { data: subscriptions, isLoading } = useGetSubscriptionListQuery([10, 30, 40]);
  console.log('sub', subscriptions);
  return (
    <>
      <Sidebar name="name" subscriptionStatus={0} />
      <div className="ml-24 mr-5 mt-5 flex flex-col items-center rounded-2xl bg-white shadow-2xl md:ml-74">
        <h1 className="left-0 my-12 w-full px-5 text-3xl font-semibold">Gestiona tu suscripción</h1>
        <div className="flex w-90p flex-row px-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1220: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1290: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {subscriptions && subscriptions.map((subscription) => {
              let mainTitle;
              if (subscription.amount === 0) {
                mainTitle = 'Vineo Free';
              } else if (subscription.amount === 5) {
                mainTitle = 'Vineo IA';
              } else if (subscription.amount === 55) {
                mainTitle = 'Vineo Box';
              }

              return (
                <SwiperSlide key={subscription._id}>
                  <SubscriptionCard
                    mainTitle={mainTitle}
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
              );
            })}
          </Swiper>
        </div>
        <div className="m-12 flex w-full flex-row-reverse">
          <button
            type="submit"
            className="mr-10 mt-8 rounded bg-red-100 px-6 py-2 text-red-600 shadow transition hover:bg-red-200"
          >
            Cancelar suscripción
          </button>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
