'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const query = `
      query userLogin($payload: UserLoginDto!) {
        userLogin(payload: $payload) {
          accessToken
          refreshToken
        }
      }
    `;

    try {
      const response = await fetch('https://vineoback-gh-qa.caprover2.innogenio.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables: { payload: data } }),
      });

      const { data: responseData, errors: responseErrors } = await response.json();

      if (responseErrors) {
        console.error('Login failed.', responseErrors);
      } else {
        const { accessToken, refreshToken } = responseData.userLogin;
        console.log('Login successful', { accessToken, refreshToken });
      }
    } catch (error) {
      console.error('An error occurred. Please try again.', error);
    }
  };

  return (
    <div
      className="absolute flex size-full h-screen items-center justify-around bg-[url('/glass-bottle-drinkware-barware-removebg-preview-7.png')] bg-[length:65%] bg-[position:bottom_left] bg-no-repeat"
    >

      <div className="h-screen sm:w-0 md:w-0 lg:w-1/2">
        <Image src="/image 28.png" alt="vineo-logo" className="ml-24 mt-10 h-8" width={100} height={100} />
      </div>
      <div className="mr-16 h-4/5 rounded-2xl p-16 shadow-lg sm:w-[500px] lg:w-2/5">
        <div className="mb-16 text-center">
          <h1 className="mb-8 text-2xl font-semibold text-blue-950">Welcome to vineo</h1>
          <h2 className="text-2xl font-normal text-gray-800">Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          {['email', 'password'].map(field => (
            <div key={field} className="mb-8 w-full">
              <label htmlFor={field} className="block capitalize text-gray-600">
                {field}
              </label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                id={field}
                {...register(field as keyof FormData)}
                className={`w-full rounded-md px-3 py-2 shadow-md ${errors[field as keyof FormData] ? 'border-red-500' : ''}`}
              />
              {errors[field as keyof FormData] && (
                <p className="mt-1 text-sm text-red-500">{errors[field as keyof FormData]?.message}</p>
              )}
            </div>
          ))}
          <div className="mb-10 flex w-full justify-between font-normal text-blue-950">
            <Link href="#" className="hover:underline">Remember Me</Link>
            <Link href="#" className="hover:underline">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-red-400 px-4 py-2 font-normal text-white shadow-md transition-colors hover:bg-red-300"
          >
            Login
          </button>
          <Image src="/flat-color-icons_google.png" alt="Google Logo" width={30} height={30} className="mt-10" />
        </form>
      </div>
    </div>
  );
};

export default Login;
