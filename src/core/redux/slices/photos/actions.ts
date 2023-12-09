import {createAction} from '@reduxjs/toolkit';

const setLoading = createAction<boolean>('photos/setLoading');
const reset = createAction('photos/reset');

export const photosActions = {
  setLoading,
  reset,
};
