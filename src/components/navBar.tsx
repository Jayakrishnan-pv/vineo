import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMAGES } from '@/constants/ImageConstants';

const NavBar = () => {
  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 backdrop-blur-sm  ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Image src={IMAGES.vineoLogo} width={100} height={60} className="h-8" alt="Flowbite Logo"></Image>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="rounded-lg border-2 border-custom-color p-3 px-6 text-center text-sm font-medium text-custom-color ">Access</button>
          {/* <button data-collapse-toggle="navbar-sticky" type="button" className="mt-1 inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
            <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
        </div>
        <div className="ml-auto hidden w-full items-center justify-between p-3 md:order-1 md:flex md:w-auto" id="navbar-sticky">
          <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
            <Link href="/" className="block rounded px-3 py-2 text-red-400" aria-current="page">
              Give Vineo as a gift
            </Link>
            <button type="button" className="rounded-lg bg-custom-color p-3 px-6 text-center text-sm font-medium text-white">Begin</button>
          </ul>
        </div>
      </div>

    </nav>

  );
};

export default NavBar;
