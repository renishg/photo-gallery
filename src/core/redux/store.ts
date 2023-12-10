import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {networkReducer, photosReducer} from './slices';
import {apiService} from 'src/core/api';

const extraArgument = {
  apiService,
};

const rootReducer = combineReducers({
  photos: photosReducer,
  network: networkReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: typeof extraArgument;
  rejectValue: string;
};
