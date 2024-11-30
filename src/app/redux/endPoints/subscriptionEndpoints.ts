// src/app/redux/endPoints/subscriptionEndpoints.ts

import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../baseQuery';
import type { SubscriptionList, SubscriptionListResponse } from '../types';

export const subscriptionEndpoints = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getSubscriptionStatus: builder.query({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            mutation getSubscriptionStatus { 
              getSubscriptionStatus {
                status
                subscription_id
                type
                start_date
                end_date
                credit_balance
                number_of_boxes
                is_recommended_polling
              }
            }
          `,
        },
      }),
      transformResponse: response => response.data.getSubscriptionStatus,
    }),
    getSubscriptionList: builder.query<SubscriptionList[], number[]>({
      query: types => ({
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
          variables: { type: types },
        },
      }),
      transformResponse: (response: { data: SubscriptionListResponse }) =>
        response.data.loadSubscriptionListForUser,
    }),
  }),
});

export const {
  useGetSubscriptionStatusQuery,
  useGetSubscriptionListQuery,
} = subscriptionEndpoints;
