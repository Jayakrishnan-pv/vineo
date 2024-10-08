// store/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql' }),
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
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
      transformResponse: (response: { data: { userLogin: LoginResponse } }) => response.data.userLogin,
    }),
  }),
});

export const { useLoginMutation } = api;
