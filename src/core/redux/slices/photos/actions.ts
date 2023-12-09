import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {GetPhotosResponse} from 'src/core/api/types';
import {ThunkApiConfig} from 'src/core/redux';

const setLoading = createAction<boolean>('photos/setLoading');
const reset = createAction('photos/reset');

const fetchPhotos = createAsyncThunk<
  GetPhotosResponse,
  undefined,
  ThunkApiConfig
>('users/fetchPhotos', async (_, {extra: {apiService}}) => {
  const response = await apiService.getPhotos();
  return response.data;
});

export const photosActions = {
  setLoading,
  reset,
  fetchPhotos,
};
