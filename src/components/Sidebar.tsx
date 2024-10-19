// components/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';
import { SIDEBAR_TEXTS } from '@/constants/TextConstants';

type SidebarProps = {
  name: string;
  subscriptionStatus: number;
};

const Sidebar: React.FC<SidebarProps> = ({ name, subscriptionStatus }) => {
  return (
    <div className="fixed h-fit w-64 -translate-x-full rounded-2xl bg-white transition-transform duration-150 ease-in md:m-7 md:translate-x-0 md:shadow-2xl">
      <div className="flex items-center justify-center py-4">
        <div className="mt-5 inline-flex">
          <Image src={IMAGES.vineoLogo} alt="vineo-logo" width={100} height={100} />
        </div>
      </div>
      <div className="px-4 py-6">
        <ul className="flex h-full flex-col justify-between">
          <div>
            {[
              { icon: IMAGES.home, text: SIDEBAR_TEXTS.home },
              { icon: IMAGES.inbox, text: SIDEBAR_TEXTS.virtualWarehouse },
              { icon: IMAGES.star, text: SIDEBAR_TEXTS.subscription },
              { icon: IMAGES.settings, text: SIDEBAR_TEXTS.settings },
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image src={item.icon} alt={`${item.text} icon`} width={25} height={25} />
                  </div>
                  <div className="ml-3 text-gray-600">{item.text}</div>
                </Link>
              </li>
            ))}
          </div>

          <li className="my-32">
            <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center justify-center text-lg text-gray-400">
                <Image src={IMAGES.vector} alt="logout icon" width={20} height={20} />
              </div>
              <div className="ml-3 text-gray-600">{SIDEBAR_TEXTS.logout}</div>
            </Link>
          </li>
          <li className="mb-28 mt-16">
            <Link href="#" className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center justify-center text-lg text-gray-400">
                <Image src={IMAGES.coin} alt="coin icon" width={25} height={25} />
              </div>
              <div>
                <div className="ml-3 text-gray-600">{name}</div>
                <div className="ml-3 block text-xs text-gray-400">
                  {SIDEBAR_TEXTS.subscriptionStatus}
                  {' '}
                  {subscriptionStatus}
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
