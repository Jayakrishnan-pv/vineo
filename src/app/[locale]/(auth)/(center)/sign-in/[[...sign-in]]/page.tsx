// page.tsx home page
import '@/styles/global.css';

import React from 'react';

import LoginForm from '@/components/LoginForm';
import NavBar from '@/components/reuse/navBar';

const LoginPage: React.FC = () => {
  return (
    <>
      <NavBar showElements={false} />
      <div className="flex size-full h-screen w-full items-center justify-end bg-glass-bottle bg-[length:800px_550px] bg-left-bottom bg-no-repeat ">
        <div className="mx-10 rounded-2xl bg-white/80 p-10 shadow-2xl backdrop-blur-xs md:p-20 lg:w-1/3">
          <div className="mb-16 text-center">
            <h1 className="mb-8 text-2xl font-semibold text-blue-950">Welcome to Vineo</h1>
            <h2 className="text-xl font-normal text-gray-800">Login</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
