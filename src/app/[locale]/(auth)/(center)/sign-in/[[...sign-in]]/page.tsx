// page.tsx home page
import '@/styles/global.css';

import Image from 'next/image';
import React from 'react';

import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex size-full h-screen items-center justify-around bg-glass-bottle bg-[length:800px_550px] bg-left-bottom bg-no-repeat ">
      <div className="h-screen sm:w-0 md:w-0 lg:w-1/2">
        <Image src="/assets/images/vineo-logo.png" alt="vineo-logo" className="absolute z-0 my-10 ml-5" width={130} height={120} />
      </div>
      <div className="mr-10 rounded-2xl bg-white/80 p-20 shadow-[0px_0px_13px_1px_rgba(0,0,0,0.15)] lg:w-1/3">
        <div className="mb-16 text-center">
          <h1 className="mb-8 text-2xl font-semibold text-blue-950">Welcome to Vineo</h1>
          <h2 className="text-xl font-normal text-gray-800">Login</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
