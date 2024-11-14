import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdMenu } from 'react-icons/md';

import { IMAGES } from '@/constants/ImageConstants';

const NavBar = () => {
  return (
    <div className="fixed top-0 flex h-24 w-full items-center justify-between px-10 backdrop-blur-lg">
      <Image src={IMAGES.vineoLogo} width={100} height={60} className="h-8" alt="Vineo Logo"></Image>
      <div className="flex w-3/4 items-center justify-around pl-16 lg:w-2/5">
        <Link href="/" className="hidden text-custom-color md:inline">Give Vineo as a gift</Link>
        <button type="submit" className="btn ml-auto rounded-xl px-10 py-2 text-white md:ml-0">Begin</button>
        <button type="submit" className="hidden rounded-xl border-2 border-custom-color px-10 py-2 text-custom-color md:inline">Access</button>
        <button type="submit" className="hidden rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600 md:inline">
          <AiOutlineWhatsApp />
        </button>
      </div>
      <MdMenu className="size-8 md:hidden" />
    </div>
  );
};

export default NavBar;
