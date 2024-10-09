'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  useGetBoxHistoryQuery,
  useGetSubscriptionStatusQuery,
  useLoginMutation,
} from '@/app/redux/apiSlice';

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
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const { data: boxHistoryData, error: boxHistoryError } = useGetBoxHistoryQuery(
    { page: 1, limit: 10 },
    { skip: !loggedIn },
  );

  const { data: subscriptionStatusData, error: subscriptionStatusError } = useGetSubscriptionStatusQuery(
    undefined,
    { skip: !loggedIn },
  );

  const onSubmit = async (data: FormData) => {
    try {
      const result = await login(data).unwrap();
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
      setLoggedIn(true);
      console.log('Login successful');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  React.useEffect(() => {
    if (loggedIn) {
      if (boxHistoryData) {
        console.log('Box History Data:', boxHistoryData);
      }
      if (subscriptionStatusData) {
        console.log('Subscription Status:', subscriptionStatusData);
      }
    }
  }, [loggedIn, boxHistoryData, subscriptionStatusData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center justify-center">
      <div className="mb-8 w-full">
        <label htmlFor="email" className="block text-sm capitalize text-gray-600">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register('email')}
          className={`w-full rounded-md border-2 border-gray-200 px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="password" className="block text-sm capitalize text-gray-600">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...register('password')}
            className={`w-full rounded-md border-2 border-gray-200 px-3 py-2 pr-10 ${errors.password ? 'border-red-500' : ''}`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      {error && <p className="mb-4 text-sm text-red-500">Login failed. Please try again.</p>}
      <div className="mb-10 flex w-full justify-between text-sm text-blue-950">
        <Link href="#" className="hover:underline">Remember Me</Link>
        <Link href="#" className="hover:underline">Forgot Password?</Link>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-[#F78A79] px-4 py-2 font-normal text-white shadow-md transition-colors hover:bg-red-300 disabled:bg-gray-300"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      <Image src="/flat-color-icons_google.png" alt="Google Logo" width={30} height={30} className="mt-10" />
    </form>
  );
};

export default LoginForm;
