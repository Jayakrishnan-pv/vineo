// app/user-dashboard/page.tsx
'use client';

import '@/styles/global.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useGetBoxHistoryQuery, useGetSubscriptionStatusQuery } from '@/app/redux/apiSlice';
import Sidebar from '@/components/Sidebar';
import WineBox from '@/components/WineBox';

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

  const { data: boxHistoryData, isFetching } = useGetBoxHistoryQuery({ page, limit: 4 });
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

  const wineGroups = wineData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [] as Wine[][]);

  return (
    <div className="flex min-h-screen flex-row scroll-smooth bg-gray-100 text-gray-800 transition-transform delay-75 duration-150 ease-in">
      <Sidebar name={userData.name} subscriptionStatus={userData.subscriptionStatus} />

      <div className="ml-72 w-full">
        <div className="-ml-64 flex grow flex-col transition-all duration-150 ease-in md:ml-0">
          <div className="flex grow flex-col p-4">
            {wineGroups.map((wineGroup, groupIndex) => (
              <div key={groupIndex} ref={groupIndex === wineGroups.length - 1 ? lastWineElementRef : null}>
                <WineBox wines={wineGroup} setNumber={groupIndex + 1} />
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
