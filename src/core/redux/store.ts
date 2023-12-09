import {configureStore} from '@reduxjs/toolkit';
import {networkReducer, photosReducer} from './slices';
import {apiService} from 'src/core/api';

const extraArgument = {
  apiService,
};

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    network: networkReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: typeof extraArgument;
};
