// src/utils/LogOut.ts

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { api } from '@/app/redux/apiSlice';

export const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(api.util.resetApiState());
    router.replace('/');
  };

  return logout;
};
