import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  console.log('Initial API Response:', result);

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
    console.log('Detected auth error, attempting token refresh');

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

        console.log('Refresh token response:', refreshResult);

        const newTokens = refreshResult.data?.data?.getAccessToken;

        if (newTokens?.accessToken && newTokens?.refreshToken) {
          console.log('Received new tokens, updating storage');

          localStorage.setItem('accessToken', newTokens.accessToken);
          localStorage.setItem('refreshToken', newTokens.refreshToken);

          const newArgs = {
            ...args,
            headers: new Headers(args instanceof Object ? args.headers : undefined),
          };
          if (newArgs.headers instanceof Headers) {
            newArgs.headers.set('authorization', `Bearer ${newTokens.accessToken}`);
          }

          console.log('Retrying original request with new token');
          result = await baseQueryWithAuth(newArgs, api, extraOptions);

          console.log('Retry result:', result);
          return result;
        } else {
          console.log('Failed to get new tokens from refresh response');
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

type BoxWine = {
  id: string;
  name: string;
  box_count: number;
};

type UserInfo = {
  id: string;
  email: string;
  name: string;
  phone: string;
  house: string;
  city: string;
  country: string;
  zipcode: string;
};

type AdminBox = {
  id: string;
  user: UserInfo;
  created_at: string;
  delivery_date: string;
  status: string;
  box_type: string;
  box_wines: BoxWine[];
};

type BoxHistoryAdminResponse = {
  total: number;
  boxes: AdminBox[];
};

type Subscription = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  description: string;
  is_early_adaptor: boolean;
  display_order: number;
  payment_link: string;
  product_id: string;
  duration: number;
  type: number;
  status: string;
  is_current: boolean;
};

type SubscriptionListResponse = {
  loadSubscriptionListForUser: Subscription[];
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
    getBoxHistoryAdmin: builder.query({
      query: ({ searchString, page, pageSize }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getBoxHistoryAdmin($searchString: String!, $page: Float!, $pageSize: Float!) {
              getBoxHistoryAdmin(
                searchString: $searchString
                page: $page
                pageSize: $pageSize
              ) {
                total
                boxes {
                  _id
                  user {
                    _id
                    email
                    name
                    phone
                    house
                    city
                    country
                    zipcode
                  }
                  created_at
                  delivery_date
                  status
                  box_type
                  box_wines {
                    _id
                    name
                    box_count
                  }
                }
              }
            }
          `,
          variables: { searchString, page, pageSize },
        },
      }),
      transformResponse: (response: { data: { getBoxHistoryAdmin: BoxHistoryAdminResponse } }) =>
        response.data.getBoxHistoryAdmin,
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
    getBoxWinePrintCard: builder.mutation<string, { boxId: string }>({
      query: ({ boxId }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
        query getBoxWinePrintCard($box: String!) {
          getBoxWinePrintCard(box: $box)
        }
      `,
          variables: { box: boxId }, // Pass boxId as `box`
        },
      }),
    }),
    getSubscriptionList: builder.query<SubscriptionListResponse, { type: number[]; email: string }>({
      query: ({ type, email }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query loadSubscriptionListForUser($type: [Float!]!) {
  loadSubscriptionListForUser(type: $type) {
    _id
    title
    sub_title
    amount
    description
    is_early_adaptor
    display_order
    payment_link
    product_id
    duration
    type
    status
    is_current
  }
}
          `,
          variables: { type },
        },
      }),
      transformResponse: (response: { data: SubscriptionListResponse }) => response.data,
    }),
  }),
});

export const {
  useLoginMutation,
  useGetBoxHistoryQuery,
  useGetBoxHistoryAdminQuery,
  useGetSubscriptionStatusQuery,
  useGetBoxWinePrintCardMutation,
  useGetSubscriptionListQuery,
} = api;
