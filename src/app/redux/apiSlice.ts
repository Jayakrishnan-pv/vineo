import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    // const token = localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0MSwiZW1haWwiOiJzaXlhZHJhaG1hbjVAZ21haWwuY29tIiwicm9sZUlkIjoxMCwidmVyc2lvbiI6MSwidG9rZW5UeXBlIjoiYWNjZXNzVG9rZW4iLCJpYXQiOjE3Mjk1OTU2NjksImV4cCI6MTcyOTU5OTI2OX0.K8q8YG6ihy_q4XkGwqW_Vz_0bKMy2DaOnBxSX6n6Ilo');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0MSwiZW1haWwiOiJzaXlhZHJhaG1hbjVAZ21haWwuY29tIiwicm9sZUlkIjoxMCwidmVyc2lvbiI6MSwidG9rZW5UeXBlIjoiYWNjZXNzVG9rZW4iLCJpYXQiOjE3Mjk1OTU2NjksImV4cCI6MTcyOTU5OTI2OX0.K8q8YG6ihy_q4XkGwqW_Vz_0bKMy2DaOnBxSX6n6Ilo';
    console.log('header token', token);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// console.log('1.Current tokens:', 'accessToken:', localStorage.getItem('accessToken'));

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  console.log('Initial API Response:', result);

  const hasAuthError = result?.data?.errors?.some(
    error => error?.extensions?.response?.statusCode === 401,
  );

  if (hasAuthError) {
    console.log('Detected 401 error, attempting token refresh');

    const accessToken = localStorage.getItem('accessToken');
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0MSwiZW1haWwiOiJzaXlhZHJhaG1hbjVAZ21haWwuY29tIiwicm9sZUlkIjoxMCwidmVyc2lvbiI6MSwidG9rZW5UeXBlIjoiYWNjZXNzVG9rZW4iLCJpYXQiOjE3Mjk1OTU2NjksImV4cCI6MTcyOTU5OTI2OX0.K8q8YG6ihy_q4XkGwqW_Vz_0bKMy2DaOnBxSX6n6Ilo';
    const refreshToken = localStorage.getItem('refreshToken');

    console.log('1.Current tokens:', 'accessToken:', accessToken, 'refreshToken:', refreshToken);

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

        console.log('2.Refresh token response:', refreshResult);
        if (refreshResult.data?.data?.getAccessToken) {
          const { accessToken: newAccessToken, refreshToken: newRefreshToken }
            = refreshResult.data.data.getAccessToken;

          console.log('3.Received new tokens:', 'newaccessToken', newAccessToken, 'newrefreshToken', newRefreshToken);

          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          console.log('new access token inside localstorage', localStorage.getItem(accessToken));

          console.log('4.Retrying original request with new token');
          result = await baseQueryWithAuth(args, api, extraOptions);
          console.log('5.Retry result:', result);
        } else {
          console.log('6.Failed to get new tokens from refresh response');
          // localStorage.removeItem('accessToken');
          // localStorage.removeItem('refreshToken');
        }
      } catch (error) {
        console.error('Error during token refresh:', error);
        // localStorage.removeItem('accessToken');
        // localStorage.removeItem('refreshToken');
      }
    }
  }

  return result;
};

// Create the API slice with the new base query
export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query userLogin($payload: UserLoginDto!) {
              userLogin(payload: $payload) {
                accessToken
                refreshToken
              }
            }
          `,
          variables: { payload: credentials },
        },
      }),
      transformResponse: response => response.data.userLogin,
    }),
    getBoxHistory: builder.query({
      query: payload => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query BoxHistory($payload: BoxHistoryDto!) {
              getBoxHistory(payload: $payload) {
                box_count
                boxes {
                  box_id
                  date
                  wines {
                    wine_id
                    wine_name
                    image
                    pair_with
                    philosophy
                    about
                    rating
                    is_reviewed
                    score
                    area
                    store
                  }
                }
              }
            }
          `,
          variables: { payload },
        },
      }),
      transformResponse: response => response.data.getBoxHistory,
    }),
    getSubscriptionStatus: builder.query({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            mutation getSubscriptionStatus {
              getSubscriptionStatus {
                status
              }
            }
          `,
        },
      }),
      transformResponse: response => response.data.getSubscriptionStatus,
    }),
  }),
});

export const {
  useLoginMutation,
  useGetBoxHistoryQuery,
  useGetSubscriptionStatusQuery,
} = api;
