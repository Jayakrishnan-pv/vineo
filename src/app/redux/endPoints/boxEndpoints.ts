// src/app/redux/endPoints/boxEndpoints.ts

import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../baseQuery';
import type { BoxHistoryAdminResponse } from '../types';

export const boxEndpoints = createApi({
  reducerPath: 'boxApi', // Unique reducerPath
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
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
          variables: { box: boxId },
        },
      }),
    }),
  }),
});

export const {
  useGetBoxHistoryQuery,
  useGetBoxHistoryAdminQuery,
  useGetBoxWinePrintCardMutation,
} = boxEndpoints;
