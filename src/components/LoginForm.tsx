'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useLoginMutation } from '@/store/store';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm: React.FC = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await login(data).unwrap();
      console.log('Login successful', result);
      // Handle successful login (e.g., store tokens, redirect)
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center justify-center md:px-16">
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
      {error && <p className="mb-4 text-sm text-red-500">Login failed. Please try again.</p>}
      <div className="mb-10 flex w-full justify-between font-normal text-blue-950">
        <Link href="#" className="hover:underline">Remember Me</Link>
        <Link href="#" className="hover:underline">Forgot Password?</Link>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-red-400 px-4 py-2 font-normal text-white shadow-md transition-colors hover:bg-red-300 disabled:bg-gray-300"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      <Image src="/flat-color-icons_google.png" alt="Google Logo" width={30} height={30} className="mt-10" />
    </form>
  );
};

export default LoginForm;
