// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({
//   baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//       console.log('Using existing access token:', token);
//     } else {
//       console.log('No access token found in localStorage');
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   // eslint-disable-next-line no-console
//   console.log('error object:', result.data?.errors);
//   console.log('error object extension:', result.data?.errors[0].extensions.exception.response);
//   if (result.data?.errors && result.data?.errors[0].extensions.exception.response.status === 401) {
//     console.log('Access token expired or invalid. Attempting to refresh...');

//     const refreshToken = localStorage.getItem('refreshToken');
//     console.log('refreshTOken:', refreshToken);
//     if (!refreshToken) {
//       console.log('No refresh token available, unable to re-authenticate.');
//       return result;
//     }

//     const refreshResult = await baseQuery(
//       {
//         url: '',
//         method: 'POST',
//         body: {
//           query: `
//             query getAccessTokenFromRefresh($refresh: String!) {
//               getAccessToken(refreshToken: $refresh) {
//                 accessToken
//                 refreshToken
//               }
//             }
//           `,
//           variables: { refresh: refreshToken },
//         },
//       },
//       api,
//       extraOptions,
//     );

//     if (refreshResult.data) {
//       const newAccessToken = refreshResult.data.data.getAccessToken.accessToken;
//       const newRefreshToken = refreshResult.data.data.getAccessToken.refreshToken;

//       console.log('New access token generated:', newAccessToken);
//       console.log('New refresh token generated:', newRefreshToken);

//       localStorage.setItem('accessToken', newAccessToken);
//       localStorage.setItem('refreshToken', newRefreshToken);

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       console.log('Unable to generate new access token.');
//     }
//   }

//   return result;
// };

// export const api = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: builder => ({
//     login: builder.mutation({
//       query: credentials => ({
//         url: '',
//         method: 'POST',
//         body: {
//           query: `
//             query userLogin($payload: UserLoginDto!) {
//               userLogin(payload: $payload) {
//                 accessToken
//                 refreshToken
//               }
//             }
//           `,
//           variables: { payload: credentials },
//         },
//       }),
//       transformResponse: response => response.data.userLogin,
//     }),
//     getBoxHistory: builder.query({
//       query: payload => ({
//         url: '',
//         method: 'POST',
//         body: {
//           query: `
//             query BoxHistory($payload: BoxHistoryDto!) {
//               getBoxHistory(payload: $payload) {
//                 box_count
//                 boxes {
//                   box_id
//                   date
//                   wines {
//                     wine_id
//                     wine_name
//                     image
//                     pair_with
//                     philosophy
//                     about
//                     rating
//                     is_reviewed
//                     score
//                     area
//                     store
//                   }
//                 }
//               }
//             }
//           `,
//           variables: { payload },
//         },
//       }),
//       transformResponse: response => response.data.getBoxHistory,
//     }),
//     getSubscriptionStatus: builder.query({
//       query: () => ({
//         url: '',
//         method: 'POST',
//         body: {
//           query: `
//             mutation getSubscriptionStatus {
//               getSubscriptionStatus {
//                 status
//               }
//             }
//           `,
//         },
//       }),
//       transformResponse: response => response.data.getSubscriptionStatus,
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useGetBoxHistoryQuery,
//   useGetSubscriptionStatusQuery,
// } = api;

// apiSlice

// const refreshTokens = async (accessToken: string, refreshToken: string) => {
//   try {
//     const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL!, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         query: `
//           query getAccessTokenFromRefresh($access: String!, $refresh: String!) {
//             getAccessToken(accessToken: $access, refreshToken: $refresh) {
//               accessToken
//               refreshToken
//             }
//           }
//         `,
//         variables: {
//           access: accessToken,
//           refresh: refreshToken,
//         },
//       }),
//     });

//     const data = await response.json();
//     return data?.data?.getAccessToken;
//   } catch (error) {
//     console.error('Token refresh failed:', error);
//     return null;
//   }
// };

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0MSwiZW1haWwiOiJzaXlhZHJhaG1hbjVAZ21haWwuY29tIiwicm9sZUlkIjoxMCwidmVyc2lvbiI6MSwidG9rZW5UeXBlIjoiYWNjZXNzVG9rZW4iLCJpYXQiOjE3Mjk1OTU2NjksImV4cCI6MTcyOTU5OTI2OX0.K8q8YG6ihy_q4XkGwqW_Vz_0bKMy2DaOnBxSX6n6Ilo';
