// src/app/redux/endPoints/questionEndpoints.ts

import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../baseQuery';

export const questionEndpoints = createApi({
  reducerPath: 'questionApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getQuestions: builder.query({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getQuestions {
              getQuestions {
                question
                question_id
                options {
                  id
                  option
                  description
                }
              }
            }
          `,
          operationName: 'getQuestions',
        },
      }),
      transformResponse: response => response.data.getQuestions,
    }),
  }),
});

export const { useGetQuestionsQuery } = questionEndpoints;
