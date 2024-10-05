import Image from 'next/image';
import React from 'react';

import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex size-full h-screen items-center justify-around bg-glass-bottle bg-contain bg-no-repeat sm:bottom-0 ">
      <div className="h-screen sm:w-0 md:w-0 lg:w-1/2">
        <Image src="/assets/images/vineo-logo.png" alt="vineo-logo" className="absolute z-0 ml-5 mt-10" width={130} height={120} />
      </div>
      <div className="rounded-2xl bg-white/80 p-16 shadow-[0px_0px_20px_rgba(0,0,0,0.25)] md:h-4/5 lg:w-2/5">
        <div className="mb-16 text-center">
          <h1 className="mb-8 text-2xl font-semibold text-blue-950">Welcome to vineo</h1>
          <h2 className="text-2xl font-normal text-gray-800">Login</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
