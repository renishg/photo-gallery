import {createSlice} from '@reduxjs/toolkit';
import {networkActions} from './actions';

export type NetworkState = {
  isConnected: boolean;
};

const initialState: NetworkState = {
  isConnected: false,
};

export const {reducer: networkReducer} = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(networkActions.setIsConnected, (state, action) => {
        state.isConnected = action.payload;
      })
      .addCase(networkActions.reset, (state) => {
        state.isConnected = false;
      });
  },
});
