// page.tsx user-dashboard
'use client';

import '@/styles/global.css';

import { Rating } from '@mui/material';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useGetBoxHistoryQuery, useGetSubscriptionStatusQuery } from '@/app/redux/apiSlice';
import { IMAGES } from '@/constants/page';

type Wine = {
  wine_id: number;
  wine_name: string;
  image: string;
  store: string;
  area: string;
  rating: number;
};

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState({
    name: 'User',
    vineoCoins: 0,
    subscriptionStatus: 0,
  });
  const [wineData, setWineData] = useState<Wine[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: boxHistoryData, isFetching } = useGetBoxHistoryQuery({ page, limit: 3 });
  const { data: subscriptionStatusData } = useGetSubscriptionStatusQuery();

  const observer = useRef<IntersectionObserver | null>(null);
  const lastWineElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isFetching) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [isFetching, hasMore]);

  useEffect(() => {
    if (boxHistoryData?.boxes && subscriptionStatusData) {
      setUserData(prevData => ({
        ...prevData,
        subscriptionStatus: subscriptionStatusData.status,
      }));

      const newWines = boxHistoryData.boxes.flatMap((box: any) =>
        box.wines.map((wine: Wine) => ({
          ...wine,
          store: wine.store || 'Unknown Store',
          area: wine.area || 'Unknown Area',
          rating: wine.rating || 0,
        })),
      );

      setWineData(prevWines => [...prevWines, ...newWines]);
      setHasMore(newWines.length > 0);
    }
  }, [boxHistoryData, subscriptionStatusData]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const wineGroups = wineData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [] as Wine[][]);

  return (
    // Side Bar
    <div className="flex min-h-screen flex-row scroll-smooth bg-gray-100 text-gray-800 transition-transform delay-75 duration-150 ease-in">
      <div className="fixed h-5/6 w-64 -translate-x-full rounded-2xl bg-white pb-3 transition-transform duration-150 ease-in md:m-10 md:translate-x-0 md:shadow-2xl">
        <div className="flex items-center justify-center py-4">
          <div className="mt-5 inline-flex">
            <Image src={IMAGES.vineoLogo} alt="vineo-logo" width={100} height={100} />
          </div>
        </div>
        <div className="px-4 py-6">
          <ul className="flex h-full flex-col justify-between">
            <div>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src={IMAGES.home} alt="home icon" width={25} height={25} />
                  </div>
                  <div className="ml-3 text-gray-600">Inicio</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src={IMAGES.inbox} alt="home icon" width={25} height={25} />
                  </div>
                  <div className="ml-3 text-gray-600">Bodega virtual</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src={IMAGES.star} alt="home icon" width={25} height={25} />
                  </div>
                  <div className="ml-3 text-gray-600">Subscription</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-green-400">
                    <Image src={IMAGES.settings} alt="home icon" width={25} height={25} />
                  </div>
                  <div className="ml-3 text-gray-600">Settings</div>
                </Link>
              </li>
            </div>

            <li className="my-32">
              <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center justify-center text-lg text-gray-400">
                  <Image src={IMAGES.vector} alt="home icon" width={20} height={20} />
                </div>
                <div className="ml-3 text-gray-600">Logout</div>
              </Link>
            </li>
            <li className="my-16">
              <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center justify-center text-lg text-gray-400">
                  <Image src={IMAGES.coin} alt="home icon" width={25} height={25} />
                </div>
                <div>
                  <div className="ml-3 text-gray-600">{userData.name}</div>
                  <div className="ml-3 block text-xs text-gray-400">
                    Subscription Status:
                    {' '}
                    {userData.subscriptionStatus}
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right container */}
      <div className="ml-72 w-full">
        <div className="-ml-64 flex grow flex-col transition-all duration-150 ease-in md:ml-0">
          <div className="flex grow flex-col p-4">
            {wineGroups.map((wineGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="m-5 rounded-2xl border-2 bg-white p-4 shadow-2xl md:m-2"
                ref={groupIndex === wineGroups.length - 1 ? lastWineElementRef : null}
              >
                <div>
                  <div className="m-5 text-xl">
                    Your recommendations - Set
                    {' '}
                    {groupIndex + 1}
                  </div>
                  <div className="">
                    <div className="flex flex-col text-center md:flex-row">
                      <div className="m-5 flex grow flex-col rounded-xl py-4 shadow-2xl md:flex-row">
                        {wineGroup.map(wine => (
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
                      <button type="submit" className="btn my-10 rounded-xl px-10 py-4 text-white">Send this box home to me!</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isFetching && (
              <div className="flex w-full items-center justify-center p-4">
                <div className="size-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
              </div>
            )}
            {!hasMore && <div className="mt-4 text-center text-gray-500">No more recommendations to load</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
