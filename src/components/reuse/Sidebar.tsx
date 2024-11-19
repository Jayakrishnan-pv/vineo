// sidebar
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';
import { SIDEBAR_TEXTS } from '@/constants/TextConstants';
import { useLogout } from '@/utils/LogOut';

import type { SidebarProps } from './types';

const Sidebar: React.FC<SidebarProps> = ({ name, subscriptionStatus }) => {
  const logout = useLogout();

  return (
    <div className="fixed mx-4 my-5 mr-5 h-90p w-16 rounded-2xl bg-white shadow-2xl transition-all duration-150 ease-in md:m-7 md:w-64">
      <div className="flex items-center justify-center py-4">
        <div className="mt-5 inline-flex">
          <Image
            src={IMAGES.vineoLogo}
            alt="vineo-logo"
            width={100}
            height={100}
            className="w-[40px] md:w-[100px]"
          />
        </div>
      </div>
      <div className="flex h-5/6 flex-col justify-between px-2 pt-5 md:px-5">
        <div className="mb-5 flex flex-col justify-between">
          <div>
            {[
              { icon: IMAGES.home, text: SIDEBAR_TEXTS.home, href: SIDEBAR_TEXTS.userdashboard },
              { icon: IMAGES.inbox, text: SIDEBAR_TEXTS.virtualWarehouse, href: '' },
              { icon: IMAGES.star, text: SIDEBAR_TEXTS.subscription, href: SIDEBAR_TEXTS.subscriptionCard },
              { icon: IMAGES.inbox, text: SIDEBAR_TEXTS.history, href: SIDEBAR_TEXTS.admindashboard },
              { icon: IMAGES.settings, text: SIDEBAR_TEXTS.settings, href: '' },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <Link
                  href={item.href}
                  className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <div className="flex items-center justify-center text-lg text-gray-400">
                    <Image
                      src={item.icon}
                      alt={`${item.text} icon`}
                      width={25}
                      height={25}
                    />
                  </div>
                  <div className="ml-3 hidden text-gray-600 md:block">{item.text}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            onClick={logout}
            className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center justify-center text-lg text-gray-400">
              <Image
                src={IMAGES.vector}
                alt="logout icon"
                width={20}
                height={20}
              />
            </div>
            <div className="ml-3 hidden text-gray-600 md:block">{SIDEBAR_TEXTS.logout}</div>
          </button>
        </div>
        <div className="">
          <Link
            href="#"
            className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center justify-center text-lg text-gray-400">
              <Image
                src={IMAGES.coin}
                alt="coin icon"
                width={25}
                height={25}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-3 text-gray-600">{name}</div>
              <div className="ml-3 block text-xs text-gray-400">
                {SIDEBAR_TEXTS.subscriptionStatus}
                {' '}
                {subscriptionStatus}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
