// src/app/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';

import { authEndpoints } from './endPoints/authEndpoints';
import { boxEndpoints } from './endPoints/boxEndpoints';
import { questionEndpoints } from './endPoints/questionEndpoints';
import { subscriptionEndpoints } from './endPoints/subscriptionEndpoints';

const store = configureStore({
  reducer: {
    [authEndpoints.reducerPath]: authEndpoints.reducer,
    [boxEndpoints.reducerPath]: boxEndpoints.reducer,
    [subscriptionEndpoints.reducerPath]: subscriptionEndpoints.reducer,
    [questionEndpoints.reducerPath]: questionEndpoints.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authEndpoints.middleware,
      boxEndpoints.middleware,
      subscriptionEndpoints.middleware,
      questionEndpoints.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
 