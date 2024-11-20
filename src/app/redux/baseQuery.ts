// src/app/redux/baseQuery.ts

import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  const hasAuthError = (
    result.error?.status === 401
    || result?.data?.errors?.some(
      (error: any) =>
        error?.extensions?.response?.statusCode === 401
        || error?.message?.includes('Unauthorized')
        || error?.message?.includes('invalid token'),
    )
  );

  if (hasAuthError) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      try {
        const refreshResult = await baseQueryWithAuth(
          {
            url: '',
            method: 'POST',
            body: {
              query: `
                query getAccessTokenFromRefresh($access: String!, $refresh: String!) {
                  getAccessToken(accessToken: $access, refreshToken: $refresh) {
                    accessToken
                    refreshToken
                  }
                }
              `,
              variables: {
                access: accessToken,
                refresh: refreshToken,
              },
            },
          },
          api,
          extraOptions,
        );

        const newTokens = refreshResult.data?.data?.getAccessToken;

        if (newTokens?.accessToken && newTokens?.refreshToken) {
          localStorage.setItem('accessToken', newTokens.accessToken);
          localStorage.setItem('refreshToken', newTokens.refreshToken);

          const newArgs = {
            ...args,
            headers: new Headers(args instanceof Object ? args.headers : undefined),
          };
          if (newArgs.headers instanceof Headers) {
            newArgs.headers.set('authorization', `Bearer ${newTokens.accessToken}`);
          }
          result = await baseQueryWithAuth(newArgs, api, extraOptions);

          return result;
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          return {
            error: {
              status: 401,
              data: { message: 'Refresh token failed' },
            },
          };
        }
      } catch (error) {
        console.error('Error during token refresh:', error);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return {
          error: {
            status: 401,
            data: { message: 'Token refresh failed' },
          },
        };
      }
    }
  }

  return result;
};
