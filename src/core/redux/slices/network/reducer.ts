import {createSlice} from '@reduxjs/toolkit';
import {networkActions} from './actions';

type PhotosState = {
  isConnected: boolean;
};

const initialState: PhotosState = {
  isConnected: false,
};

export const {reducer: networkReducer} = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(networkActions.setIsConnected, (state, action) => {
        state.isConnected = action.payload;
      })
      .addCase(networkActions.reset, state => {
        state.isConnected = false;
      });
  },
});
