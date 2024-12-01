// page.tsx home page
import '@/styles/global.css';

import React from 'react';

import LoginForm from '@/components/LoginForm';
import NavBar from '@/components/reuse/navBar';

const LoginPage: React.FC = () => {
  return (
    <>
      <NavBar showElements={false} />
      <div className="flex w-full items-center justify-center">
        <div className="flex h-screen w-1k items-center justify-end bg-glass-bottle  bg-contain  bg-left-bottom bg-no-repeat pb-24 sm:pb-0 lg:bg-[length:900px_650px] ">
          <div className="z-50 mx-10 max-h-80% w-full space-y-5 rounded-2xl border px-5 py-10 shadow-2xl backdrop-blur-sm sm:p-16 md:w-3/5 lg:w-2/5 ">
            <div className="space-y-5 text-center">
              <h1 className="text-center font-semibold text-blue-950 md:text-xl lg:text-3xl lg-l:text-4xl">Welcome to Vineo</h1>
              <h2 className="text-center font-normal text-gray-800 md:text-xl lg:text-3xl lg-l:text-4xl">Login</h2>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
