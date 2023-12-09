import {createSlice} from '@reduxjs/toolkit';
import {photosActions} from './actions';

type PhotosState = {
  isLoading: boolean;
  error?: string;
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
      .addCase(photosActions.fetchPhotos.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(photosActions.fetchPhotos.fulfilled, state => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(photosActions.fetchPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(photosActions.setLoading, (state, action) => {
        state.isLoading = action.payload;
      })
      .addCase(photosActions.reset, state => {
        state.isLoading = false;
        state.error = undefined;
      });
  },
});
