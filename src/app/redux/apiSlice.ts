// apiSlice

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
