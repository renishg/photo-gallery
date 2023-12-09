import {createSlice} from '@reduxjs/toolkit';
import {photosActions} from './actions';

type PhotosState = {
  isLoading: boolean;
};

const initialState: PhotosState = {
  isLoading: false,
};

export const {reducer: photosReducer} = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(photosActions.setLoading, (state, action) => {
        state.isLoading = action.payload;
      })
      .addCase(photosActions.reset, state => {
        state.isLoading = false;
      });
  },
});
