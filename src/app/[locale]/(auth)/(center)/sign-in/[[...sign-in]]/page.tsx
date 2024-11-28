// page.tsx home page
import '@/styles/global.css';

import React from 'react';

import LoginForm from '@/components/LoginForm';
import NavBar from '@/components/reuse/navBar';

const LoginPage: React.FC = () => {
  return (
    <>
      <NavBar showElements={false} />
      <div className=" flex h-screen w-full items-center justify-center">
        <div className=" mt-12 h-full w-1k bg-glass-bottle bg-left-bottom bg-no-repeat md:bg-[length:925px_675px] lg-s:bg-contain">
          <div className="z-20 mx-3 mt-14 flex min-h-70% w-11/12 flex-col items-center justify-center space-y-5 rounded-2xl border p-10 shadow-2xl backdrop-blur-sm md:mx-8 lg:ml-auto lg:w-2/5 lg-l:mt-48 lg-l:w-3/6 lg-l:space-y-16 lg-l:py-32 ">
            <div className="space-y-5 lg-l:space-y-16">
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
