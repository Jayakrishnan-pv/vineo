'use client';
import '@/styles/global.css';

import React from 'react';

import EigthSection from '@/components/homePage/eightSection';
import FifthSection from '@/components/homePage/fifthSection';
import Footer from '@/components/homePage/footer';
import FourthSection from '@/components/homePage/fourthSection';
import HeroSection from '@/components/homePage/HeroSection';
import NinthSection from '@/components/homePage/ninthSection';
import SecondSection from '@/components/homePage/secondSection';
import SeventhSection from '@/components/homePage/seventhSection';
import SixthSection from '@/components/homePage/sixthSection';
import ThirdSection from '@/components/homePage/thirdSection';
import NavBar from '@/components/reuse/navBar';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar showElements />
      <div className="w-full lg-c:max-w-1k">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EigthSection />
        <NinthSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
