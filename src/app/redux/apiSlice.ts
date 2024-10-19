import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      console.log('Using existing access token:', token);
    } else {
      console.log('No access token found in localStorage');
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // eslint-disable-next-line no-console
  console.log('Access token expired or invalid. Attempting to refresh...', result?.error.status);
  if (result.error && result.error.status === 401) {
    console.log('Access token expired or invalid. Attempting to refresh...', result.error.status);

    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      console.log('No refresh token available, unable to re-authenticate.');
      return result;
    }

    const refreshResult = await baseQuery(
      {
        url: '',
        method: 'POST',
        body: {
          query: `
            query getAccessTokenFromRefresh($refresh: String!) {
              getAccessToken(refreshToken: $refresh) {
                accessToken
                refreshToken
              }
            }
          `,
          variables: { refresh: refreshToken },
        },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const newAccessToken = refreshResult.data.data.getAccessToken.accessToken;
      const newRefreshToken = refreshResult.data.data.getAccessToken.refreshToken;

      console.log('New access token generated:', newAccessToken);
      console.log('New refresh token generated:', newRefreshToken);

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('Unable to generate new access token.');
    }
  }

  return result;
};

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
