import '@/styles/global.css';

import React from 'react';

import EigthSection from '@/components/homePage/eightSection';
import FifthSection from '@/components/homePage/fifthSection';
import FirstSection from '@/components/homePage/firstSection';
import Footer from '@/components/homePage/footer';
import FourthSection from '@/components/homePage/fourthSection';
import NinthSection from '@/components/homePage/ninthSection';
import SecondSection from '@/components/homePage/secondSection';
import SeventhSection from '@/components/homePage/seventhSection';
import SixthSection from '@/components/homePage/sixthSection';
import ThirdSection from '@/components/homePage/thirdSection';
import NavBar from '@/components/reuse/navBar';

const HomePage = () => {
  return (
    <div className="">
      <NavBar showElements />
      <FirstSection />
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
  );
};

export default HomePage;
