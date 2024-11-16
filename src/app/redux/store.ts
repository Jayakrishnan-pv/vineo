// src/app/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';

import { authEndpoints } from './endPoints/authEndpoints';
import { boxEndpoints } from './endPoints/boxEndpoints';
import { subscriptionEndpoints } from './endPoints/subscriptionEndpoints';

const store = configureStore({
  reducer: {
    [authEndpoints.reducerPath]: authEndpoints.reducer,
    [boxEndpoints.reducerPath]: boxEndpoints.reducer,
    [subscriptionEndpoints.reducerPath]: subscriptionEndpoints.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authEndpoints.middleware,
      boxEndpoints.middleware,
      subscriptionEndpoints.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
