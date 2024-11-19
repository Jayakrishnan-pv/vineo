'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdClose, MdMenu } from 'react-icons/md';

import { IMAGES } from '@/constants/ImageConstants';

import type { NavBarProps } from './types';

const NavBar: React.FC<NavBarProps> = ({ showElements }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  const home = () => {
    router.push('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-10 flex h-20 w-full items-center justify-between px-10 backdrop-blur-lg">
      <Image src={IMAGES.vineoLogo} width={100} onClick={home} height={60} className="h-8" alt="Vineo Logo"></Image>
      <div className="flex w-3/4 items-center justify-around pl-16 md:w-200p ">
        {showElements && (
          <>
            <Link href="/" className="hidden text-custom-color md:inline">Give Vineo as a gift</Link>
            <button type="submit" className="btn hidden rounded-xl px-10 py-2 text-white sm:ml-auto sm:inline md:ml-0">Begin</button>
            <button type="submit" onClick={handleSignIn} className="hidden rounded-xl border-2 border-custom-color px-10 py-2 text-custom-color md:inline">Access</button>
            <button type="submit" className="hidden rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600 md:inline">
              <AiOutlineWhatsApp />
            </button>
          </>
        )}
      </div>
      {showElements && (
        <div className="relative ml-5 md:hidden">
          {isMenuOpen
            ? (
                <MdClose className="size-8" onClick={toggleMenu} />
              )
            : (
                <MdMenu className="size-8" onClick={toggleMenu} />
              )}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 flex w-52 grow flex-col items-center justify-around rounded-xl border bg-white p-3 ">
              <Link href="/" className="mb-2 px-4 py-2 text-custom-color hover:text-white">Give Vineo as a gift</Link>
              <button type="submit" className="btn mb-2 w-full rounded-xl px-10 py-2 text-white md:ml-0">Begin</button>
              <button type="submit" onClick={handleSignIn} className=" mb-2 w-full rounded-xl border-2 border-custom-color px-4 py-2 text-custom-color hover:bg-gray-100">Access</button>
              <button type="submit" className=" rounded-full bg-green-500 p-2 text-left text-white transition-colors hover:bg-green-600">
                <AiOutlineWhatsApp />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
