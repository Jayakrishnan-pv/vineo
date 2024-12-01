// src/app/redux/apiSlice.ts

import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './baseQuery';
import { authEndpoints } from './endPoints/authEndpoints';
import { boxEndpoints } from './endPoints/boxEndpoints';
import { questionEndpoints } from './endPoints/questionEndpoints';
import { subscriptionEndpoints } from './endPoints/subscriptionEndpoints';

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export const {
  useLoginMutation,
  useGetBoxHistoryQuery,
  useGetBoxHistoryAdminQuery,
  useGetBoxWinePrintCardMutation,
  useGetSubscriptionStatusQuery,
  useGetSubscriptionListQuery,
  useGetQuestionsQuery,
} = {
  ...authEndpoints.endpoints,
  ...boxEndpoints.endpoints,
  ...subscriptionEndpoints.endpoints,
  ...questionEndpoints.endpoints,
};
