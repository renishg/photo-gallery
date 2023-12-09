import {createAction} from '@reduxjs/toolkit';

const setIsConnected = createAction<boolean>('network/setIsConnected');
const reset = createAction('network/reset');

export const networkActions = {
  setIsConnected,
  reset,
};
